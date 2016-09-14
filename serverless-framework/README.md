# Serverless Framework
This group of lessons will focus on creating a serverless application by leveraging the Serverless Framework

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

* BONUS - Enter the following command:  
    * serverless deploy --noDeploy
    * compare the json file found in the .serverlss directory to the serverless.yml file.

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
