const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B", "C", "D", "E", "F"];

// SELECTOR 
const btn = document.querySelector(".btn");
const colour = document.querySelector(".colour");
// EVENT LISTENER
btn.addEventListener("click" , function() {
    let hexColour = "#";
    for(let i = 0; i < 6; i++) {
hexColour += hex[getRandomNumber()];
    };
colour.textContent = hexColour; /*does not work*/
document.body.style.backgroundColor = hexColour;
});

// FUNCTION 
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};
