// 导入
const http = require('http')
const path = require('path')

// 创建服务对象
const server = http.createServer((request,response)=>{

   
    // 结构赋值
    let {method} = request
    let {pathname} = new URL(request.url,'http://127.0.0.1')    
    // 解决中文乱码   
    response.setHeader('content-type','text/html;charset=utf-8')
            
    if (pathname === '/login' && method === 'GET'){
        response.end('这是登录页面')
    }else if(pathname === '/register' && method === 'GET'){
        response.end('这是注册页面')
    }else{
        response.end('404 Not Found')
    }
    
})
// 开启
server.listen(9000,()=>{
    console.log('server start success')
})