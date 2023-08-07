import {DOMAIN_BLS_TO_EXECUTION_CHANGE, ForkName} from "@lodestar/params";
import {capella, ssz} from "@lodestar/types";
import {BeaconConfig} from "@lodestar/config";
import {PublicKey, CoordType} from "@chainsafe/blst-ts";

import {computeSigningRoot, ISignatureSet, SignatureSetType, verifySignatureSet} from "../util/index.js";
import {CachedBeaconStateAllForks} from "../types.js";

export function verifyBlsToExecutionChangeSignature(
  state: CachedBeaconStateAllForks,
  signedBLSToExecutionChange: capella.SignedBLSToExecutionChange
): boolean {
  return verifySignatureSet(getBlsToExecutionChangeSignatureSet(state.config, signedBLSToExecutionChange));
}

/**
 * Extract signatures to allow validating all block signatures at once
 */
export function getBlsToExecutionChangeSignatureSet(
  config: BeaconConfig,
  signedBLSToExecutionChange: capella.SignedBLSToExecutionChange
): ISignatureSet {
  // signatureFork for signing domain is fixed
  const signatureFork = ForkName.phase0;
  const domain = config.getDomainAtFork(signatureFork, DOMAIN_BLS_TO_EXECUTION_CHANGE);

  return {
    type: SignatureSetType.single,
    // The withdrawal pubkey is the same as signedBLSToExecutionChange's fromBlsPubkey as it should
    // be validated against the withdrawal credentials digest
    pubkey: PublicKey.deserialize(signedBLSToExecutionChange.message.fromBlsPubkey, CoordType.affine),
    signingRoot: computeSigningRoot(ssz.capella.BLSToExecutionChange, signedBLSToExecutionChange.message, domain),
    signature: signedBLSToExecutionChange.signature,
  };
}

export function getBlsToExecutionChangeSignatureSets(
  config: BeaconConfig,
  signedBlock: capella.SignedBeaconBlock
): ISignatureSet[] {
  return signedBlock.message.body.blsToExecutionChanges.map((blsToExecutionChange) =>
    getBlsToExecutionChangeSignatureSet(config, blsToExecutionChange)
  );
}
