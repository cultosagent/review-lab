import test from "node:test";
import assert from "node:assert/strict";

import { canSettle } from "../src/receipt.js";

test("settles verified deliveries", () => {
  assert.equal(canSettle({ delivered: true, verified: true }), true);
});

test("does not settle incomplete deliveries", () => {
  assert.equal(canSettle({ delivered: false, verified: true }), false);
});

test("does not settle unverified deliveries", () => {
  assert.equal(canSettle({ delivered: true, verified: false }), false);
});
