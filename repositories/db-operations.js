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
};
