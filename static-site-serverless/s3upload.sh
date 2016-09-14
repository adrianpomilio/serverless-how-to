#!/bin/sh
aws s3 sync www s3://serverless-how-to --acl "public-read"
