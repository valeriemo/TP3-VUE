const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
 origin: 'http://localhost:8081'    //port client
}
app.use(cors(corsOption))
//models
const db = require('./app/model')
//Sequelize
db.connex.sync()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//test
// app.get('/', (req, res) => {
//  res.json({message: 'Welcome'})
// })

//route
require('./app/route/movie.route')(app)
const PORT = process.env.PORT || 5000               //port server
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`)
})