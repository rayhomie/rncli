/**
 * 执行终端命令相关的代码
 */
//https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#child_process_child_process_spawn_command_args_options
const { exec, spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    //创建子进程，执行终端命令，并返回子进程，获取子进程信息
    const childProcess = spawn(...args)//返回值是该子进程（进行进程间通信）
    childProcess.stdout.pipe(process.stdout)//将子进程的输出流导入到当前进程的输出流中
    childProcess.stderr.pipe(process.stderr)//错误信息导入
    childProcess.on('close', () => {
      resolve()
    })//监听关闭
  })
}
const commandExec = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = exec(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn,
  commandExec
}