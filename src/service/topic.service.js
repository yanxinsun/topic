const Topic = require("../model/topic.model")
const seq = require('../db/seq')

class TopicService {
    async getTopicById(id) {
        const whereOpt = {}
        id && Object.assign(whereOpt, { id })
        const res = await Topic.findOne({
            attributes: ['id', 'title', 'content'],
            where: whereOpt
        })
        console.log(res)
        return res ? res.dataValues : null
    }
    async getTopicByTitle(title) {
        const Op = seq.Sequelize.Op
        const res = await Topic.findAll({
            attributes: ['id', 'title', 'content'],
            where: {
                title: {
                    [Op.like]: '%' + title + '%',
                }
            },
        })
        return res ? res : null
    }
}
module.exports = new TopicService