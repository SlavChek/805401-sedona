// Открытие закрытие popup

var popup = document.querySelector('.main-nav__list');
var openPopupButton = document.querySelector('.main-nav__open');
var closePopupButton = document.querySelector('.main-nav__close');

openPopupButton.addEventListener('click', function () {
  popup.classList.remove('elenent-non');
  closePopupButton.classList.remove('elenent-non');
  openPopupButton.classList.add('elenent-non');

});

closePopupButton.addEventListener('click', function () {
  popup.classList.add('elenent-non');
  closePopupButton.classList.add('elenent-non');
  openPopupButton.classList.remove('elenent-non');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.add('elenent-non');
    closePopupButton.classList.add('elenent-non');
    openPopupButton.classList.remove('elenent-non');
  }
});

// Открытие закрытие popup ^

//счетчик лайков в галерее

var likesBox = document.querySelectorAll('.gellary-photo__like-box');
var likes = document.querySelectorAll('.gallery-photo__like');
var likesNumber = document.querySelectorAll('.gallery-photo__stat');

var likesCounter = function (like, counter) {
  like.addEventListener('click', function () {

    if (like.classList.contains('added')) {
      counter.textContent--;
    } else {
      counter.textContent++;
    }
    like.classList.toggle('added');
    counter.classList.toggle('added-color');
  });
}

for (var i = 0; i < likes.length; i++) {
  likesCounter(likes[i], likesNumber[i])
}

//счетчик лайков в галерее ^

