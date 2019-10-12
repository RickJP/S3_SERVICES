const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config();
const BUCKET_NAME = 'firefly-test-bucket';

const IMAGE_FOLDER = path.join(__dirname + '/../images/');
const fileName = process.argv.slice(2).toString();
const imagePath = IMAGE_FOLDER + fileName;

console.log(fileName);

  fs.access(imagePath, fs.F_OK, (err) => {
    if (err) {
      console.log('File does not exist');
      return;
    }
    tryUpload();
  });

function tryUpload () {
  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });
  
  const uploadFile = (imagePath) => {
    const fileContent = fs.readFileSync(imagePath);
    
    const params = {
      Bucket: BUCKET_NAME,
      Key: imagePath,
      Body: fileContent,
    };
  
    s3.upload(params, (err, data) => {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully ${data.Location}`);
    });
  };
  
  uploadFile(imagePath);
}

