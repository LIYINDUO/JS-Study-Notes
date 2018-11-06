// ES2018
// For await of loop provides an alternative method for .then((resultArray)=>{resultArray.forEach((val)=>{....code you have to write})})
async function main() {
    let syncIterable = [
        Promise.resolve('a'),
        Promise.resolve('b'),
    ];
    for await (let x of syncIterable) {
        console.log(x);
    }
}
main();