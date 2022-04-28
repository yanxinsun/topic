const User = require('../model/user.model')

class UserService {
    async createUser(username, password) {
        // 插入数据

        // await表达式: promise对象的值
        try{
            const res = await User.create({ username, password })
            return res.dataValues

        }catch(err){
            console.log('mysql err:',err.message)
            return 'error'
        }


    }
    async getUserInfo({ id, username, password }) {
        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        username && Object.assign(whereOpt, { username })
        password && Object.assign(whereOpt, { password })
        const res = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: whereOpt,
        })
        console.log(res)
        return res ? res.dataValues : null
    }
}
module.exports = new UserService()