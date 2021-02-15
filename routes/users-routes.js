const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

const { getUserDetails, insertUser } = require('../repositories/users-repo');
const {
  getQuery,
  getQueryArrayForOperation,
} = require('../repositories/db-operations');

app.post('/login', async (req, res) => {
  try {
    const user = await getUserDetails(
      generateQueryForDeleteDetails(req.body),
      getCommonProjection(),
      'blogs_master'
    );
    if (user && user.length > 0) {
      const accessToken = jwt.sign(user[0], config.jwt_secret);
      res.status(200);
      res.setHeader('token', accessToken);
      res.json(user[0]);
    } else {
      res.status(400).json('email/password do not match');
    }
  } catch (error) {
    res.status(500).json(error);
    console.log('error while fetching user details: %j , %s', error, error);
    throw error;
  }
});

app.post('/signUp', async (req, res) => {
  try {
    const user = await insertUser(req.body, 'blogs_master');
    res.status(200).json('signup successfully');
  } catch (error) {
    res.status(500).json(error);
    console.log('error while signing up: %j , %s', error, error);
    throw error;
  }
});

function generateQueryForDeleteDetails(reqBody) {
  const query = [];
  query.push(getQuery('password', '$eq', reqBody.password));
  query.push(getQuery('email', '$eq', reqBody.email));
  return getQueryArrayForOperation('$and', query);
}

function getCommonProjection() {
  const json = {};
  json['_id'] = false;
  json['__v'] = false;
  return json;
}

module.exports = app;
