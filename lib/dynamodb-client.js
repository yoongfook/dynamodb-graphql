import AWS from "aws-sdk";

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000"
};

export const dynamodb =
  process.env.IS_OFFLINE || process.env.NODE_ENV === "test"
    ? new AWS.DynamoDB.DocumentClient(options)
    : new AWS.DynamoDB.DocumentClient();
export default {
  dynamodb
};