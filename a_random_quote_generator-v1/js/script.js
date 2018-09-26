// FSJS - Random Quote Generator

// Here is the array of quote objects.
var quotes = [
    {
        quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
        source: 'Confucius'
    },
    {
        quote: 'All our dreams can come true, if we have the courage to pursue them. ',
        source: 'Walt Disney'
    },
    {
        quote: 'It does not matter how slowly you go as long as you do not stop.',
        source: 'Confucius'
    },
    {
        quote: 'Everything you’ve ever wanted is on the other side of fear.',
        source: 'George Addair'
    },
    {
        quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        source: 'Winston Churchill'
    },
    {
        quote: 'Hardships often prepare ordinary people for an extraordinary destiny. ',
        source: 'C.S. Lewis'
    },
    {
        quote: 'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ',
        source: 'Roy T. Bennett'
    },
    {
        quote: 'There is only one thing that makes a dream impossible to achieve: the fear of failure. ',
        source: 'Paulo Coelho'
    },
    {
        quote: 'Definiteness of purpose is the starting point of all achievement. ',
        source: 'W. Clement Stone'
    },
    {
        quote: 'If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. ',
        source: 'Wayne Dyer'
    }

]


// Here you can see a getRandomQuuote function which gets a random quote.
function getRandomQuote(arrayOfQuotes) {
    var randomQuote = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];
    return randomQuote;
}

// Here is the printQuote function which prints a random quote to a screen.
function printQuote() {
    var newQuote = getRandomQuote(quotes);
    document.getElementsByClassName('quote')['0'].innerHTML = newQuote.quote;
    document.getElementsByClassName('source')['0'].innerHTML = newQuote.source;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);