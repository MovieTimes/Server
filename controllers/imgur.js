const axios = require('axios')
require('dotenv').config()

function getSearchTitle(req,res){
    let title = changeSpaceToPlus(req.body.title)
       
    axios.get(`https://api.imgur.com/3/gallery/search?q=${title}`,{
    headers :{
      Authorization : process.env.imgurKey
    }
  })
    .then(function(response) {
    console.log(response.data.data[0].images[0].link);
    
    })
    .catch (function (err) {
      console.log(err)
    })

}

function changeSpaceToPlus(input) {
  let title = input.split(' ')

  return title.join('+')
}

module.exports = getSearchTitle

