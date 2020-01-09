## What is it?

The Resource Utilization Tracker (RUT) is a tool used to track the utilization of specific resources that can be found on Notion or elsewhere. Essentially, it allows us to determine who clicks on the various links or resources that we provide to our ventures. 

## Why do we need it?

Despite efforts by the community team to determine how often the resources we provide to the ventures our used, we are still in the dark. This is a way to quantify the following:

1. How often are certain resources used?
2. Who utilizes those resources most?
3. What resources are not valuable?
4. ...

## How to use:

{RUT-url}/{url-to-redirect-to}

[Ready Stage Resources - Test Link](https://resource-tracker-proxy.herokuapp.com/https://www.notion.so/Ready-Stage-8b87b8b8b3b541cda3d4f3cd6a45ce40)

## How It's Built:

Used React to utilize the authentication SDK provided by Auth0, used AWS Lambda, AWS DynamoDB, and AWS API Gateway to allow for application to send https requests to DynamoDB without requiring a backend (serverless app), and I hosted the application on Heroku.

**Dynamo DB Schema:**

*resourceUsage Table*

*Date: {Date in which it was accessed} (Primary Key)*

*Email: {Email of individual accessing resource}*

*Resource: {URL of resource redirected to}*

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe1705f6-731d-4a82-a7d2-bdb308ffe295/ex.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe1705f6-731d-4a82-a7d2-bdb308ffe295/ex.png)

## Privacy / Limitations:

To prevent the abuse of this resource, there are limitations to what websites we track. In the RUT repository, redirects to websites outside of the Notion domain will not be tracked and stored on Dynamo DB. This can be easily changed to allow for additional resource tracking.

## Example Video

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/912b13f7-b0eb-4559-94c3-7b38acaa1d79/ResourceUtilizationProxy.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/912b13f7-b0eb-4559-94c3-7b38acaa1d79/ResourceUtilizationProxy.mov)