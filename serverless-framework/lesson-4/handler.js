'use strict';
// Require the AWS SDK and get the instance of our DynamoDB
var aws = require('aws-sdk');
var db = new aws.DynamoDB();

function cbw(cb) {
  return function(err, res) {
    if (err) {
      cb(err);
    } else {
      if (typeof res === 'object' && res.hasOwnProperty('body')) {
        cb(null, res.body);
      } else {
        cb(null, {});
      }
    }
  };
}

module.exports.getItems = (event, context, cb) => {
  // parameters: {
  //   itemId: event.path.itemId,
  //   limit: event.query.limit,
  //   next: event.query.next
  //   };
    const RESPONSE = {
    OK : {
      statusCode : 200,
      message: [],
    },
    ERROR : {
      status : 400,
      message: "Something went wrong. Please try again.",
      error: []
    }
  };

    db.scan({
        TableName: "items"
        }, function(err, data) {
          if (err) {
            RESPONSE.ERROR.error.push(err);
            cb(null, RESPONSE.ERROR);
          }
          else {
             // If we get data back, we'll do some modifications to make it easier to read
             for(var i = 0; i < data.Items.length; i++){
               RESPONSE.OK.message.push({'items': data});
             }
               cb(null, RESPONSE.OK);
          }
      });
};

module.exports.postItem = (event, context, cb) => items.postItem({
  body: event.body
}, cbw(cb));

module.exports.putItem = (event, context, cb) => items.putItem({
  parameters: {
    itemId: event.path.itemId
  }
}, cbw(cb));

module.exports.deleteItem = (event, context, cb) => items.deleteItem({
  parameters: {
    itemId: event.path.itemId
  }
}, cbw(cb));
