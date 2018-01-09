//This file is a workspace to explore working with node

//========================================================================

// run on command line with $ node task.js


//========================================================================



// different ways of creating objects in JS:
// var task = {};
// var task = new Object();
// var task = Object.create(Object.prototype);

// task.title = 'My task';
// task.description = 'My Description';

// task.toString = function() {
//   return this.title + ' ' + this.description;
// };

// console.log(task.title);

//========================================================================

var task = {
  title: 'My Title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: true
});

// setting writeable to false prevents accidental overwriting of toString function
// setting enumerable to false prevents toString from showing up as a key
// setting configurable to false prevents future changes to the task object

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false,
  enumerable: false,
  configurable: true
});



// console.log(task.toString());   //  My Title My Description
// console.log(task);
// console.log(Object.keys(task));   //  [ 'title', 'description', 'toString' ] // setting enumberable to false will hide 'toString'
console.log(urgentTask.toString());



//========================================================================

// Object.defineProperty(obj, 'name', {
//   value: 'my name',
//   writable: true,
//   enumerable: true,
//   configurable: true
// });





