'use strict';

require('../models/users-v_1_0_0');

const getUserDetails = async (query, projection, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('users');
    let response = await collection.findOne(query, projection).lean();
    console.log('response from userDetails(): %j', response);
    return response;
  } catch (error) {
    console.log(`Error in fetching user details: %s , %j`, error, error);
    throw error;
  }
};

const insertUser = async (query, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('users');
    let response = await collection.insertMany([query]);
    console.log('response from insertUser(): %j', response);
    return response;
  } catch (error) {
    console.log(`Error in fetching user details: %s , %j`, error, error);
    throw error;
  }
};

module.exports = {
  getUserDetails,
  insertUser,
};
