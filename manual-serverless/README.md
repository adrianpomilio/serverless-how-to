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

* cmd> mkdir first-lambda && cd first-lambda
* Create a file named myFirstLambda.js
* Open myFirstLambda.js in an editor and add the following code
```javascript
'use strict';

exports.handler = (event, context, callback) => {
    callback(null, event.key1);
};

```
* zip the contents of the my-first-lambda directory, but not the directory itself.  

--
```
cd my-first-lambda
zip -X -r ../myFirstLambda.zip *

```
--

* Create an IAM role for you Lambda
    1. Sign into your AWS console
    2. Select the IAM (Identity Access Managment) service
    3. Select 'Roles'
    4. Select 'Create New Role'
    5. Enter a name for your Lambda: myFirstLambda  (I usually use the method name as part of it.)
    6. Select 'Next'
    7. Select 'AWS Service Roles'
    8. Select 'AWS Lambda'
    9. Attach a Policy (Administrator Access - just for these lessons)
    10. Select 'Create Role'
    11. Copy the ARN of the role. (looks similar to this: arn:aws:iam::990312627820:role/myFirstLambda )

* From the AWS CLI you will run the following command. (Be sure to substitute your ROLE ARN from step 5 for the Role name)

--
```
aws lambda create-function \
 --region us-east-1 \
 --function-name myFirstLambda \
 --zip-file fileb://myFirstLambda.zip \
 --role <your arn role goes here> \
 --handler myFirstLambda.handler \
 --runtime nodejs4.3 \
 --profile default

```
--

* Sign into the AWS console and select the 'Lambda' Service. You should now see your function.

## Lesson 2
We are going to use the AWS CLI to invoke our Lambda

* From the AWS CLI enter the following command

--
```
aws lambda invoke \
--invocation-type RequestResponse \
--function-name myFirstLambda \
--log-type Tail \
--payload '{"key3": "value3","key2": "value2","key1": "value1"}' \
--profile default \
outputfile.txt
```
--

* View the results on the cmd line
* Open the outputfile.txt, your results should be similar to
--
```
"value1"
```
--
## Lesson 3
We are going to use the AWS CLI to update our Lambda

> Run this cmd> aws lambda list-functions
This will provide you with a list of your Lambda functions, you should not see your function yet.

* cmd> cd manual-serverless   (You should be inside the manual serverless directory and be able to see the my-first-lambda directory)
* Create a file named lambdaUpdate.sh
* Enter the following code in the lambdaUpload.sh file
--
```
#!/bin/sh
rm myFirstLambda.zip
cd my-first-lambda
zip -X -r ../myFirstLambda.zip *
cd ..
aws lambda update-function-code --function-name myFirstLambda --zip-file fileb://myFirstLambda.zip


```
--
* You will need to give your shell script execute permissions.  cmd> chmod u+x lambdaUpdate.sh

* Change the value of the payload key1 in the below AWS CLI command, and run it.
--
```
aws lambda invoke \
--invocation-type RequestResponse \
--function-name myFirstLambda \
--log-type Tail \
--payload '{"key3": "value3","key2": "value2","key1": "value1"}' \
--profile default \
outputfile.txt
```
--
* View the results on the cmd line
* Open the outputfile txt and you should see the change

## Lesson 5
Remove your Lambda function with the AWS CLI

* To remove your Lambda function from AWS enter the following command on the AWS CLI

--
```
aws lambda delete-function \
 --function-name myFirstLambda \
 --region us-east-1 \
--profile default

```
--


> Side Note : Inside the source for the lessons you will find shell scripts that you can run instead of typing the commands over and over and over and over and over again.

## BONUS
Call the lambda function from the static site you created in the [static site module](../static-site-serverless/README.md)
