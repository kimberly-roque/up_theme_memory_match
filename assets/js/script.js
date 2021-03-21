var firstCardClicked = null;
var secondCardClicked = null;
var gameCards = document.getElementById('gameCards');
var maxMatches = 10;
var matches = 0;

gameCards.addEventListener("click", handleClick);


function handleClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }

  else if (firstCardClicked && secondCardClicked === null) {
    secondCardClicked = $(event.currentTarget);
    var img2 = secondCardClicked.css("background-image");
    console.log('image 2:', img2);
  }
  if (img1 === img2) {
    console.log('cards match');
  }
}
