'use strict';

require('../models/blogs-v_1_0_0');

const getBlogs = async (query, projection, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('blogs');
    let response = await collection
      .find(query, projection)
      .sort({ blog_id: -1 })
      .lean();
    return response;
  } catch (error) {
    console.log(`Error in giving response: %s , %j`, error, error);
    throw error;
  }
};

const addBlog = async (reqbody, projection, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('blogs');
    let response = await collection.insertMany(reqbody, projection);
    return response;
  } catch (error) {
    console.log(`Error in giving response: %s , %j`, error, error);
    throw error;
  }
};

const updateBlog = async (query, updateJson, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('blogs');
    let response = await collection.updateMany(
      query,
      updateJson,
      getUpdatedJsonInResponse(true)
    );
    console.log('updateBlog() response : %j', response);
    return response;
  } catch (error) {
    console.log(`Error in updating details: %s , %j`, error, error);
    throw error;
  }
};

const deleteBlog = async (query, tenant) => {
  try {
    const db = await global.db.connect(tenant);
    const collection = db.model('blogs');
    let response = await collection.deleteMany(query);
    console.log('deleteBlog() response : %j', response);
    return response;
  } catch (error) {
    console.log(`Error in updating details: %s , %j`, error, error);
    throw error;
  }
};

const getUpdatedJsonInResponse = (value) => {
  let json = {};
  json['new'] = value;
  return json;
};

module.exports = {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
};
