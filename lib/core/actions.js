const { promisify } = require('util')
const path = require('path')
const { RN_Repo } = require('../config/repo-config')
const writeProjectName = require('../utils/wirteProjectName')

const { commandSpawn } = require('../utils/terminal')
//这个库不支持promise，将它外面包一层promise
const download = promisify(require('download-git-repo'))
//克隆创建项目
const createProjectAction = async (project, others) => {
  console.log('rncli help you create you project~');
  //1.clone项目
  await download(RN_Repo, project, { clone: true })

  //2.修改package.json的name字段
  await writeProjectName(path.resolve(project), project)
  
  //3.执行npm install（兼容Windows）
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(npm, ['install', '--force'], { cwd: `./${project}` })//cwd选择执行路径


  await console.log(`
  
  cd ./${project} 
  and getting started`)
}



module.exports = {
  createProjectAction
}
