console.log("hello world");

reviewStarOneEl = document.getElementById("star-one");
console.log(reviewStarOneEl);

reviewStarOneEl.addEventListener("click", handleStar);

function handleStar(evt) {
  console.log(evt, evt.target);
  evt.target.classList.remove("five-pointed-star");
  evt.target.classList.add("star-select");
}
