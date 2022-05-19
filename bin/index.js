#!/usr/bin/env node
const program = require("commander");
program.version(require("../package.json").version);

program
  .command("init <name>")
  .alias("i")
  .description("init project")
  .action(require("../lib/init"));

// 解析主进程的参数
program.parse(process.argv);
