
// AWS Account ID: 3688-1432-2799
// Canonical User ID: 5ea085319fa7717133fb1d897b08ae48fddc5ca53bf59def4c8810f665977933
require('dotenv').config();

const AWS = require('aws-sdk');
const BUCKET_NAME = 'testenv-4me-2k19';

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET
});

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: "ap-northeast-1"
  }
};

s3.createBucket(params, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(`Bucket created successfully ${data.Location}`);
});

