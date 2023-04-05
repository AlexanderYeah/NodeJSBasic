// 导入
const http = require('http')

const fs = require('fs')


// 创建服务对象
const server = http.createServer((request,response)=>{
    // 1 设置相应状态码 默认是200
    let html = fs.readFileSync('./temp.html')
    response.end(html)
    
})
// 开启
server.listen(9000,()=>{
    console.log('server start success')
})
