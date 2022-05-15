const { classifyList } = require("../service/classify.service")

class ClassifyController {
    async getClassifyList(ctx, next) {
        // 1. 获取数据
        const res = await classifyList()
        // 2.从数据库查询对应id的titile
        ctx.body = {
            code: 200,
            message: '获取成功',
            result: {
                classifyInfo: res
            }
        }
    }
    async getClassifyById(ctx, next) {

    }
}
module.exports = new ClassifyController()