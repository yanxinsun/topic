const { DataTypes } = require('sequelize')

const seq = require('../db/seq')


// 定义的表会自动加s，这里的表名为topics
const Classify = seq.define('classifies', {
  // id 会被sequelize自动创建, 管理
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '分类名称',
  },


})

// 强制同步数据库(创建数据表)
// User.sync({ force: true })

module.exports = Classify