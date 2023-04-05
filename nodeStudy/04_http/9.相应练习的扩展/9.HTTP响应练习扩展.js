// 导入
const http = require('http')

const fs = require('fs')


// 创建服务对象
const server = http.createServer((request,response)=>{
    
    
    // 因为把html 中的css 拆开了  根据不同的路径返回不同的内容
    let {pathname} = new URL(request.url,"http:127.0.0.1")

    if(pathname === '/'){
        let html = fs.readFileSync('./table.html')
        response.end(html)
    }else if(pathname === '/index.css'){
        let css = fs.readFileSync('./index.css')
        response.end(css)
    }
    else if(pathname === '/index.js'){
        let js = fs.readFileSync('./index.js')
        response.end(js)
    }
    else{
        response.statusCode = 404
        response('not found')
    }
                
})
// 开启
server.listen(9000,()=>{
    console.log('server start success')
})
