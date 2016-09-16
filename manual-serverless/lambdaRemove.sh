#!/bin/sh
aws lambda delete-function \
 --function-name myFirstLambda \
 --region us-east-1 \
--profile default
