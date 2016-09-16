'use strict';

exports.myFirstLambda = (event, context, callback) => {
    callback(null, event.key1);
};
