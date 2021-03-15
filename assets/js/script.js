$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches =  2;


function initializeApp() {
  var card = $('.face');
  card.click(handleCardClick);
}

function handleCardClick(event) {
  if (event.target.className.indexOf("card-back") === -1) {
    return;
  }

  $(event.currentTarget).addClass("hidden");
  if (!firstCardClicked) {
    firstCardClicked = $(event.currentTarget)
    var img1 = firstCardClicked.css("background-image");
    console.log('image 1:', img1)
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
