'use strict';

const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

const { getUserDetails, insertUser } = require('../repositories/users-repo');
const {
  getQuery,
  getQueryArrayForOperation,
  getCommonProjection,
} = require('../repositories/db-operations');

app.post('/login', async (req, res) => {
  try {
    const user = await getUserDetails(
      generateQueryForLoginDetails(req.body),
      getCommonProjection(),
      'blogs_master'
    );
    if (user) {
      const accessToken = jwt.sign(user, config.jwt_secret);
      res.status(200);
      res.setHeader('token', accessToken);
      res.json(user);
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

function generateQueryForLoginDetails(reqBody) {
  const query = [];
  query.push(getQuery('password', '$eq', reqBody.password));
  query.push(getQuery('email', '$eq', reqBody.email));
  return getQueryArrayForOperation('$and', query);
}

module.exports = app;
