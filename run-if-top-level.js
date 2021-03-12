"use strict"

const path = require("path")

if (!__dirname.split(path.sep).includes("node_modules")) {
  const [, , cmd, ...args] = process.argv
  require("child_process").spawnSync(cmd, args, {stdio: "inherit"})
}
