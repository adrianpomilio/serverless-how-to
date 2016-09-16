#!/bin/sh
aws lambda create-function \
 --region us-east-1 \
 --function-name myFirstLambda \
 --zip-file fileb://myFirstLambda.zip \
 --role arn:aws:iam::990312627820:role/myFirstLambda \
 --handler myFirstLambda.handler \
 --runtime nodejs4.3 \
 --profile default
