const Router = require('koa-router')

const router = new Router({ prefix: '/topic' })

const { getTopicById, addTopic,getTopicByTitle,getTopicListHot } = require('../controller/topic.controller')
// 查看题目
router.post('/content', getTopicById)
//通过title查看题目
router.post('/title', getTopicByTitle)
// 增加题目
router.post('/add', addTopic)

router.post('/hot', getTopicListHot)
//需要验证token的走auth中间件
module.exports = router