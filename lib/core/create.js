const program = require('commander')

const {
  createProjectAction
} = require('./actions')

const createCommands = () => {
  //创建克隆项目指令
  program
    .command('create <project> [others...]')//创建命令
    .description('clone repository into a folder')//描述
    .action(createProjectAction)//触发
}

module.exports = createCommands
