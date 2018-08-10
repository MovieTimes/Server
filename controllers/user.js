const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require ('axios')
require('dotenv').config()

function createFBPassword(email) {
  return email.split("").reverse().join("") + "123";
}

module.exports = {
  loginFB : function (req,res) {
    let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=${req.body.fbtoken}`
    //tinggal di get pake axios
    axios.get(url_user_info)
      .then (resFB => {
        //find wether the response email already in database or not
        let query  = User.where({ email: resFB.data.email })
        query.findOne(function (err, user) {
          if (err) {
            res.status(500)
                .json({message : "internal server error"})
          } else {
            if (user == null) {
              //no user found with above email, register the user
              let newUser = {
                name: resFB.data.name,
                email: resFB.data.email,
                password: createFBPassword(resFB.data.email)
              }
              User.create(newUser, function (err, dataCreated) {
                if (err) {
                  res.status(500)
                      .json({message : "internal server error"})
                } else {
                  let token = jwt.sign({ id: dataCreated._id, name: dataCreated.name, email: dataCreated.email }, process.env.jwt_key)
                  res.status(200)
                      .json({message : "successfully login/register" , token : token})
                }
              })

            } else {
              let token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.jwt_key)
              // console.log(token)
              res.status(200)
                  .json({message : "successfully login/register" , token : token})
            }
          }
        })
      })
  },

  register : function (req,res) {
    User.findOne({ email: req.body.email })
      .then(function(dataUser) {
        if (dataUser) {
          res.status(201)
            .json({
              message: 'Email already exist'
            })
        } else {
          User.create({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            })
            .then(function(dataCreated) {
              res.status(200)
                .json({
                  message: "user sucessfully registered",
                  data: dataCreated
                })
            }).catch(function(err) {
              res.status(201)
                .json({
                  message: 'Internal server error sign up user',
                  err: err
                })
            })
        }
      })
      .catch(function(err) {
        res.status(201)
          .json({
            message: 'Internal server error finding user'
          })
      })
  },

  login : function (req,res) {
    User.findOne({ email: req.body.email })
      .then(dataUser => {
        if (dataUser) {
          let password = bcrypt.compareSync(req.body.password, dataUser.password)
          if (password) {
            let token = jwt.sign({ id: dataUser._id, name: dataUser.name, email: dataUser.email }, process.env.jwt_key)
            res.status(200)
              .json({
                message: "User successfully login",
                token: token
              })
          } else {
            res.status(201).json({
              message: 'Wrong password.'
            })
          }
        } else {
          res.status(201)
            .json({ message: 'wrong email or password' })
        }
      })
      .catch(err => {
        res.status(500)
          .json({
            message: 'Internal server error finding user'
          })
      })
  }
}