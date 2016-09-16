#!/bin/sh
rm myFirstLambda.zip
cd my-first-lambda
zip -X -r ../myFirstLambda.zip *
cd ..
aws lambda update-function-code --function-name myFirstLambda --zip-file fileb://myFirstLambda.zip
