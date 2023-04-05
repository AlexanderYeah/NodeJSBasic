// 导入
const http = require('http')
// 创建服务对象
const server = http.createServer((request,response)=>{
    // 1 设置相应状态码 默认是200
    response.statusCode = 200
    // 2 设置响应状态描述 
    response.statusMessage = 'okoko'
    // 3 设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    response.setHeader('Server','Node.js')
    // 自定义的
    response.setHeader('MyHeader','testtesttest')

    // 4 设置响应体 如果用wirte 的话 最后结束的时候就不用end 设置响应体了
    // write 可以有多个
    response.write('h好的压')
    response.write('你好吗')
    response.end()
    
})
// 开启
server.listen(9000,()=>{
    console.log('server start success')
})