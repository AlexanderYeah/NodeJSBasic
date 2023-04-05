const http = require('http')

const server = http.createServer((request,response) =>{
    // 实例化URL对象
    let url = new URL(request.url,'http://127.0.0.1')
    // /search 打印结果
    console.log(url.pathname)
    // 获取对应的参数
    console.log(url.searchParams.get('keyword'))
    response.end('hello there')
})

server.listen(9000,()=>{
    console.log('sever start success')
})