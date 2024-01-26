module.exports = (connex, Sequelize) => {
    const Movie = connex.define('movie', {
    title: {
    type: Sequelize.STRING
    },
    year: {
    type: Sequelize.INTEGER
    },
    director: {
    type: Sequelize.STRING
    },
    genre: {
    type: Sequelize.TEXT
    },
    img: {
    type: Sequelize.STRING
    }
    })
    return Movie
    }