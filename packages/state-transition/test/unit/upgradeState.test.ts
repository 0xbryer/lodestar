import {expect} from "chai";
import {ssz} from "@lodestar/types";
import {ForkName} from "@lodestar/params";
import {createCachedBeaconState, newUnfinalizedPubkeyIndexMap, PubkeyIndexMap} from "@lodestar/state-transition";
import {createBeaconConfig, ChainForkConfig, createChainForkConfig} from "@lodestar/config";
import {config as chainConfig} from "@lodestar/config/default";

import {upgradeStateToDeneb} from "../../src/slot/upgradeStateToDeneb.js";
import {upgradeStateToEIP6110} from "../../src/slot/upgradeStateToEIP6110.js";

describe("upgradeState", () => {
  it("upgradeStateToDeneb", () => {
    const capellaState = ssz.capella.BeaconState.defaultViewDU();
    const config = getConfig(ForkName.capella);
    const stateView = createCachedBeaconState(
      capellaState,
      {
        config: createBeaconConfig(config, capellaState.genesisValidatorsRoot),
        finalizedPubkey2index: new PubkeyIndexMap(),
        finalizedIndex2pubkey: [],
      },
      newUnfinalizedPubkeyIndexMap(),
      {skipSyncCommitteeCache: true}
    );
    const newState = upgradeStateToDeneb(stateView);
    expect(() => newState.toValue()).to.not.throw();
  });
  it("upgradeStateToEIP6110", () => {
    const denebState = ssz.deneb.BeaconState.defaultViewDU();
    const config = getConfig(ForkName.deneb);
    const stateView = createCachedBeaconState(
      denebState,
      {
        config: createBeaconConfig(config, denebState.genesisValidatorsRoot),
        finalizedPubkey2index: new PubkeyIndexMap(),
        finalizedIndex2pubkey: [],
      },
      newUnfinalizedPubkeyIndexMap(),
      {skipSyncCommitteeCache: true}
    );
    const newState = upgradeStateToEIP6110(stateView);
    expect(() => newState.toValue()).to.not.throw();
  });
});

const ZERO_HASH = Buffer.alloc(32, 0);
/** default config with ZERO_HASH as genesisValidatorsRoot */
const config = createBeaconConfig(chainConfig, ZERO_HASH);

/* eslint-disable @typescript-eslint/naming-convention */
function getConfig(fork: ForkName, forkEpoch = 0): ChainForkConfig {
  switch (fork) {
    case ForkName.phase0:
      return config;
    case ForkName.altair:
      return createChainForkConfig({ALTAIR_FORK_EPOCH: forkEpoch});
    case ForkName.bellatrix:
      return createChainForkConfig({
        ALTAIR_FORK_EPOCH: 0,
        BELLATRIX_FORK_EPOCH: forkEpoch,
      });
    case ForkName.capella:
      return createChainForkConfig({
        ALTAIR_FORK_EPOCH: 0,
        BELLATRIX_FORK_EPOCH: 0,
        CAPELLA_FORK_EPOCH: forkEpoch,
      });
    case ForkName.deneb:
      return createChainForkConfig({
        ALTAIR_FORK_EPOCH: 0,
        BELLATRIX_FORK_EPOCH: 0,
        CAPELLA_FORK_EPOCH: 0,
        DENEB_FORK_EPOCH: forkEpoch,
      });
    case ForkName.eip6110:
      return createChainForkConfig({
        ALTAIR_FORK_EPOCH: 0,
        BELLATRIX_FORK_EPOCH: 0,
        CAPELLA_FORK_EPOCH: 0,
        DENEB_FORK_EPOCH: 0,
        EIP6110_FORK_EPOCH: forkEpoch,
      });
  }
}
