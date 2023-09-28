const express = require('express')
const app = express()
const port = 3000

// cors digunakan untuk mengizinkan browser pada suatu domain mengakses ke server pada sumber yang berbeda
// atau agar api bisa dibuka melalui aplikasi berbeda
const cors = require('cors')

// Body Parser merupakan library yang berisi middleware untuk membaca sebuah
// data yang dikirimkan oleh HTTP POST dan menyimpannya sebagai objek
// JavaScript yang dapat di akses melalui req.body
// import body-parser
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
//use cors
app.use(cors())

const postsRouter = require('./routes/posts')
app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})