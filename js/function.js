var message = '';
var getQuote;
var copyOfQuotes = [];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomQuote () {
ranNum = Math.floor(Math.random() * quotes.length);
console.log(quotes.splice(ranNum, 1));
console.log(quotes.splice(ranNum, 1)[0]);
return quotes.splice(ranNum, 1);
}

function printQuote () {
var getQuote = getRandomQuote();
// getQuote += <p class="quote">quotes[i].quote</p>
// <p class="source">quotes[i].source
//   <span class="citation">quotes[i].citation</span>
//   <span class="year">quotes[i].year</span>
//   </p>
}
