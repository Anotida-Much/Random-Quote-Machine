const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote();
  const quoteText = quote.text;
  const quoteAuthor = quote.author;

  // Update the quote and author in the DOM using jQuery
  $("#text").text(quoteText);
  $("#author").text(`- ${quoteAuthor}`);

  // Update the Tweet link
  const tweetText = `${quoteText} - ${quoteAuthor}`;
  $("#tweet-quote").attr(
    "href",
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
  );
}

$(document).ready(function () {
  // Update the quote on page load
  updateQuote();

  // Add click event listener for the "New Quote" button
  $("#new-quote").on("click", updateQuote);
});
