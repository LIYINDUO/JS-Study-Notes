function printRest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1,2,3,4,5,6,7)


// 1, 2, [3,4,5,6,7] c as arguments
// array-like object to array => [].slice.call(arguments);

var sumArguments = (...args) => args.reduce((acc,next) => acc + next);