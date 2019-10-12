const AWS = require('aws-sdk');
require('dotenv').config();
const BUCKET_NAME = 'newnewwow2k19-test-bucket';

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET,
});

let bucketParams = {
  Bucket: BUCKET_NAME,
};

s3.deleteBucket(bucketParams, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Success ${data}`);
  }
});