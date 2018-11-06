// ES2017 String methods 

// padStart 

// - The first parameter is the total length of the new string 
// - The second parameter is what to pad with from the start. The default is an empty space 

"awesome".padStart(10); // "   awesome"
"awesome".padStart(10, '!') // "!!!awesome"

//padEnd 
// - The first parameter is the total length of the new string 
// - The second parameter is what tto pad with from the end of the original string. The default is an empty space

"awesome".padEnd(10);
"awesome".padEnd(10, '!');