//1  mkdir / mkdirSync 创建文件夹

const { error } = require('console')
const fs = require('fs')
// 当前目录创建一个文件夹
fs.mkdir('./demo1',error =>{
   if(error) console.log(error)
})

// 递归创建
fs.mkdir('./1/2/3',{recursive:true},error =>{
    if(error) console.log(error)
})


// 2 读取文件夹 readdir 或 readdirSync 来读取文件夹
// 输出结果为 [ '2' ]
fs.readdir('./1',(error,data) =>{
    if(error) console.log(error)
    console.log(data)
})

// 3 删除文件夹  rmdir 或 rmdirSync 来删除文件夹
// 如果文件夹不为空 则无法删除 会报错 ENOTEMPTY
fs.rmdir('./demo1',error => {
    if(error) console.log(error)
})

// 递归删除文件夹 
fs.rmdir('./1',{recursive:true},error =>{
    if(error) console.log(error)
})


