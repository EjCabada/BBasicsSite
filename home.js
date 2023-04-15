// import '@cxeweb/pattern-library/lib/components/heading';
// import '@cxeweb/pattern-library/lib/components/text-styling-examples';

let expirationQuickBox = document.querySelector('#expirationQuickBox');
let expirationBox = document.querySelector('#expirationDates');
let csPageLink = document.querySelector('#csPageLink')


expirationQuickBox.addEventListener('click', function() {
    expirationBox.classList.remove('hidden');
    expirationBox.classList.add('visible');
});

expirationBox.addEventListener('click', function() {
    expirationBox.classList.remove('visible');
    expirationBox.classList.add('hidden');
})

csPageLink.addEventListener('click' , function() {
    window.location.href = 'CS/CS.html';
})

