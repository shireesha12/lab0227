/*eslint-env browser*/

//var names = new Array(5);
/*var names = ["sally", "fred", "zak", "mark", "sue"];
window.document.write(names[2]);*/
/*var names = ["sally", "fred", "zak", "mark", "sue"];
names[5] = "siri";
window.document.write(names[5]);*/

/*var names = new Array(5);
names[0] = "sally";
names[1] = "fred";
names[2] = "zak";
names[3] = "mark";
names[4] = "sue";
names[5] = "siri"
window.document.write(names[5]);*/

/*var names = [];
names[0] = "sally";
names[1] = "fred";
names[2] = "zak";
names[3] = "mark";
names[4] = "sue";
names[5] = "siri"
window.document.write(names[5]);*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];
names[45] = "siri";
window.document.write(names.length);*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];
names[names.length] = "jake";
window.document.write(names[5]);*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];
delete names[0];
window.document.write(names[1]);*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];
names.length = 0;
window.document.write(names[0]);*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];
var i;
for (i = 0; i < names.length; i += 1) {
     window.document.write(names[i] + "<br>");
}*/

/*var names = ["sally", "fred", "zak", "mark", "sue"];

names.forEach(function (names) {
    "use strict";
              window.document.write(names + "<br>");
              });*/

/*var i;
var names = ["Ted Lewis", "Sue Jones", "Ray Thomas"];
for (i in names) {
    window.document.write(names[i] + "<br>");
}*/
/*Array.prototype.myname = function (){
    "use strict";
};
var names = ["Ted Lewis", "Sue Jones", "Ray Thomas"];
var i;
for (i in names) {
    window.document.write(names[i] + "<br>");
}*/

Array.prototype.myname = function (){
    "use strict";
};
var names = ["Ted Lewis", "Sue Jones", "Ray Thomas"];
var i;
for (i in names) {
    if (names.hasOwnProperty(i)){
    window.document.write(names[i] + "<br>");
}
}

