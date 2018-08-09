const axios = require ('axios')
require('dotenv').config()

function changeSpaceToPlus(input) {
  let title = input.split(' ')
  return title.join('+')
}

module.exports = {
  trailer : function (req,res) {
    const title = changeSpaceToPlus(req.body.title)
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}+trailer&maxResults=3&key=${process.env.youtube_key}`)
    .then(function(response) {
      let output = []
      let listTrailer = response.data.items
      listTrailer.forEach(trailer => {
        let obj = {
          title : trailer.snippet.title,
          description : trailer.snippet.description,
          url : `https://www.youtube.com/embed/${trailer.id.videoId}`
        }
        output.push(obj)
      });
      res.status(200).json({
        message: `success get movie trailer`,
        data: output
      })
    })
    .catch(function(err) {
      res.status(400).json({
        message: err.message
      })
    })
  }
}