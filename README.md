# Serverless Example

## Summary
A companion project for serverless architecture presentations by Adrian Pomilio.  These examples leverage the serverless framework with AWS.

## Prerequisites
+ Intermediate JavaScript knowledge
+ Basic to intermediate application development experience


##  Environment Setup
You will need to have the following software and elements configured prior to starting the lessons.

+ Latest version of node and npm installed
+ An AWS account, there is a free tier
+ Create an IAM user
    + Attach administrator policy to this user
    + Download the IAM account credentials
    + Add the credentials to your ~/.aws/credentials file  (you can create this directory and file if they do not already exist)
+ Install serverless  ( npm install -g serverless@beta )

## Lessons
We will be leveraging the Serverless framework for many of these lessons.  Please be sure to have your IAM and Serverless setups completed.
You will be able to create everything following the steps, or you can simply look at the code for inspiration or to help you out.

### Lesson 1
We are going to create a minimal serverless application.
1. > mkdir serverless-examples && cd serverless-examples
2. > serverless create --template aws-nodejs --path lesson-1
    * this will scaffold a service that uses AWS as a provider and nodejs as your runtime.
    * you could alternately run ( serverless create --template aws-nodejs ) and the service would scaffold in the current directory
3. > serverless deploy
    * This will deploy your service to AWS.

### Lesson 2
We are going to create a basic application and leverage the api-gateway.
1. > cd serverless-examples
2. > serverless create --template aws-nodejs --path lesson-2


### Lesson 3
We are going to create a basic application with endpoints and return static data.
1. > cd serverless-examples
2. > serverless create --template aws-nodejs --path lesson-3

### Lesson 4
We are going to create an application that stores and retrieves data from a datastore.
1. > cd serverless-examples
2. > serverless create --template aws-nodejs --path lesson-4

### Lesson 5
This is a bonus lesson - tbd
