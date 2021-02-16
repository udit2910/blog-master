module.exports = {
  getQuery: (fieldName, operation, value) => {
    let query = {};
    query[fieldName] = {};
    query[fieldName][operation] = value;
    console.log(`Query to be executed: %j`, query);
    return query;
  },

  getQueryArrayForOperation: (operation, query) => {
    let operatedQuery = {};
    operatedQuery[operation] = query;
    console.log(`Query operation to be executed: %j`, operatedQuery);
    return operatedQuery;
  },

  getUpdateJsonFormat: (updateJson) => {
    let json = {};
    json['$set'] = updateJson;
    console.log(`updateJson: %j`, json);
    return json;
  },

  pushJson: (field, jsonToAdd) => {
    // { $push: { friends: friend } }
    let json = {};
    json['$push'] = {};
    json['$push'][field] = jsonToAdd;
    console.log(`updateJson: %j`, json);
    return json;
  },

  getCommonProjection: () => {
    const json = {};
    json['_id'] = false;
    json['__v'] = false;
    json['password'] = false;
    return json;
  },
};
