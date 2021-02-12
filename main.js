$(document).ready(initializeApp)

function initializeApp() {
  var selectFirstCard = $('.face');
  selectFirstCard.click(handleCardClick);
}
