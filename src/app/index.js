const Koa = require('koa')
const KoaBody = require('koa-body')

//引入路由文件
const userRouter = require('../router/user.route')
const topicRouter = require('../router/topic.route')
const classifyRouter = require('../router/classify.route')
const readpdfRouter = require('../router/readpdf.route')

const app = new Koa()
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
}));
//路由
app.use(userRouter.routes())
app.use(topicRouter.routes())
app.use(classifyRouter.routes())
app.use(readpdfRouter.routes())

const cors = require('cors')
app.use(cors())

const errHandler = require('./errHandler')
// 统一的错误处理
app.on('error', errHandler)

module.exports = app 