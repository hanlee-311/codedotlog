import React, { useState } from 'react';
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational' 
var item = Math.floor(Math.random() * 10); 


function Quote() {
  const [quoteText, quoteTextUpdater] = useState("");
    console.log(quoteAPI)
    fetch(quoteAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        quoteTextUpdater(data.data[item].quoteText);
        console.log(quoteText);
    }).catch((err) => console.warn(err)) 

 
  return (
    <>
  <h4>{quoteText}</h4>
    </>
  );
};

export default Quote;