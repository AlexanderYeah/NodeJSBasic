// 1 导入
const http = require('http')
// 2 创建
const server = http.createServer((request,response)=>{
    // 2.1 获取方法
    console.log(request.method)    
    // 2.2 获取请求的url
    console.log(request.url)
    // 2.3 获取请求头 
    console.log(request.headers)
    console.log(request.headers.host)
    // 2.4 获取http版本号
    console.log(request.httpVersion)

    response.end('using as reference the 200-day moving average')
})
// 3 启动
server.listen(9000,()=>{
    console.log('start server')
})


