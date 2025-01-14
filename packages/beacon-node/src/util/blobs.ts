import {digest as sha256Digest} from "@chainsafe/as-sha256";
import {Tree} from "@chainsafe/persistent-merkle-tree";
import {ChainForkConfig} from "@lodestar/config";
import {ForkAll, ForkName, KZG_COMMITMENT_GINDEX0, VERSIONED_HASH_VERSION_KZG} from "@lodestar/params";
import {signedBlockToSignedHeader} from "@lodestar/state-transition";
import {BeaconBlockBody, SSZTypesFor, SignedBeaconBlock, deneb, ssz} from "@lodestar/types";

type VersionHash = Uint8Array;

export function kzgCommitmentToVersionedHash(kzgCommitment: deneb.KZGCommitment): VersionHash {
  const hash = sha256Digest(kzgCommitment);
  // Equivalent to `VERSIONED_HASH_VERSION_KZG + hash(kzg_commitment)[1:]`
  hash[0] = VERSIONED_HASH_VERSION_KZG;
  return hash;
}

export function computeInclusionProof(
  fork: ForkName,
  body: BeaconBlockBody,
  index: number
): deneb.KzgCommitmentInclusionProof {
  const bodyView = (ssz[fork].BeaconBlockBody as SSZTypesFor<ForkAll, "BeaconBlockBody">).toView(body);
  const commitmentGindex = KZG_COMMITMENT_GINDEX0 + index;
  return new Tree(bodyView.node).getSingleProof(BigInt(commitmentGindex));
}

export function computeBlobSidecars(
  config: ChainForkConfig,
  signedBlock: SignedBeaconBlock,
  contents: deneb.Contents & {kzgCommitmentInclusionProofs?: deneb.KzgCommitmentInclusionProof[]}
): deneb.BlobSidecars {
  const blobKzgCommitments = (signedBlock as deneb.SignedBeaconBlock).message.body.blobKzgCommitments;
  if (blobKzgCommitments === undefined) {
    throw Error("Invalid block with missing blobKzgCommitments for computeBlobSidecars");
  }

  const signedBlockHeader = signedBlockToSignedHeader(config, signedBlock);
  const fork = config.getForkName(signedBlockHeader.message.slot);

  return blobKzgCommitments.map((kzgCommitment, index) => {
    const blob = contents.blobs[index];
    const kzgProof = contents.kzgProofs[index];
    const kzgCommitmentInclusionProof =
      contents.kzgCommitmentInclusionProofs?.[index] ?? computeInclusionProof(fork, signedBlock.message.body, index);

    return {index, blob, kzgCommitment, kzgProof, signedBlockHeader, kzgCommitmentInclusionProof};
  });
}
