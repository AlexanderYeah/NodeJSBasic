// 创建一个文件 xxx.txt 并且写入内容

// 一 文件的写入

// 1 导入 fs 模块
const { error } = require('console')
const fs = require('fs')
 
// 2 异步写入文件  fs.writeFile(file, data[, options], callback)
fs.writeFile('./rsi.txt','RSI-Moving Average MARTINGALE Trading Strategy',error =>{
    if(error){
        console.log(error)
        return
    }
    console.log("success")
})

// 3 同步写入
try {
    fs.writeFileSync('./ball.txt','let get the ball rolling by laying down the foundation for the RSI-Moving Average MARTINGALE Trading Strategy')
} catch (error) {
    if(error){
        console.log(error)         
    }
}

// 4 appendFile  appendFileSync 追加写入 
// fs.appendFile('./ball.txt','The RSI combines the time element with the price element',error =>{
//     if(error){
//         console.log(error)         
//     }
//     console.log("appendFile success")
// })

// 5 同步追加
// fs.appendFileSync('./ball.txt','and the power of scaling into the position')

// 6 流式写入
// 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数。流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于 写入频率较低的场景
let ws = fs.createWriteStream('./ball.txt')
ws.write('\/n to find overbought and oversold situation in the market')
ws.write('\/n The golden rule of the System is to only trade in the direction of the predominant trend')

// 7 写入的场景 下载文件  安装软件 保存日志 编辑文件 










