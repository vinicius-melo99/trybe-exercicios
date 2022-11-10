import fetch from 'node-fetch';

fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json()
        .then( ({ quote }) => console.log(quote) ));