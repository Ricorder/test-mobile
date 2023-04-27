"use strict";

var a = {
  m: 1
};
var b = {
  n: 1
};
var set = new WeakSet([a, b]);
a = null;
setTimeout(function () {
  console.log(set);
}, 1000);