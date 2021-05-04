# Ivea SMS client

This library is created in purpose of working with Ivea SMS Webservice within the Node.js Applications.

### Installation

`npm install iveasms --save`

### Usage

```javascript
const IveaSMS = require('iveasms');
const client = new IveaSMS(username, password);
const options = {
    type: '0', // optional, for flash messaging pass '1' or 'flash',  || should be an array on multi manual method
    number: '+985000XXX', // optional for public numbers || should be an array on multi manual method
    to: '09123456789' || ['09123456789', '+989987654321', '9112223344']
}
client.getCredit().then(function(value) {
    console.log(value);
}); // get your panel credit

client.getStatus('message ID').then(function(value) {
    console.log(value);
}); // get message status by message ID

client.sendManual(options, 'this is a test from @HosseinDotLink').then(function(value) {
    console.log(value);
}); //send manual message

client.sendManualMulti(options, ['test 1', 'test 2']).then(function(value) {
    console.log(value);
}); //send manual multi message remember type, number, to and messages' length should be equals
```

### Author
[Hossein MohammadiPour](https://hossein.link)