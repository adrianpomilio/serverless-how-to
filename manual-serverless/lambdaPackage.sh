#!/bin/sh
rm myFirstLambda.zip
cd my-first-lambda
zip -X -r ../myFirstLambda.zip *
cd ..
