'use strict';

const items = require('./items.js');

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

module.exports.getItems = (event, context, cb) => items.getItems({
  parameters: {
    itemId: event.path.itemId,
    limit: event.query.limit,
    next: event.query.next
  }
}, cbw(cb));

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
