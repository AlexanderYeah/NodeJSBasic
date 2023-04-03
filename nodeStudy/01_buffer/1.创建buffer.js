
// 1 创建一个10个字节的buffer
let buff1 = Buffer.alloc(10)
console.log(buff1)

// 2 创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫 unsafe
let buff2 = Buffer.allocUnsafe(8)
console.log(buff2)

// 3 通过字符串创建
let buff3 = Buffer.from('hello')
console.log(buff3)

// 4 Buffer 与字符串的转换

