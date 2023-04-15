let brewCoffee = document.querySelector('#brewCoffee')
let checkLobby = document.querySelector('#checkLobby')
let cycleTasks = document.querySelector('#cycleTasks')
let csMapExplination = document.querySelector('#csMapExplination')
let csMapContent = document.querySelectorAll('.csMapContent')
let brewCoffeeInfo = document.querySelector('#brewCoffeeInfo')
let checkLobbyInfo = document.querySelector('#checkLobbyInfo')
let cycleTasksInfo = document.querySelector('#cycleTasksInfo')

brewCoffee.addEventListener('click', function () {
    removeSelectClassAndInfo()
    this.classList.add('selected');
    brewCoffeeInfo.classList.remove('hidden');
    brewCoffeeInfo.classList.add('visible');
});

checkLobby.addEventListener('click', function () {
    removeSelectClassAndInfo()
    this.classList.add('selected');
    checkLobbyInfo.classList.remove('hidden');
    checkLobbyInfo.classList.add('visible');
});

cycleTasks.addEventListener('click', function () {
    removeSelectClassAndInfo()
    this.classList.add('selected');
    cycleTasksInfo.classList.remove('hidden');
    cycleTasksInfo.classList.add('visible');
});

//functions
function removeSelectClassAndInfo() {
    csMapContent.forEach(function (content) {
        content.classList.remove('selected');
    });
    brewCoffeeInfo.classList.remove('visible');
    checkLobbyInfo.classList.remove('visible');
    cycleTasksInfo.classList.remove('visible');
    brewCoffeeInfo.classList.add('hidden');
    checkLobbyInfo.classList.add('hidden');
    cycleTasksInfo.classList.add('hidden');
}