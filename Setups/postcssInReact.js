// npm install --save-dev autoprefixer postcss-nested postcss-cli


// add file postcss.config.js in the same folder as the package.json (usually)

// Input these code 

// module.exports = {
//     plugins: [
//         require('postcss-nested'),
//         require('autoprefixer'),
//     ],
// };


// go to package.json 
// update the content accordingly 
// "scripts": {
//     "build:css": "postcss src/styles/main.css -o src/index.css",
//     "watch:css": "postcss src/styles/main.css -o src/index.css -w",
//     "start": "npm-run-all -p watch:css start-js",
//     "start-js": "react-scripts start",
//     "build-js": "react-scripts build",
//     "build": "npm-run-all build:css build-js",
//     "test": "react-scripts test --env=jsdom",
//     "eject": "react-scripts eject"
//     },