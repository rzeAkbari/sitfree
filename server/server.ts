const express = require('express')
const app = express()
const path = require('path')
const port = 3001

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', function (_, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
