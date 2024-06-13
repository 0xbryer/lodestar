import {describe} from "vitest";
import {config} from "@lodestar/config/default";
import {Endpoints} from "../../../../src/beacon/routes/node.js";
import {getClient} from "../../../../src/beacon/client/node.js";
import {getRoutes} from "../../../../src/beacon/server/node.js";
import {runGenericServerTest} from "../../../utils/genericServerTest.js";
import {testData} from "../testData/node.js";

describe("beacon / node", () => {
  runGenericServerTest<Endpoints>(config, getClient, getRoutes, testData);
});