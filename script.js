


document.addEventListener('DOMContentLoaded', function () {

let click = document.createElement('div'); 
document.body.appendChild(click);

function updateClick(e) {
    let clickY = e.clientY;
    let clickX = e.clientX;

    let Time = new Date().toLocaleTimeString();


    
    click.innerHTML =`Time: ${Time}<br>Y :${clickY}<br> X : ${clickX}` 

}

document.body.addEventListener(updateClick);
});

