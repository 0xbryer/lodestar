import {CachedBeaconStateAllForks, ISignatureSet, getBlockProposerSignatureSet} from "@lodestar/state-transition";
import {BeaconConfig} from "@lodestar/config";
import {allForks, Root, allForks as allForkTypes, ssz, Slot, isBlindedSignedBeaconBlock} from "@lodestar/types";
import {GENESIS_SLOT} from "@lodestar/params";
import {IBlsVerifier} from "../../chain/bls/index.js";
import {WithBytes} from "../../network/interface.js";
import {BackfillSyncError, BackfillSyncErrorCode} from "./errors.js";

export type BackfillBlockHeader = {
  slot: Slot;
  root: Root;
};

export type BackfillBlock = BackfillBlockHeader & {block: allForks.FullOrBlindedSignedBeaconBlock};

export function verifyBlockSequence(
  config: BeaconConfig,
  blocks: WithBytes<allForkTypes.FullOrBlindedSignedBeaconBlock>[],
  anchorRoot: Root
): {
  nextAnchor: BackfillBlock | null;
  verifiedBlocks: WithBytes<allForkTypes.FullOrBlindedSignedBeaconBlock>[];
  error?: BackfillSyncErrorCode.NOT_LINEAR;
} {
  let nextRoot: Root = anchorRoot;
  let nextAnchor: BackfillBlock | null = null;

  const verifiedBlocks: WithBytes<allForkTypes.FullOrBlindedSignedBeaconBlock>[] = [];
  for (const block of blocks.reverse()) {
    const blockRoot = isBlindedSignedBeaconBlock(block.data)
      ? config
          .getBlindedForkTypes(block.data.message.slot)
          .BeaconBlock.hashTreeRoot((block.data as allForks.SignedBlindedBeaconBlock).message)
      : config
          .getForkTypes((block.data as allForks.SignedBeaconBlock).message.slot)
          .BeaconBlock.hashTreeRoot((block.data as allForks.SignedBeaconBlock).message);
    if (!ssz.Root.equals(blockRoot, nextRoot)) {
      if (ssz.Root.equals(nextRoot, anchorRoot)) {
        throw new BackfillSyncError({code: BackfillSyncErrorCode.NOT_ANCHORED});
      }
      return {nextAnchor, verifiedBlocks, error: BackfillSyncErrorCode.NOT_LINEAR};
    }
    verifiedBlocks.push(block);
    nextAnchor = {block: block.data, slot: block.data.message.slot, root: nextRoot};
    nextRoot = block.data.message.parentRoot;
  }
  return {nextAnchor, verifiedBlocks};
}

export async function verifyBlockProposerSignature(
  bls: IBlsVerifier,
  state: CachedBeaconStateAllForks,
  blocks: WithBytes<allForkTypes.FullOrBlindedSignedBeaconBlock>[]
): Promise<void> {
  if (blocks.length === 1 && blocks[0].data.message.slot === GENESIS_SLOT) return;
  const signatures = blocks.reduce((sigs: ISignatureSet[], block) => {
    // genesis block doesn't have valid signature
    if (block.data.message.slot !== GENESIS_SLOT) sigs.push(getBlockProposerSignatureSet(state, block.data));
    return sigs;
  }, []);

  if (!(await bls.verifySignatureSets(signatures, {batchable: true}))) {
    throw new BackfillSyncError({code: BackfillSyncErrorCode.INVALID_SIGNATURE});
  }
}
