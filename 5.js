const colors = ["red", "blue", "yellow", "green", "pink", "salmon", "orange", "black", "white", "grey", "brown"];
const name_color = document.querySelector('.name_color');
const btn = document.getElementById('changer');

btn.addEventListener('click', function() {
    const random = get_number();
    document.body.style.backgroundColor = colors[random];
    name_color.textContent = colors[random];
});

function get_number() {
    return Math.floor(Math.random() * colors.length);
}