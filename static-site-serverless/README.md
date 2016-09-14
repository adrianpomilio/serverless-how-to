# Static Site Serverless
This group of lessons will focus on creating a static website that can communicate with a lambda function.

### Lesson 1
We are going to create an S3 bucket via the AWS console.

1. Log into your AWS console
2. Select S3 from the options
3. Select 'Create Bucket' from the S3 dashboard
4. Enter a name for your bucket (this must be a unique name).
5. Choose a region for your bucket
6. Select 'Create' (your bucket is now created)
7. Select the magnifying glass to show your buckets properties
8. Select 'Static Website Hosting'
9. Copy or note the 'Endpoint' as this will be the url for your site
10. Select 'Enable website hosting'
11. Enter the name of the file that will be your starting page (e.g. index.html)
12. OPTIONAL - Enter the name of the file that will be your error page (e.g. error.html)
13. Select 'Save' - you are now done.


### Lesson 2
Creating your site

### Lesson 3
Moving your code to the S3 bucket

* Option 1 - you can use the S3 bucket upload button
* Option 2 - you can use the AWS CLI to upload your content
    * > aws s3 sync [path to folder] s3://[your bucket name] --acl "public-read"

Try both options.

### Lesson 4
We are going to tie our static page to the lambda function.
