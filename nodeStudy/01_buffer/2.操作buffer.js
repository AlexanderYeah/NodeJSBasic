 // 1 toString
let buff1 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]) 
console.log(buff1.toString())


// 2 修改
let buff2 = Buffer.from("hello")
buff2[0] = 88
console.log(buff2.toString())

// 3 中文
let buff3 = Buffer.from("你好")
// 输出6个字节 一个中文utf-8 的字符 一般 占 3 个字节占据三个字节
console.log(buff3)