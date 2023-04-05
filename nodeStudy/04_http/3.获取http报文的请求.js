// 1 引入 
const http = require('http')
// 2 创建c
const server = http.createServer((request,response)=>{
    // 2.1 声明一个变量
    let body = ''
    // 2.2 绑定data 事件
    request.on('data',chunk=>{
        body += chunk
    })
    // 2.3 绑定结束事件
    request.on('end',()=>{
        console.log(body)
        // 响应
        response.end('hello')
    })
})

server.listen(9000,()=>{
    console.log('start sever')
})




