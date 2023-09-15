'use strict';
const categoryListFormEl = document.querySelector('#categoryListForm');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM IS READY');

    const chuckQuote = document.querySelector('#chuckQuote');

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    get(apiUrl).then(function (response) {
        console.log('RESPONSE:', response);
        showQuote(response.value, chuckQuote);
    });

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function (response) {
        generateCategoryList(response);
    });
});

function showQuote(quote, element) {
    element.innerText = quote;
}

function generateCategoryList(categoryArray) {
    const selectEl = document.createElement('select');
    categoryArray.map(function (category) {
        // create an option element
        const option = document.createElement('option');
        // define option attributes
        option.value = category;
        option.text = category;
        // append the option to the <select>
        selectEl.appendChild(option);
    });
    // append the <select> to the <form>
    categoryListFormEl.append(selectEl);
}

// a function called "showQuote" that creates a variable named "quote" and a variable named "element". "quote" will store a String, and element will store an Object, and these will be available to the entire function

categoryListFormEl.addEventListener('submit', {

})