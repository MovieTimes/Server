const axios = require('axios')
require('dotenv').config()

function getSearchTitle(req, res) {
  let title = changeSpaceToPlus(req.body.title)

  axios.get(`https://api.imgur.com/3/gallery/search?q=${title}`, {
    headers: {
      Authorization: process.env.imgurKey
    }
  })
    .then(function (response) {
      res.status(200).json({
        message: `successfully get photos`,
        data: response.data.data[0].images[0].link
      })

    })
    .catch(function (err) {
      res.status(400).json({
        message: err.message
      })
    })

}

function changeSpaceToPlus(input) {
  let title = input.split(' ')

  return title.join('+')
}

module.exports = getSearchTitle

