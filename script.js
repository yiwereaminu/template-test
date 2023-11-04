const constContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const twiterButton = document.getElementById("twitter");

let apiQuotes = [];

// new quote button
// newQuote.textContent = showQuote();
// show new quotes
function showQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is unknown, replace with 'unknown;
  if (!quote.author) {
    quote.author = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // check quote length to determine the styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get quote from api

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    showQuote();
  } catch (error) {}
}

// tweet quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?/text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//even listerners
newQuote.addEventListener("click", showQuote);
twiterButton.addEventListener("click", tweetQuote);
// on load
getQuotes();
