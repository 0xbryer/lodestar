// gossip

import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {Type} from "@chainsafe/ssz";

export const ATTESTATION_SUBNET_COUNT = 64;
export const ATTESTATION_PROPAGATION_SLOT_RANGE = 23;
export const MAXIMUM_GOSSIP_CLOCK_DISPARITY = 500;
// req/resp

export type RequestId = string;

export enum Method {
  Status = "status",
  Goodbye = "goodbye",
  Ping = "ping",
  Metadata = "metadata",
  BeaconBlocksByRange = "beacon_blocks_by_range",
  BeaconBlocksByRoot = "beacon_blocks_by_root",
}

export enum MethodResponseType {
  SingleRespone = "SingleRespone",
  NoResponse = "NoResponse",
  Stream = "Stream",
}

export const Methods = {
  [Method.Status]: {
    requestSSZType: (config: IBeaconConfig) => config.types.Status,
    responseSSZType: (config: IBeaconConfig) => config.types.Status,
    responseType: MethodResponseType.SingleRespone
  },
  [Method.Goodbye]: {
    requestSSZType: (config: IBeaconConfig) => config.types.Goodbye,
    responseSSZType: (config: IBeaconConfig) => config.types.Goodbye,
    responseType: MethodResponseType.NoResponse
  },
  [Method.Ping]: {
    requestSSZType: (config: IBeaconConfig) => config.types.Ping,
    responseSSZType: (config: IBeaconConfig) => config.types.Ping,
    responseType: MethodResponseType.SingleRespone
  },
  [Method.Metadata]: {
    requestSSZType: (): null => null,
    responseSSZType: (config: IBeaconConfig) => config.types.Metadata,
    responseType: MethodResponseType.SingleRespone
  },
  [Method.BeaconBlocksByRange]: {
    requestSSZType: (config: IBeaconConfig) => config.types.BeaconBlocksByRangeRequest,
    responseSSZType: (config: IBeaconConfig) => config.types.SignedBeaconBlock,
    responseType: MethodResponseType.Stream
  },
  [Method.BeaconBlocksByRoot]: {
    requestSSZType: (config: IBeaconConfig) => config.types.BeaconBlocksByRootRequest,
    responseSSZType: (config: IBeaconConfig) => config.types.SignedBeaconBlock,
    responseType: MethodResponseType.Stream
  }
};

export enum ReqRespEncoding {
  SSZ = "ssz",
  SSZ_SNAPPY = "ssz_snappy",
}

export enum RpcErrorCode {
  ERR_INVALID_REQ = 1,
  ERR_RESP_TIMEOUT = 2,
}

export const GOSSIP_MAX_SIZE = 2**20;
export const MAX_CHUNK_SIZE = 2**20;
export const TTFB_TIMEOUT = 5 * 1000; // 5 sec
export const RESP_TIMEOUT = 10 * 1000; // 10 sec

