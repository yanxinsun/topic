const { getTopicById,getTopicByTitle} = require('../service/topic.service')
class TopicController {
    async getTopicById(ctx,next){
        // 1. 获取数据
        const { topicId } = ctx.request.body

        const res = await getTopicById(topicId)
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
        const { title } = ctx.request.body
        const res = await getTopicByTitle(title)
        console.log('3333',res)
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