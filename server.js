// importing express
var express = require('express');

// starting 3 seperate servers 
var html = express();
var jquerry = express();
var angularjs = express();

// serving folders using express
html.use(express.static('htmlcalc'));
jquerry.use(express.static('jquerrycalc'));
angularjs.use(express.static('angularjscalc'));

// telling the servers what port to use
html.listen(3000);
jquerry.listen(3001);
angularjs.listen(3002);

console.log('the calculators can be found at:')
console.log('html: localhost:3000')
console.log('jquerry: localhost:3001')
console.log('angularjs: localhost:3002')