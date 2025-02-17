// Get elements
const cardArea = document.getElementById('card-area');

// Variables
let viewingCard = false;
let zoomedCard = null;

console.log(window.innerHeight)
console.log(window.innerWidth)

function createCard(backgroundColor, top, left) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.top = top;
    card.style.left = left;
    card.style.backgroundColor = backgroundColor;
    cardArea.appendChild(card);
}

createCard("#00ffff", "90%", "45%");
createCard("#ff0000", "90%", "37%");
createCard("#00ff00", "90%", "53%");

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.width = "12%";
        card.style.height = "36%";
        card.style.zIndex = "10";
        card.style.top = (parseFloat(card.style.top) - 6) + "%";
        card.style.left = (parseFloat(card.style.left) - 1) + "%";
    });
});

cards.forEach(card => {
    card.addEventListener('mouseout', () => {
        card.style.width = "10%";
        card.style.height = "30%";
        card.style.zIndex = "0";
        card.style.top = (parseFloat(card.style.top) + 6) + "%";
        card.style.left = (parseFloat(card.style.left) + 1) + "%";
    });
});

cards.forEach(card => {
    card.addEventListener('mousedown', (event) => {
        switch (event.button) {
            case 2:
                if (!viewingCard) {
                    viewingCard = true;
                    const viewedCard = card.cloneNode(false);
                    cardArea.appendChild(viewedCard);
                    viewedCard.style.width = "20%";
                    viewedCard.style.height = "60%";
                    viewedCard.style.zIndex = "100";
                    viewedCard.style.left = (window.innerWidth / 2 - viewedCard.offsetWidth / 2) + "px";
                    viewedCard.style.top = (window.innerHeight / 2 - viewedCard.offsetHeight / 2) + "px";
                    zoomedCard = viewedCard;
                    break;
                };
        };
    });
});

document.addEventListener('mousedown', (event) => {
        switch (event.button) {
            case 0:
                if (viewingCard) {
                    zoomedCard.remove();
                    viewingCard = false;
                };
        };
});

// Prevent the default right-click menu from appearing
document.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});