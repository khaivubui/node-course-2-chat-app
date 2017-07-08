const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var createdAt = 9999999999;
var date = moment(createdAt);
console.log(date.format('h:mm a'))
