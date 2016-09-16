#!/bin/sh
aws lambda invoke \
--invocation-type RequestResponse \
--function-name myFirstLambda \
--log-type Tail \
--payload '{"key3": "value3","key2": "value2","key1": "value10"}' \
--profile default \
outputfile.txt
