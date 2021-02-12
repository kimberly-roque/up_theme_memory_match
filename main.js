$(document).ready(initializeApp)

function initializeApp() {
  var selectFirstCard = $('.face');
  selectFirstCard.click(handleCardClick);
}

function handleCardClick(event) {
  $(event.currentTarget).addClass("hidden")
  var selectFirstCard = $('.face')
  if (selectFirstCard) {
    console.log(selectFirstCard);
    var img1 = selectFirstCard.siblings().css("background-image");
    console.log('first image:', img1)
  } else {
    selectSecondCard = $(event.currentTarget);
    var img2 = secondCardClicked.siblings().css("background-image");
    console.log('second image', img2);
  }
}
