// //
// var distance = require('gps-distance');
//
// // Measure between two points:
// var result = distance(45.527517, -122.718766, 45.373373, -121.693604);
//
// console.log(result);
// // result is 81.78450202539503


var convert = require('xml-js');
var xml = './data.gpx';
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);
