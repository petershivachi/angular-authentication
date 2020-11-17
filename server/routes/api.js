const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();
verifyToken = (req, res, next) => {
  if(!req.headers.authorization){
    res.status(401).send('Unauthorized Access');
  }

  let token = req.headers.authorization('')[1]
  if (token === null){
    res.status(400).send('Unauthorized Access')
  }

  let payload = jwt.verify('token', secretKey)
  if (!payload){
    res.status(400).send('Unauthorized Access')
  }
}

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser)=>{
        if(error){
            console.error(error);
        }else{
          let payload = { subject: registeredUser._id };
          let token = jwt.sign(payload, 'secretKey' );
            res.status(200).send(token);
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.error(error)
        }else{
            if(!user){
                res.status(401).send('Invalid User')
            }else{
                if(user.password !== userData.password){
                    res.status(403).send('Invalid credentials, access denied')
                }else{
                  let payload = { subject: user._id };
                  let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send(token)
                }
            }
        }
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })
  
  router.get('/auth-events', (req, res) => {
    let authEvents = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(authEvents)
  })
  

module.exports = router;