//  导入http 模块
const http = require('http')
// 1 导入url 模块
const url = require('url')

// 创建
const server = http.createServer((request,response) =>{
    // 获取url路径和查询字符串
    // 输出: /search?keyword=123
    console.log(request.url)
    // 解析url 第二个参数传true,则query 返回参数的对象
    let res = url.parse(request.url,true)   
    // 路径
    let pathname = res.pathname
     // 输出 /search
    console.log(pathname)

    // 查询字符串
    let query = res.query
    // 输出 : [Object: null prototype] { keyword: '123' }
    console.log(query)

    response.end('url')
})
// 开启
server.listen(9000,()=>{
     console.log("server start")
})  