var modal = document.querySelector('.modal')
var callbackBtn = document.querySelector('.map__callback-button');
var callbackPopup = modal.querySelector('.callback-popup');
var callbackPopupFrom = callbackPopup.querySelector('.callback-popup__form');
var callbackPopupClose = callbackPopup.querySelector('.callback-popup__close-button');
var formName = callbackPopupFrom.querySelector('input[name="feedback-name"]');
var formEmail = callbackPopupFrom.querySelector('input[name="feedback-email"]'); 
var formText = callbackPopupFrom.querySelector('textarea[name="feedback-text"]'); 

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
} 

callbackBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  modal.hidden = false;

  callbackPopup.classList.add('callback-popup--show');

  if (storageName && storageEmail) {
    formName.value = storageName;
    formEmail.value = storageEmail;

    formText.focus();
  } else {
    formName.focus();
  }
});

modal.addEventListener('click', function(evt) {
  if (evt.target === modal) {
    modal.hidden = true;

    callbackPopup.classList.remove('callback-popup--show');

    callbackPopup.classList.remove('callback-popup--error'); 
  }
});

callbackPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();

  modal.hidden = true;

  callbackPopup.classList.remove('callback-popup--show');

  callbackPopup.classList.remove('callback-popup--error'); 
});

callbackPopupFrom.addEventListener('submit', function (evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault();

    callbackPopup.classList.remove('callback-popup--error');

    callbackPopup.offsetWidth = callbackPopup.offsetWidth;

    callbackPopup.classList.add('callback-popup--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', formName.value);
      localStorage.setItem('email', formEmail.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (callbackPopup.classList.contains('callback-popup--show')) {
      evt.preventDefault();

      modal.hidden = true;

      callbackPopup.classList.remove('callback-popup--show');
    
      callbackPopup.classList.remove('callback-popup--error'); 
    }
  }
});
