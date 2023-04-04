// 我们可以使用 stat 或 statSync 来查看资源的详细信息

const { error } = require('console')
const fs = require('fs')

fs.stat('./rsi.txt',(error,data) => {
    if(error) console.log(error)
    console.log(data)  
})
// 详细信息
/**
 * Stats {
  dev: 16777231,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14026703,
  size: 46,
  blocks: 8,
  atimeMs: 1680570713923.2905,
  mtimeMs: 1680570713101.3362,
  ctimeMs: 1680570713101.3362,
  birthtimeMs: 1680569678643.5413,
  atime: 2023-04-04T01:11:53.923Z,
  mtime: 2023-04-04T01:11:53.101Z,
  ctime: 2023-04-04T01:11:53.101Z,
  birthtime: 2023-04-04T00:54:38.644Z
}
*/