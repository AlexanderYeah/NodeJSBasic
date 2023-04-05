// 1 导入
const http = require('http')

// 2 创建服务对象 
//  request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
const server = http.createServer((request,response) =>{   
    // 可以设置utf-8 解决乱码
    response.setHeader('content-type','text/html;charset=utf-8');
    response.end('RSI-Moving Average MARTINGALE Trading Strategy 牛逼')
    

})
// 本机访问http://127.0.0.1:9000/
// 端口被占用怎么解决  Error: listen EADDRINUSE: address already in use :::9000
server.listen(9000,()=>{
    console.log('服务已经开启....')
})
