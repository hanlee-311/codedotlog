import React from 'react';
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational' 
var item = Math.floor(Math.random() * 10); 
var quoteText;


function Quote() {
    console.log(quoteAPI)
    fetch(quoteAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.data[item].quoteText);
        quoteText = data.data[item].quoteText;
        console.log(quoteText);
    }).catch((err) => console.warn(err)) 

 
  return (
    <>
  <h4>{quoteText}</h4>
    </>
  );
};

export default Quote;