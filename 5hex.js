//Hex color changer
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const name_color = document.querySelector('.name_color');
const btn = document.getElementById('changer');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()];
    }
    name_color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomColor() {
    return Math.floor(Math.random() * hex.length)
}