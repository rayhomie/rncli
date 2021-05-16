const { promisify } = require('util')
const path = require('path')
const readFile = promisify(require('fs').readFile)
const writeFile = promisify(require('fs').writeFile)

async function writeProjectName(Path, name) {//修改package.json的name
  const data = await readFile(path.join(Path, 'package.json'), 'utf8')
  const newList = {}
  const list = JSON.parse(data)
  for (let key in list) {
    if (key === 'name') {
      newList[key] = name
      continue
    }
    newList[key] = list[key];
  }
  let newContent = JSON.stringify(newList, null, 2);
  await writeFile(path.join(Path, 'package.json'), newContent, 'utf8')
}
module.exports = writeProjectName