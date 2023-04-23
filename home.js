// import '@cxeweb/pattern-library/lib/components/heading';
// import '@cxeweb/pattern-library/lib/components/text-styling-examples';

let expirationQuickBox = document.querySelector('#expirationQuickBox');
let expirationBox = document.querySelector('#expirationDates');
let csPageLink = document.querySelector('#csPageLink');
let returnButton = document.querySelector('.returnButton');


expirationQuickBox.addEventListener('click', function() {
    expirationBox.classList.remove('hidden');
    expirationBox.classList.add('visible');
});

returnButton.addEventListener('click', function() {
    expirationBox.classList.remove('visible');
    expirationBox.classList.add('hidden');
})

// csPageLink.addEventListener('click' , function() {
//     window.location.href = 'CS/CS.html';
// })

