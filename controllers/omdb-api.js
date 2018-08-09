const axios = require('axios')
require('dotenv').config()

const getByTitleAndYear = (req,res) => {
    const { title, year } = req.body
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.omdbkey}&s=${changeSpaceToPlus(title)}&y=${year}`)
    .then(function(response) {
        console.log(response.data);
        res.status(200).json({
            message: `success get a movie by title and year`,
            data: response.data
        })
    })
    .catch(function(err) {
        res.status(400).json({
            message: err.message
        })
    })
}

const getById = (req,res) => {
    const { id } = req.body
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.omdbkey}&i=${id}&plot=full`)
    .then(function(response) {
        console.log(response.data);
        res.status(200).json({
            message: `success get a movie by ID`,
            data: response.data
        })
    })
    .catch(function(err) {
        res.status(400).json({
            message: err.message
        })
    })
}

function changeSpaceToPlus(input) {
    let title = input.split(' ')

    return title.join('+')
}

module.exports = {
    getByTitleAndYear,
    getById
}

