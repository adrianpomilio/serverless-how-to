rm index.zip
cd my-first-lambda
zip -X -r ../index.zip *
cd ..
aws lambda update-function-code --function-name myFirstLambda --zip-file fileb://index.zip
