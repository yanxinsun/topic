const { APP_PORT } = require('./config/config.default')

const app = require('./app')

// 引入https 以及 koa-ssl
const https = require('https')
const sslify = require('koa-sslify').default
const fs = require('fs');
// 路径为证书放置的位置
const options = {
    key: fs.readFileSync('./cert/ssyyxx.xyz.key'),
    cert: fs.readFileSync('./cert/ssyyxx.xyz.pem'),
}

app.use(sslify)

// app.listen(APP_PORT, () => {
//     console.log(`HTTPS Server is running on: https://localhost:${APP_PORT}`);
//   });


  
https.createServer(options, app.callback()).listen(APP_PORT, (err) => {
  if (err) {
    console.log('服务启动出错', err);
  } else {
    console.log('server运行在' + APP_PORT + '端口');
  }	
})