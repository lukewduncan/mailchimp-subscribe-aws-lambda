# mailchimp-subscribe-aws-lambda
A simple AWS Lambda function that allows you to subscribe an email to a certain Mailchimp List

To get this function running with your credentials, first, clone the repo.

If you aren't familiar with setting environment variables for Lambda, create a `.env` file within the project. Set your API key and ListID like so (these are the only two things you need to set):

`API_KEY='XXXXXXXXXXXXXXXXXX'`

`LIST_ID=xxxxxx223`

Once you have this all setup, npm install:

`npm install`

And then:

`npm run zip`

Which will zip up all the files so you can upload this to Lambda.

If you are looking to use this in a project, I tried setting up an AWS API Gateway to be able to invoke the function through a POST request, but CORS to work is a nightmare and the API Gateway gives some strange errors. 

I found the most success by using the AWS SDK in the browser, going to Cognito in AWS and creating a pool group that doesn't require authorization. Then attaching that to my Lambda function. I'll write a post on this soon :)

 The data that you post to the function will want to be formatted like this:

`{
  "email": "luke@gmail.com"
}`
