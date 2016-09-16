aws lambda invoke \
--invocation-type RequestResponse \
--function-name myFirstLambda \
--region us-east-1 \
--log-type Tail \
--payload '{"key3": "value3","key2": "value2","key1": "value1"}' \
--profile default \
outputfile.txt
