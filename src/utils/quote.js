var pageNum = Math.floor(Math.random() * 10); 
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=goals&page=' + pageNum


function pageLoad (){
    fetch(quoteAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        quoteData = data;
        // renderNewQuote();
        console.log(data);
    });
};

// function renderNewQuote() {
//     var item = Math.floor(Math.random() * 10); 
//     displayQuote(quoteData.data[item].quoteText, quoteData.data[item].quoteAuthor)
// };

// function displayQuote(quoteText, quoteAuthor) {
//     quoteDisplayEl.textContent = '"' + quoteText + '"' + " -" + quoteAuthor;
// }

pageLoad ();