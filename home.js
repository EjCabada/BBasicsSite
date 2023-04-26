// import '@cxeweb/pattern-library/lib/components/heading';
// import '@cxeweb/pattern-library/lib/components/text-styling-examples';

let quickContent = document.querySelectorAll('.quickContent');
let expirationBox = document.querySelector('#expirationDates');
let prepBox = document.querySelector('#prep');
let barHelpBox = document.querySelector('#barHelp');
let returnButtons = document.querySelectorAll('.returnButton');

quickContent[0].addEventListener('click', function() {
    expirationBox.classList.remove('hidden');
    expirationBox.classList.add('visible');
});

quickContent[1].addEventListener('click', function() {
    prepBox.classList.remove('hidden');
    prepBox.classList.add('visible');
});

quickContent[2].addEventListener('click', function() {
    barHelpBox.classList.remove('hidden');
    barHelpBox.classList.add('visible');
});

for (let i = 0; i < returnButtons.length; i++) {
    returnButtons[i].addEventListener('click', function() {
        let visibleBox = document.querySelector('.quickLinkBackground.visible');
        visibleBox.classList.remove('visible');
        visibleBox.classList.add('hidden');
    });
}

// csPageLink.addEventListener('click' , function() {
//     window.location.href = 'CS/CS.html';
// })

