function flipCard(card) {
    card.querySelector(".front").style.transform = "rotateY(180deg)";
    card.querySelector(".back").style.transform = "rotateY(0)";
}

function unflipCard(card) {
    card.querySelector(".front").style.transform = "rotateY(0)";
    card.querySelector(".back").style.transform = "rotateY(180deg)";
}


function addToCart(gameName) {
    alert(`${gameName} has been added to the cart!`);
    // Here, you can expand functionality to update the cart in localStorage or send data to the server.
    console.log(`${gameName} added to the cart.`);
}


document.addEventListener("DOMContentLoaded", function () {
    const footerText = document.querySelector(".footer-bottom p");
    const year = new Date().getFullYear();
    footerText.innerHTML = `© ${year} GameStore. All rights reserved.`;
});