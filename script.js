let button = document.querySelector(".button");
let body = document.querySelector('body');

button.addEventListener('click', () => {
    if (button.textContent === 'Włącz ciemny motyw') {
        button.textContent = 'Włącz jasny motyw';
        body.style.color = '#ddd';
        body.style.backgroundColor = 'black';
    }else {
        button.textContent = 'Włącz ciemny motyw';
        body.style.color = 'black';
        body.style.backgroundColor = '#ddd';
    }
});