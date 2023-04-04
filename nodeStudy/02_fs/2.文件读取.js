// 文件读取用read 
// readFile readFileSync createReadStream

// 1 readFile 可以配置utf-8 
const { error } = require('console')
const fs = require('fs')
fs.readFile('./ball.txt','utf-8',(error,data) => {
    if(error){
        console.log(error)
    }
    console.log(data)
})
// 2  readFileSync
let data1 = fs.readFileSync('./ball.txt','utf-8')
console.log(data1)

// 3 流式读
let rs = fs.createReadStream('./ball.txt')
// 每次取出 64k 数据后执行一次 data 回调
rs.on('data',data => {
    console.log(data)
})
// 读取完毕之后执行end 回调
rs.on('end',()=>{
    console.log("end")
})

// 读取文件的场景  电脑开机 程序运行 查看图片 播放视频






