// 导入fs
const fs = require('fs')

// 读取文件夹
const files = fs.readdirSync('./demo1')
// 未改名之前 输出结果 [ 'aaa.txt', 'bbb.txt', 'ccc.txt', 'ddd.txt' ]
console.log(files)

// 循环遍历改名字 
files.forEach(item =>{
    console.log(item)
    // 重命名
    let newName = 'new' + '-' + item 
    // 这里使用模板字符串拼接
    fs.renameSync(`./demo1/${item}`,`./demo1/${newName}`)
})