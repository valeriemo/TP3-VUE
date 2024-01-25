const db = require('../model')
const Movie = db.movies
const OP = db.Sequelize.Op

exports.create = (req, res) => {
    //console.log(req.body)
    Movie.create(req.body)
    .then(data => {
    res.send(data)
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || 'Could not insert the data'
    })
    })
}

exports.findAll = (req, res) => {
    Movie.findAll()
    .then(data => {
    res.send(data)
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || 'Some error occurred'
    })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Movie.findByPk(id)
    .then(data =>{
    res.send(data)
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || `Some error occurred cannot find data id ${id}`
    })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Movie.destroy({
    where: { id : id }
    })
    .then(num => {
    if (num == 1) {
    res.send({
    message: "movie was deleted"
    })
    } else {
    res.send({
    message: "Cannot delete this movie"
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || `Some error occurred cannot find data id ${id}`
    })
    })
   }

exports.update = (req, res) => {
    const id = req.params.id
    Movie.update(req.body, {
    where: { id: id} 
    })
    .then(num => {
    if (num == 1){
    res.send({
    message: 'movie updated'
    })
    } else {
    res.send({
    message: 'movie not found'
    })
    }
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || `Some error occurred cannot find data id ${id}`
    })
    })
}
