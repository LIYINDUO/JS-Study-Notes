



var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.1.1.min.js";
jq.onload = function(){ 
	jQuery.noConflict();
}
document.getElementsByTagName('head')[0].appendChild(jq);
 




var data = {name: "Buy ICECREAME", mood: "happy", completed: true};

jQuery.post("https://9d66439899b14e309d2ccb9ff6818f2d.vfs.cloud9.ap-southeast-1.amazonaws.com/api/todos", data)
.done(function(data){
  console.log(data);
})
.fail(function(){
  console.log("ERROR!");
})


//

var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.1.1.min.js";
jq.onload = function(){ 
	jQuery.noConflict();
}
document.getElementsByTagName('head')[0].appendChild(jq);

var data = {name: "Buy Cheese", mood: "happy"};



var data = {name: "Buy EYE DROPS"};

jQuery.ajax({
  url: 'https://9d66439899b14e309d2ccb9ff6818f2d.vfs.cloud9.ap-southeast-1.amazonaws.com/api/todos/5bcf0d1c4bc2a01428c3e33f',
  data: data,
  type: 'PUT'
})
.done(function(result){
  console.log(result);
});



jQuery.ajax({
  url: 'https://9d66439899b14e309d2ccb9ff6818f2d.vfs.cloud9.ap-southeast-1.amazonaws.com/api/todos/5bd036c609ca931ba770b495',
  type: 'DELETE'
})
.done(function(result){
  console.log(result);
});