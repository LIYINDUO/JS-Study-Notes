// - A one time guaranteed return of some future value 
// - When that value is figured out - the promise is resolved/funfilled or rejected 
// - Friendly way to refactor callback code
// - Libraries have implemented Promises for a while, ES2015 is a little late to the game

// - Story time 
// - you're hungry - so you go to Mcdonalds
// - you place your order and get a ticket (a promise)
// - After some time, you either get your food and the promise is resolved or you do not get your food
//   and the promise is rejected.
// - If you want another order - you need a new Promise!


function displayAtRandomTime() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Math.random() > .5){
                resolve('resolved')
            } else reject('rejected')
        },1000);
    });
}

displayAtRandomTime()
.then(function(val){
    console.log(val);
})
.catch(function(err){
    console.log(err);
});

// Since a promise always returns somthing that has a .then(thenable) - we can chain promises together and return
// values from one promise to another

// **************************** 
// Promise.all keyword 
// - Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been
// first rejected (fail fast behavior)
// - If all of the passed-in promises are resolved, Promise.all is resolved with an array of resolved values from the 
//   passed-in promises, the same order in which they were passed-in.
// - Does not guarantee that the promises will resolve sequentially, but Promise.all waits for them. 
function getMovie(title){
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise,shrekPromise,braveheartPromise])
.then(function(movies){
    return movies.forEach(function(value){
        console.log(value.Year);
    });
});

// ES2015 Promises Assignment
// Section 17, Lecture 207
// ES2015 Promises Assignment
// 1. Write a function called getMostFollowers, 
// which accepts a variable number of arguments. 
// You should then make an AJAX call to 
// the Github User API (https://developer.github.com/v3/users/#get-a-single-user) 
// to get the name and number of followers of each argument. 
// The function should return a promise, which when resolved, returns a string which displays the username who has the most followers. 

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
function getMostFollowers(...args){
    return new Promise (function(resolve,reject){
        var promiseArr = args.map(function(val){
            return $.getJSON(`https://api.github.com/users/${val}`);
        });
        Promise.all(promiseArr)
        .then(function(res){
                var person = res.reduce(function(acc,next){
                   if(next['followers']>acc['followers']){
                       return next;
                   } else {
                       return acc;
                   }
               });
               let message = `${person['login']} has the most followers with ${person['followers']}`;
               resolve(message);
        });
    })
}
getMostFollowers('elie','tigarcia','colt').then(function(data){ https://developer.github.com/v3/users/#elie
    console.log(data)
});
 
// "Colt has the most followers with 424" 
// 2. Write a function called starWarsString, which accepts a number. 
// You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) 
// to search for a specific character by the number passed to the function. 
// Your function should return a promise that when resolved will console.log the name of the character.
function starWarsString(num){
    return new Promise(function(resolve,reject){
        $.getJSON(`https://swapi.co/api/people/${num}`)
        .then(function(val){
            let message = val['name'];
            $.getJSON(val['films'][0])
            .then(val => resolve(message += ` is featured in ${val['title']}, directed by ${val['director']}`));
        })
    })
}
// starWarsString(1).then(function(data){
//     console.log(data)
// });
 
// "Luke Skywalker"
// Bonus 1 -  Using the data from the previous AJAX call above, 
// make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in 

// starWarsString(1).then(function(data){
//     console.log(data)
// })
 
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"

// Bonus 2 -  Using the data from Bonus 1 - 
// make another AJAX call to get the information about the first planet that the film contains. 
// Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet. 

// starWarsString(1).then(function(data){
//     console.log(data)
// })
 
 
//"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth

function starWarsString(num) {
    return new Promise(function (resolve, reject) {
        $.getJSON(`https://swapi.co/api/people/${num}`)
            .then(function (val) {
                let message = val['name'];
                $.getJSON(val['films'][0])
                    .then(val => {
                        message += ` is featured in ${val['title']}, directed by ${val['director']}`;
                        $.getJSON(val['planets'][0])
                            .then(val => resolve(message += ` and it takes place on ${val['name']}`));
                    });
            })
    })
} 

starWarsString(1).then(function(data){
    console.log(data)
})

// preferred answer: 
function getMostFollowers(...usernames) {
    let baseUrl = "https://api.github.com/users/"
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function (data) {
        let max = data.sort((a, b) => a.followers > b.followers ? -1 : 1)[0];
        return `${max.name} has the most followers with ${max.followers}`
    })
}
function starWarsString(id) {
    var str = '';
    return $.getJSON(`https://swapi.co/api/people/${id}/`).then(function (data) {
        str += `${data.name} is featured in `;
        var filmData = data.films[0]
        return $.getJSON(filmData);
    }).then(function (res) {
        str += `${res.title}, directed by ${res.director} `
        var planetData = res.planets[0]
        return $.getJSON(planetData)
    }).then(function (res) {
        str += `and it takes place on ${res.name}`;
        return str;
    }).then(function (finalString) {
        return finalString
    })
}