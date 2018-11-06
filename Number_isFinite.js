// ES5 

function seeIfNumber(val){
    if(typeof val === "number" && !isNaN(val)){
        return "It is a number!";
    }
}

// ES2015
function seeIfNumber(val){
    if(Number.isFinite(val)){
        return "It is a number!"
    }
}