'use strict';


var items = [
    { description: "This is item 1"},
    { description: "This is item 2"},
    { description: "This is item 3"}
];
// Your first function handler
module.exports.hello = (event, context, cb) => cb(null,
  { items: items, event }
);

// You can add more handlers here, and reference them in serverless.yml

module.exports.getItems = (event, context, cb) => cb(null,
  { data: items, event }
);

module.exports.getItem = (event, context, cb) => cb(null,
  { data: [items[event.path.itemId]], event }
);

module.exports.postItem = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your function executed successfully!', event }
);

module.exports.deleteItem = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your function executed successfully!', event }
);
