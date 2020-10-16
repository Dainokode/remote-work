const cardsContainer = document.querySelector(".cards-container");
const cardsLength = document.querySelectorAll(".card").length;
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");

let cardIndex = 1;
let translateX = 0;

buttons.forEach(button => {
 button.addEventListener("click", (e) => {
  if(e.target.id === "prev"){
   if(cardIndex !== 1){
    cardIndex--;
    translateX += 250;
   }
  } else {
   if(cardIndex !== cardsLength){
    cardIndex++;
    translateX -= 250;
   }
  }

  cardsContainer.style.transform = `translateX(${translateX}px)`;
  cards.forEach((card, index) => {
   if(index === cardIndex -1){
    card.classList.add(".active")
   }else {
    card.classList.remove('active');
  }
  })
 })
})