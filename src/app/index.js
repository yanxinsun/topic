const Koa = require('koa')
const KoaBody = require('koa-body')

const userRouter = require('../router/user.route')
const topicRouter = require('../router/topic.route')
const classifyRouter = require('../router/classify.route')

const app = new Koa()
app.use(KoaBody())
app.use(userRouter.routes())
app.use(topicRouter.routes())
app.use(classifyRouter.routes())

const cors = require('cors')
app.use(cors())

const errHandler = require('./errHandler')
// 统一的错误处理
app.on('error', errHandler)

module.exports = app 