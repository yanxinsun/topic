const Router = require('koa-router')
const multer = require('koa-multer')
const fs = require('fs')
const path=require('path'); // 导入path包 用于拼接路径
const router = new Router({ prefix: '/readpdf' })

const { readFile2 } = require('../controller/readpdf.controller')
// 读取文件
// router.post('/', readFile)
router.post('/uploadfile2', readFile2)

router.post('/uploadfile', async (ctx, next) => {

    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    // const reader = fs.createReadStream(file.path);
    // console.log('reader',__dirname)

    // let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    // console.log('filePath',filePath)

    fileContent = fs.readFileSync(file.path); //读取文件
    console.log(fileContent)

    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！";

});
module.exports = router