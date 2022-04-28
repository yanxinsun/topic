const { DataTypes } = require('sequelize')

const seq = require('../db/seq')


// 定义的表会自动加s，这里的表名为topics
const Topic = seq.define('topic', {
  // id 会被sequelize自动创建, 管理
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '标题, 唯一',
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '正文',
  },

})

// 强制同步数据库(创建数据表)
// User.sync({ force: true })

module.exports = Topic