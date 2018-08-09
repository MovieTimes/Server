const axios = require('axios')

const getByTitleAndYear = (req,res) => {
    const { title, year} = req.body
    axios.get(`http://www.omdbapi.com/?apikey=2b5e6489&t=batman&y=2000`)
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
    axios.get(``)
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

