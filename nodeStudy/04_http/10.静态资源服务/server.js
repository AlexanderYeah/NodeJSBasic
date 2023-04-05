// 导入
const http = require('http')

const fs = require('fs')
const path = require('path')
const { error } = require('console')

let mineTypes = {
    html: 'text/html', 
    css: 'text/css', 
    js: 'text/javascript', 
    png: 'image/png', 
    jpg: 'image/jpeg', 
    gif: 'image/gif', 
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}
// 创建服务对象
const server = http.createServer((request,response)=>{
    
    
    // 因为把html 中的css 拆开了  根据不同的路径返回不同的内容
    let {pathname} = new URL(request.url,"http:127.0.0.1")             
    // 拼接文件路径
    let filePath = __dirname + '/page'  + pathname

    fs.readFile(filePath,(error,data) =>{
        if(error){
            switch (error.code){
                case 'ENOENT':
                    response.statusCode = 404
                    response.end('<h1> 404 Not Found</h1>')
                case 'EPERM':
                    response.statusCode = 403
                    response.end('<h1>403 Forbidden</h1>')  
            }
            return
            // response.statusCode = 500
            // response.end("文件读取失败")
            // return
        }
        //获取文件后缀名
        let ext = path.extname(filePath).slice(1)
        // 打印结果 html css js
        console.log(ext)
        // 获取文件的后缀名
        let type = mineTypes[ext]
        if(type){
            // 匹配到文件类型 
            response.setHeader('content-type',type)
        }else{
            // 对于未知的资源类型，可以选择 application/octet-stream 类型，浏览器在遇到该类型的响应
            //  时，会对响应体内容进行独立存储，也就是我们常见的 下载 效果
            response.setHeader('content-type','application/octet-stream')
        }
        response.end(data)
    })

    // if(pathname === '/index.html'){
    //     let html = fs.readFileSync('./page/index.html')
    //     response.end(html)
    // }else if(pathname === '/css/index.css'){
    //     let css = fs.readFileSync('./page/css/index.css')
    //     response.end(css)
    // }else if(pathname === '/images/logo.png'){
    //     let image = fs.readFileSync('./page/images/logo.png')
    //     response.end(image)
    // }
    // else if(pathname === '/index.js'){
    //     let js = fs.readFileSync('./index.js')
    //     response.end(js)
    // }
    // else{
    //     response.statusCode = 404
    //     response('not found')
    // }
                
})
// 开启
server.listen(9000,()=>{
    console.log('server start success')
})
