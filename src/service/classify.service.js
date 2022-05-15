const Classify = require("../model/classify.model")

class classifyService{
    async classifyList(){
        const res = await Classify.findAll({
            attributes: ['id', 'name'],
        })
        return res ? res : null
    }
}

module.exports = new classifyService