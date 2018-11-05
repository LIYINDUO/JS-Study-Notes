var strings = ["my", "forEach", "example"];

function forEach(array,callback) {
  for(var i=0; i<array.length; i++){
    callback(array[i], i, array);
  }
}

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

console.log(result);

//Another Section

var arr = [3, 4, 6, 2, 1]

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) {
      return i;
    } else {
      if (i == arr.length - 1) {
        return -1;
      }
    }
  }
}
findIndex (arr, function(num, index, array){
  return num % 2 === 0;
});

// Another Section 

var timerId = setTimeout(function() {
  console.log("This function runs in 30 seconds.");
}, 30000);

setTimeout(function() {
  clearTimeout(timerId);
  console.log("Cleared timerId");
},2000)

// setInterval Example

var num = 0; 

var intervalId = setInterval(function() {
  num++;
  console.log("num:" + num);
  if(num == 3){
    clearInterval(intervalId)
  }
}, 1000)

//another setInterval challenge 

function countDown(time) {
  var intervalId = setInterval(function () {
    time--;
    if (time > 0) {
      console.log("Timer: " + time);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000)
}
countDown(3);

// promise asynchronous function 

var p1 = new Promise(function(resolve, reject) {
  var num = Math.random();
  if (num > 0.5) {
    resolve(num);
  } else {
    reject(num)
  }
});

p1.then(function(num){
  console.log("Promise p1 resolved with data: " + num);
}).catch(function(num){
  console.log("Promise p1 rejected with data: " + num);
});

// counter promise timeout function

// var counter = 0;

// function increaseCounter(){
//   counter++;
//   console.log("Counter: " + counter);
// }

// function runLater(callback, timeInMs) {
//   var p = new Promise(function(resolve,reject){
//     setTimeout(function() {
//       var res = callback();
//       resolve(res);
//     },timeInMs);
//   });
//   return p;
// }

// runLater(increaseCounter, 1000).then(function() {
//   return runLater(increaseCounter, 2000);
// }).then(function(){
//   return runLater(increaseCounter, 3000);
// }).then(function(){
//   // final .then do nothing.
// });



// Re try last function 

var counter = 0; 

function incCounter() {
  counter++; 
  console.log("Counter: " + counter);
}

function runLater(callback,timeInMS) {
  var p = new Promise(function(resolve,reject){
    setTimeout(function(){
      callback();
      resolve();
    },timeInMS);
  });
  return p;
}


runLater(incCounter,1000).then(function(){
  runLater(incCounter,2000);
}).then(function(){
  runLater(incCounter,3000);
}).then(function(){
  // last .then do nothing;
});































