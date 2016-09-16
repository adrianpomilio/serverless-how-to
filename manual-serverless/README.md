# Manual Serverless
This group of lessons will focus on leveraging a Lambda function via the API-Gateway.





## Setup requirements
You will need the following installed (as seen in [Getting Started](../getting-started/README.md)).

* AWS cli
* An AWS account
* An IAM User with Administrator rights

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

exports.handler.myFirstLambda = (event, context, callback) => {
    callback('{message:"my first lambda"}', event);  
};

```


## Lesson 2
We are going to use the AWS CLI to upload and run our Lambda

> Run this cmd> aws lambda list-functions
This will provide you with a list of your Lambda functions, you should not see your function yet.

1. cmd> cd manual-serverless   (You should be inside the manual serverless directory and be able to see the my-first-lambda directory)
2. Create a file named lambdaUpload.sh
3. Enter the following code in the lambdaUpload.sh file
--
```
rm index.zip
cd my-first-lambda
zip -X -r ../index.zip *
cd ..
aws lambda update-function-code --function-name myFirstLambda --zip-file
fileb://index.zip

```
--
4. You will need to give your shell script execute permissions.  cmd> chmod u+x lambdaUpload.sh





## BONUS
Call the lambda function from the static site you created in the [static site module](../static-site-serverless/README.md)
