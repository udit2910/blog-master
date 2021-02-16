'use strict';

const express = require('express');

const app = express.Router();
const {
  getQuery,
  getQueryArrayForOperation,
  getCommonProjection,
  getUpdateJsonFormat,
  pushJson,
} = require('../repositories/db-operations');
const { authenticateJWT } = require('../middleware/authentication');
const {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} = require('../repositories/blogs-repo');

// add a blog
app.post('/add', authenticateJWT, async (req, res) => {
  try {
    const reqBody = req.body;
    const blogs = await addBlog(
      [reqBody],
      getCommonProjection(),
      'blogs_master'
    );
    console.log('added details : %j , %s', blogs, blogs);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
    console.log('error while inserting details: %j , %s', error, error);
    throw error;
  }
});

// get blogs
app.get('/', authenticateJWT, async (req, res) => {
  try {
    const query = generateQueryForGetBlogs();
    const response = await getBlogs(
      query,
      getCommonProjection(),
      'blogs_master'
    );
    console.log('fetched blogs : %j , %s', response, response);
    if (response && response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json(error);
    console.log('error while getting details : %j , %s', error, error);
    throw error;
  }
});

// delete a blog
app.delete('/remove/:user_id/:blog_id', authenticateJWT, async (req, res) => {
  try {
    const query = generateQueryForDeleteDetails(req.params);
    const response = await deleteBlog(query, 'blogs_master');
    console.log('deleted details: %j , %s', response, response);
    if (response.deletedCount > 0) {
      res.status(200).json('deleted Successfully');
    } else {
      res.status(204);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log('error while deleting details: %j , %s', error, error);
  }
});

// update a blog
app.post('/update', authenticateJWT, async (req, res) => {
  try {
    const query = generateQueryForUpdateDetails(req.body);
    const response = await updateBlog(
      query,
      generateUpdateJson(req.body),
      'blogs_master'
    );
    console.log('updated details : %j , %s', response, response);
    if (response.nModified > 0) {
      res.status(200).json('updated Successfully');
    } else {
      res.status(204);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log('error while updating details: %j , %s', error, error);
  }
});

// add comment to a blog
app.put('/comment', authenticateJWT, async (req, res) => {
  try {
    const query = generateQueryForComment(req.body);
    const jsonToPush = generatePushJson(req.body);
    const response = await updateBlog(
      query,
      pushJson('comments', jsonToPush),
      'blogs_master'
    );
    console.log('updated details : %j , %s', response, response);
    if (response.nModified > 0) {
      res.status(200).json('comment posted Successfully');
    } else {
      res.status(204);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log('error while updating details: %j , %s', error, error);
  }
});

function generateQueryForGetBlogs() {
  return getQuery('is_deleted', '$eq', false);
}

function generateQueryForUpdateDetails(reqBody) {
  const query = [];
  query.push(getQuery('blog_id', '$eq', Number(reqBody.blog_id)));
  query.push(getQuery('author_id', '$eq', Number(reqBody.author_id)));
  return getQueryArrayForOperation('$and', query);
}

function generateQueryForComment(reqBody) {
  const query = [];
  query.push(getQuery('blog_id', '$eq', Number(reqBody.blog_id)));
  return getQueryArrayForOperation('$and', query);
}

function generateQueryForDeleteDetails(reqBody) {
  const query = [];
  query.push(getQuery('blog_id', '$eq', Number(reqBody.blog_id)));
  query.push(getQuery('author_id', '$eq', Number(reqBody.user_id)));
  return getQueryArrayForOperation('$and', query);
}

function generateUpdateJson(reqBody) {
  const json = {};
  json['title'] = reqBody.title;
  json['description'] = reqBody.description;
  return getUpdateJsonFormat(json);
}

function generatePushJson(reqBody) {
  const json = {};
  json['comment_by'] = reqBody.comment_by;
  json['comment'] = reqBody.comment;
  return json;
}

module.exports = app;
