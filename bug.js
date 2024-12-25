const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here
    console.error(error); // Logs the error, but doesn't handle it properly
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve('Success!');
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}