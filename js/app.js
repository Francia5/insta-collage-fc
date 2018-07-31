var container;
var secondContainer;
var thirdContainer;
var elementoArrastrandose;
window.addEventListener('load', init);

function init() {
    container = document.querySelector('.containt');
    container.addEventListener('dragover', dragSobreContainer, false);
    container.addEventListener('dragleave', dragSalioContainer, false);
    container.addEventListener('drop', manejarDrop, false);
    secondContainer = document.querySelector('.secondContainer');
    secondContainer.addEventListener('dragover', dragSobreContainer, false);
    secondContainer.addEventListener('dragleave', dragSalioContainer, false);
    secondContainer.addEventListener('drop', manejarDrop, false);
    thirdContainer = document.querySelector('.thirdContainer');
    thirdContainer.addEventListener('dragover', dragSobreContainer, false);
    thirdContainer.addEventListener('dragleave', dragSalioContainer, false);
    thirdContainer.addEventListener('drop', manejarDrop, false);

    var images = document.getElementsByClassName('travel');
    for(i in images){
        var image = images[i];
        var x = random(0,90);
        var y = random(0,90);
        if(typeof image.style !== "undefined"){
            image.style.top = y+'%';
            image.style.left = x+'%';
            image.addEventListener('dragstart', dragIniciado, false);
            image.addEventListener('dragend', dragFinalizado, false);
        }
    }
};

function dragIniciado(e) {
    this.style.backgroundColor = 'blue';
    elementoArrastrandose = this;
    var padre = document.createElement('p');
    var clon = this.cloneNode(true);
    padre.appendChild(clon);
    e.dataTransfer.setData('text', padre.innerHTML);
}

function manejarDrop(e){
    e.preventDefault();
    var datos = e.dataTransfer.getData('text');
    if (this.innerHTML.trim() === '') {
        this.innerHTML += datos;
        elementoArrastrandose.parentNode.removeChild(elementoArrastrandose);
        this.classList.remove('over');  
    }

}

function dragSobreContainer(e) {
    e.preventDefault();
    this.classList.add('over');
    return false;
}

function dragSalioContainer(e) {
    this.classList.remove('over');
}


function dragFinalizado(e) {
    this.style.backgroundColor = 'red';
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}