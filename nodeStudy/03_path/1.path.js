// resolve 1 拼接规范的绝对路径 最常用
const path = require('path')

//1 拼接规范的路径
// /Users/alexander/Desktop/Personal/Code/Git/NodeJS/nodeStudy/03_path/index.html
console.log(path.resolve(__dirname,'./index.html'))

//2  获取路径分隔符 linux /  windows \
console.log(path.sep)

//3 parse 方法 解析路径并且返回对象
// console.log(__filename)
// /Users/alexander/Desktop/Personal/Code/Git/NodeJS/nodeStudy/03_path/1.path.js

let str1 = "/Users/alexander/Desktop/Personal/Code/Git/NodeJS/nodeStudy/03_path/1.path.js"
console.log(path.parse(str1))

/**  
{
  root: '/',
  dir: '/Users/alexander/Desktop/Personal/Code/Git/NodeJS/nodeStudy/03_path',
  base: '1.path.js',
  ext: '.js',
  name: '1.path'
}
 * */ 

// 4 basename获取文件名
// 1.path.js
console.log( path.basename(str1))

// 5 获取路径名 dirname
// /Users/alexander/Desktop/Personal/Code/Git/NodeJS/nodeStudy/03_path
console.log(path.dirname(str1))
// 6  extname 扩展名
// .js
console.log(path.extname(str1))


