const express = require('express')
const app = express()
var cors = require('cors')

const path = require('path')
const port = 3001

app.use(cors())
app.use('/fixtures', express.static(path.join(__dirname, 'fixtures')))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/', function (_, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
