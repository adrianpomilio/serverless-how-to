aws lambda create-function \
 --region us-east-1 \
 --function-name myFirstLambda \
 --zip-file fileb://index.zip \
 --role arn:aws:iam::990312627820:role/myFirstLambda \
 --handler myFirstLambda \
 --runtime nodejs4.3 \
 --profile default
