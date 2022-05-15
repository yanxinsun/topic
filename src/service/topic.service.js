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
        return res ? res.dataValues : null
    }
    async getTopicByTitle(req) {
        const currentPage = parseInt(req.pageNum) || 1;
        const pageSize = parseInt(req.pageSize) || 10;
        const Op = seq.Sequelize.Op
        if(req.classify!=1){
             const res = await Topic.findAll({
                attributes: ['id', 'title', 'content'],
                where: {
                    title: {
                        [Op.like]: '%' + req.title + '%',
                    },
                    classify:req.classify
                },
                offset:(currentPage-1)*pageSize,
                limit:pageSize
            })
            return res ? res : null
        }else{
            const res = await Topic.findAll({
                attributes: ['id', 'title', 'content'],
                where: {
                    title: {
                        [Op.like]: '%' + req.title + '%',
                    },
                },
                offset:(currentPage-1)*pageSize,
                limit:pageSize
            })
            return res ? res : null
        }
        
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
        return res ? res : null
    }
}
module.exports = new TopicService