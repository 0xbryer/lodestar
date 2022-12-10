import {eip4844, ssz} from "@lodestar/types";
import {toHex} from "@lodestar/utils";
import {ContextBytesType, Encoding, ProtocolDefinitionGenerator} from "../types.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const BeaconBlockAndBlobsSidecarByRoot: ProtocolDefinitionGenerator<
  eip4844.BeaconBlockAndBlobsSidecarByRootRequest,
  eip4844.SignedBeaconBlockAndBlobsSidecar
> = (modules, handler) => {
  return {
    method: "beacon_block_and_blobs_sidecar_by_root",
    version: 1,
    encoding: Encoding.SSZ_SNAPPY,
    handler,
    requestType: () => ssz.eip4844.BeaconBlockAndBlobsSidecarByRootRequest,
    // TODO: Make it fork compliant
    responseType: () => ssz.eip4844.SignedBeaconBlockAndBlobsSidecar,
    renderRequestBody: (req) => req.map((root) => toHex(root)).join(","),
    contextBytes: {
      type: ContextBytesType.ForkDigest,
      forkDigestContext: modules.config,
      forkFromResponse: ({beaconBlock}) => modules.config.getForkName(beaconBlock.message.slot),
    },
  };
};
