import {PublicKey, Signature, verify, fastAggregateVerify} from "@chainsafe/blst-ts";
import {Root} from "@lodestar/types";

export enum SignatureSetType {
  single = "single",
  aggregate = "aggregate",
}

export type ISignatureSet =
  | {
      type: SignatureSetType.single;
      pubkey: PublicKey;
      signingRoot: Root;
      signature: Uint8Array;
    }
  | {
      type: SignatureSetType.aggregate;
      pubkeys: PublicKey[];
      signingRoot: Root;
      signature: Uint8Array;
    };

export function verifySignatureSet(signatureSet: ISignatureSet): boolean {
  // All signatures are not trusted and must be group checked (p2.subgroup_check)
  const signature = Signature.deserialize(signatureSet.signature);
  signature.sigValidate();

  switch (signatureSet.type) {
    case SignatureSetType.single:
      return verify(signatureSet.signingRoot, signatureSet.pubkey, signature);

    case SignatureSetType.aggregate:
      return fastAggregateVerify(signatureSet.signingRoot, signatureSet.pubkeys, signature);

    default:
      throw Error("Unknown signature set type");
  }
}

export function createSingleSignatureSetFromComponents(
  pubkey: PublicKey,
  signingRoot: Root,
  signature: Uint8Array
): ISignatureSet {
  return {
    type: SignatureSetType.single,
    pubkey,
    signingRoot,
    signature,
  };
}

export function createAggregateSignatureSetFromComponents(
  pubkeys: PublicKey[],
  signingRoot: Root,
  signature: Uint8Array
): ISignatureSet {
  return {
    type: SignatureSetType.aggregate,
    pubkeys,
    signingRoot,
    signature,
  };
}
