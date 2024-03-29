const express = require('express')
const compression = require('compression')

// https
// const https = require('https')
// const fs = require('fs')

const app = express()

// https
// const options = {
//     cret: fs.readFileSync('./full_chain.pem'),
//     key: fs.readFileSync('./private.key')
// }

// 一定要把这一行代码，写到静态资源托管之前 否则不生效
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

// https.createServer(options, app).listen(443)