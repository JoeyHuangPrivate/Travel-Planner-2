const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '7XXGfCoQI2gvtTZ8P0D1MQG71yYb0TfG9CvJCg7kjeWbxjoW10ugj_lTd9ZxdLw2zV3PeHAzKGd6tDBG6qoUW_Mjl49vw94-VcgoJmCT9FMGK5uVY0aVs6Yvqi9aYnYx';

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

  // console.log(resultsArray);
  var divRowEl = document.createElement("div");
  divRowEl.setAttribute("class", "row");
  var divColEl = document.createElement("div");
  divColEl.setAttribute("class", "col-sm-12");
  var pEx = document.createElement("p");
  pEx.setAttribute("class","text");
  pEx.innerHTML = "hello mom";
  divRowEl.appendChild(divColEl);
  divColEl.appendChild(pEx);
  

}).catch(e => {
  console.log(e);
});


