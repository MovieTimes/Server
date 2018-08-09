const axios = require('axios')
require('dotenv').config()

const getAllMovieReviews = (req,res) => {
    axios.get('http://api.nytimes.com/svc/movies/v2/reviews/all.json',{
        headers: {
            'apikey': `${process.env.nytimes}`
        }
    })
    .then(function(response){
        let raw_data = response.data.results
        let array = []

        raw_data.forEach(news => {
            let obj = {
                display_title: news.display_title,
                reviewer: news.byline,
                summary_short: news.summary_short
            }
            array.push(obj)
        })
        res.status(200).json({
            message: `nytimes data`,
            data: array
        })
    })
    .catch(function(err){
        res.status(400).json({
            message: err.message
        })
    })
}


module.exports = {
    getAllMovieReviews
}