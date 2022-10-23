call npm run build
call aws s3 sync ../build s3://my-coffee-place

echo http://my-coffee-place.s3-website-us-east-1.amazonaws.com
