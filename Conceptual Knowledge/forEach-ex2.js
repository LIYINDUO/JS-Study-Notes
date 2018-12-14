

function forEach(array, callback) {
    for(var i=0; i<array.length; i++){
        callback(array[i], i, array);
    } 
}

var arr = [1,2];
forEach(arr,function(number,index,array) {
    console.log(number * 2);
    console.log("This is the index: "+index);
    console.log(array);
});