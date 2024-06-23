import { test } from "node:test";
import * as assert from "node:assert";
import { build } from "../helper";

test("default root route", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/",
  });
  assert.equal(
    res.payload,
    <>
      {"<!doctype html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body>
          <h1>Hello, world!</h1>
          <p>Welcome to the KitaJS HTML package.</p>
        </body>
      </html>
    </>
  );
});
