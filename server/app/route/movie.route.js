const movie = require('../controller/movie.controller');
const router = require('express').Router()

module.exports = app => {
    router.get('/', movie.findAll)
    router.post('/', movie.create)
    router.get('/:id', movie.findOne)
    router.delete('/:id', movie.delete)
    router.put('/:id', movie.update)
    app.use('/api/movie', router)
}
