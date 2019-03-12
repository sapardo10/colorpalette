
const resemble = require('resemblejs');
var diff = resemble('./Los estudiantes creacion de cuenta -- Creates a new account and succeds at login (1).png')
    .compareTo('./Los estudiantes login -- Visits los estudiantes and fails at login (1).png')
    .ignoreColors()
    .onComplete(function(data) {
        console.log(data);
    });