const showQuote = () => {
    let quotes = document.getElementsByClassName('quote-wrapper');
    for (let i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none"; 
    }
    quoteId++;
    if (quoteId > quotes.length) {quoteId = 1} 
    quotes[quoteId-1].style.display = "block"; 
    setTimeout(showQuote, 5000);
}

let quoteId = 1;
showQuote(quoteId);