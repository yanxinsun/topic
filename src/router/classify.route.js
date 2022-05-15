const Router = require('koa-router')

const router = new Router({ prefix: '/classify' })

const { getClassifyList } = require('../controller/classify.controller')
// 查看题目
router.get('/', getClassifyList)

//需要验证token的走auth中间件
module.exports = router