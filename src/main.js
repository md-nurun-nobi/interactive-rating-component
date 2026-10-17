import "./style.css";

const ratingButtons = document.querySelectorAll(".rating-btn");
const responsibleButton = document.querySelector (".submit-btn");
const mainRating = document.querySelector (".main-rating-part");
const thankYouRating = document.querySelector (".thankyou-rating-part");
const selectedRatingText = document.querySelector (".selected-btn");


let selectedRating = null;
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
selectedRating = button.textContent.trim();

    ratingButtons.forEach((btn) => {
      btn.classList.remove("bg-white", "text-grey-900");
      btn.classList.add("bg-white/10", "text-white/60");
    
    });

  button.classList.remove("bg-white/10", "text-white/60");
    button.classList.add("bg-white", "text-grey-900");

  
  });
});

responsibleButton.addEventListener ("click", () => {
    
if (selectedRating === null) {
  
 console.log("Please select a rating first.");
  
} else {

mainRating.classList.add("hidden");
thankYouRating.classList.remove ("hidden");
selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

};

});

