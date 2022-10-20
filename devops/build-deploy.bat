call npm run build
call aws s3 sync ../build s3://coffee-place

echo http://coffee-place.s3-website-us-east-1.amazonaws.com
