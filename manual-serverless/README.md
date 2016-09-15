# Manual Serverless
This group of lessons will focus on leveraging a Lambda function via the API-Gateway.



>In progress TODO

## Setup requirements
You will need the following installed (as seen in [Getting Started](../getting-started/README.md)).

* AWS cli
* An AWS account

## Lesson 1
We are going to create a Lambda function.

> This can be done inside of the AWS console (which we will show)
> But the prefered method is to write your code and then deploy it.

1. cmd> mkdir first-lambda && cd first-lambda
2. Create a file named handler.js
3. Open handler.js in an editor and add the following code:

--
```javascript

'use strict';

exports.handler = (event, context, callback) => {
    callback(null, event.key1);  
};

```




## BONUS
Call the lambda function from the static site you created in the [static site module](../static-site-serverless/README.md)
