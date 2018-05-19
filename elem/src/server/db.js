const mongoose = require('mongoose')  
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/elem')  
  
// 为这次连接绑定事件  
const db = mongoose.connection  
db.once('error', () => console.log('Mongo connection error'))  
db.once('open', () => console.log('数据库连接成功'))  
/************** 定义模式loginSchema **************/  
const loginSchema = mongoose.Schema({  
  account: String,  
  password: String,  
  newPassword: String  
}, { collection: 'listData' });

/************** 定义模型Model **************/  
const Models = {
  Login: mongoose.model('Login', loginSchema)  
}

module.exports = Models