const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

const searchRequest = {

  location: 'morristown, nj'
};

const client = yelp.client(apiKey);

var resultsArray = [];
// var maxRequest = 10;


client.search(searchRequest).then(response => {

  for(var i=0;i<10;i++){
    var business = response.jsonBody.businesses[i];
    // var prettyJson = JSON.stringify(i, null, 4);
    resultsArray.push(business);
  }

  console.log(resultsArray);
}).catch(e => {
  console.log(e);
});


