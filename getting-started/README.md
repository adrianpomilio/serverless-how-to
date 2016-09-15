# Getting Started
There are a few things that you will need to do in advance of working through the lessons and code examples.  Please makes sure to follow these steps to get started.

You may skip any of the steps below if you already have satisfied the requirements for the step.

* [AWS requirements]
* [Additional software requirements]
* [Git the codez and get it running]

## AWS requirements
Because we are working with AWS you will need to take these AWS specific steps.


### AWS Account
Create an AWS account, they have a free tier but will require you to enter a credit card.  

1. Visit [AWS Free Account ] : https://aws.amazon.com/free/
2. Follow the account setup process from their site

### Create an IAM user

1. Visit [AWS Creating an IAM user]:http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html
2. Follow the official documentation steps for creating the user
3. Attach an Administrator policy to the IAM user
4. Download the IAM account credentials and keep them in a safe place, do not deploy these or put in version control (for now).
5. Add the credentials to your ~/.aws/credentials file  (you can create this directory and file if they do not already exist)

>For these examples all you will need is a IAM user account that you attach and Administrator policy to.  In production environments you will want a more elaborate setup.

### Install the AWS CLI
You will need this tool to be able to interact with AWS via the command line, or to run scripts to automate your processes.

1. Visit [AWS CLI]:http://docs.aws.amazon.com/cli/latest/userguide/installing.html
2. Follow the official documentaton steps for your specific system

>Please test the install out to make sure it works.

## Additional software requirements

### node
1. Visit [nodejs.org]:https://nodejs.org/en/
2. Follow the download and install instructions for your operating system
3. Test your install

### npm

1. Visit [npm]:http://blog.npmjs.org/post/85484771375/how-to-install-npm
2. Test your install

### Serverless framework

1. Visit [Serverless Framework]:https://serverless.com/
2. Install serverless:  cmd> npm install -g serverless@beta
3. Test the install: cmd> serverless --version
    * If properly installed the version will be 1.0.0-rc.1 at the time of this writing, it should never be a prior version.

### git

1. Visit [git]:https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
2. Follow the download and install instructions for your operating system
3. Test your install

## Git the codez and get it running

1. cmd> git clone https://github.com/adrianpomilio/serverless-how-to.git
2. cmd> cd serverless-how-to
3. cmd> npm install
