const { getTopicById,getTopicByTitle,getTopicListHot} = require('../service/topic.service')
class TopicController {
    async getTopicById(ctx,next){
        // 1. 获取数据
        const { id } = ctx.request.body

        const res = await getTopicById(id)
        // 2.从数据库查询对应id的titile
        ctx.body = {
            code: 200,
            message: '获取成功',
            result: {
                topicInfo:res
            }
        }
    }
    async getTopicByTitle(ctx,next){
        const param = ctx.request.body
        const res = await getTopicByTitle(param)
        // 2.从数据库查询对应id的titile
        ctx.body = {
            code: 200,
            message: '获取成功',
            result: {
                topicInfo:res
            }
        }
        
    }
    async getTopicListHot(ctx,next){
        const param = ctx.request.body
        const res = await getTopicListHot(param)
        // 2.从数据库查询对应id的titile
        ctx.body = {
            code: 200,
            message: '获取成功',
            result: {
                topicInfo:res
            }
        }
    }
    async addTopic(ctx,next){

    }

   
}

module.exports = new TopicController()