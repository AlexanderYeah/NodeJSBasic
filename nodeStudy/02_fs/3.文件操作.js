// rename 和 renameSync 来移动和重命名文件夹

// fs.rename(oldPath, newPath, callback)
// fs.renameSync(oldPath, newPath)

// 1 修改文件
const { error } = require('console')
const fs = require('fs')
fs.rename('./ball.txt','./rolling.txt',error =>{
    if (error){
        console.log(error)
    }    
})

// 2 文件删除 还有 unlinkSync
fs.unlink('./rolling.txt',error =>{
    if (error) throw error
})





