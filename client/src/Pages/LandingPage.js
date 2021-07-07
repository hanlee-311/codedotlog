import React from 'react';
import LandingSection from '../Components/LandingSection';
import AboutUsSection from '../Components/AboutUsSection';
import ContactSection from '../Components/ContactSection';
// var quoteAPI = 'https://zenquotes.io/api/quotes';


// function pageLoad (){
//     console.log(quoteAPI)
//     fetch(quoteAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         // renderNewQuote();
//         console.log(data);
//     }).catch((err) => console.warn(err)) 
// };
// pageLoad();
function LandingPage(){
    return(
        <>
        <LandingSection />
        <AboutUsSection />
        <ContactSection />
        </>
    )
};

export default LandingPage;

