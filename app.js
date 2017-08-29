var express = require('express');

var htmlapp = express();
var jquerry = express();
var angular = express();


htmlapp.use(express.static('htmlcalc'));
jquerry.use(express.static('jquerrycalc'));
angular.use(express.static('angularjscalc'));


htmlapp.listen(3000);
console.log('to open the html calculator goto: localhost:3000')
jquerry.listen(3001);
console.log('to open the jquerry calculator goto: localhost:3001')
angular.listen(3002);
console.log('to open the angularjs calculator goto: localhost:3002')