// Need to use http-server 
// sudo npm install -g http-server 

// to start server, use 
// http-server -c-1 -p 8010 
// Or use http-server and disable cache in devtools 



// Working with JSON 
// d3.json(url, callback)

// d3.json("url_goes_here", function(data){
    // data refers to JSON data
// })

// d3.json("url_goes_here", function(error, data){
    // error refers to any error
    // or null if there is no error
    // data refers to JSON data
//})

// d3.json('./countries.json', function(error, data){
//     if(error) throw error;

//     d3.select("body")
//       .selectAll("h3")
//       .data(data.geonames)
//       .enter()
//       .append("h3")
//       .text(d => d.countryName)     

// })


// Working with CSV 
// d3.csv(url, callback)

// d3.csv('simplemaps-worldcities-basic.csv', function(error, data){
//     if(error) throw error;

//     console.log("csvData",data)

// })

// d3.csv(url,formatter,callback)
// d3.csv('url', function(row, i, headers), function(error, data))
// d3.csv('url', function(row, i, headers) {
//  if(/* condition */) return;    
// }, function(error, data){
//     rows where condition was true are removed from the data array!    
// }

// d3.csv('simplemaps-worldcities-basic.csv', function(row){
//     if(+row.pop < 10000) return;
//     return {
//         cityName: row.city,
//         countryCode: row.iso2,
//         population: +row.pop
//     }
// }
// ,function(error, data){
//     if(error) throw error;

//     console.log("csvData",data)

// });

// Request Methods
// d3.text
// d3.html
// d3.tsv
// d3.xml
// d3.json
// d3.csv
// d3.request

// Queue asynchronous code together 
// Use Queues
// d3.queue()
// queue.defer(AsynchronousFunction, arguments)
// Resolving the Queue 
// queue.await() -> responses as a comma separated list of arguments 
// queue.awaitAll() -> responses as an array 

// I.E.
// d3.queue()
//   .defer(fn1)
//   .defer(fn2)
//   .await(function(error, res1, res2){
//         // res1 - response from fn1
//         // res2 - response from fn2
//   })
// d3.queue()
//   .defer(fn1)
//   .defer(fn2)
//   .awaitAll(function(error, res){
//         // res[0] - response from fn1
//         // res[1] - response from fn2
//   })



d3.queue()
  .defer(d3.json, './countries.json')
  .defer(d3.csv, 'simplemaps-worldcities-basic.csv',function(row){
    if(+row.pop < 10000) return;
    return {
        cityName: row.city,
        countryCode: row.iso2,
        population: +row.pop
    }
  })
  .awaitAll(function(error, allData){
      if (error) throw error;

      var data = allData[0].geonames.map(country => {
          country.cities = allData[1].filter(city => city.countryCode === country.countryCode);
          return country;
      });

      var countrySelection = d3.select('body')
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
     
      countrySelection
        .append('h3')
          .text(d => d.countryName);
    
      countrySelection
        .append('ul')
        .html(d => d.cities.map(city => {
            var percentage = city.population / d.population * 100;
            return `<li>${city.cityName} - ${percentage.toFixed(2)}%</li>`
        }).join(''));
  })
