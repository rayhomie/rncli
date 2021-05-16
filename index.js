#!/usr/bin/env node
const program = require('commander')

const createCommands = require('./lib/core/create')

createCommands()
//查看版本号
program.version(require('./package.json').version)


//解析一定要写在参数配置的后面
program.parse(process.argv)


