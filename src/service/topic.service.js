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
    async getTopicListHot(req){
        // const where = {}
        const currentPage = parseInt(req.pageNum) || 1;
        const pageSize = parseInt(req.pageSize) || 10;
        // 总条数
        // const result = await Topic.findAndCountAll();
        // console.log('条数',result.count);

        const res = await Topic.findAll({
            attributes: ['id', 'title', 'content'],
            order:[['id','desc']],
            // where:where,
            offset:(currentPage-1)*pageSize,
            limit:pageSize
        })
        console.log('4444',res)
        return res ? res : null
    }
}
module.exports = new TopicService