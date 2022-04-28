const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')

const { createUser, getUserInfo } = require('../service/user.service')

class UserController {
    async register(ctx, next) {
        // 1. 获取数据
        const { username, password } = ctx.request.body

        // 2. 操作数据库
        const res = await createUser(username, password)
        if (res != 'error') {
            // 3. 返回结果
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    username: res.username,
                },
            }
        } else {
            ctx.body = {
                code: 4000,
                message: '服务器错误',
                result: {}
            }
        }

    }

    async login(ctx, next) {
        const { username } = ctx.request.body
        // 获取用户信息，在token的payload中，记录id，username，isadmin
        try {
            // 从返回结果对象中剔除password，剩余属性放到res对象
            const { password, ...res } = await getUserInfo({ username })
            ctx.body = {
                code: 0,
                message: '登陆成功',
                result: {
                    token: jwt.sign(res,JWT_SECRET,{expiresIn:'1d'}),
                }
            }
        } catch (err) {
            console.error('用户登陆失败',err)
        }
    }
}

module.exports = new UserController()