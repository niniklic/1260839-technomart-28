let feedbackLink = document.querySelector(".contacts-button");
let feedbackPopup = document.querySelector(".modal-feedback");
let feedbackClose = feedbackPopup.querySelector(".modal-close");
let feedbackForm = feedbackPopup.querySelector(".feedback-form");
let feedbackName = feedbackPopup.querySelector(".name-input");
let feedbackEmail = feedbackPopup.querySelector(".email-input");
let feedbackMessage = feedbackPopup.querySelector(".message-input");

let isStorageSupport = true;
let storageName = "";


try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
  }

  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
  	if (isStorageSupport) {
    	localStorage.setItem("name", feedbackName.value);
    	localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});


let mapLink = document.querySelector(".contacts-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


let cartLinkList = document.querySelectorAll(".buy-button");
let cartPopup = document.querySelector(".modal-cart");
let cartClose = cartPopup.querySelector(".modal-close");

for (let cartLink of cartLinkList) {
  cartLink.addEventListener('click', (event) => {
  	event.preventDefault();
  	cartPopup.classList.add("modal-show"); 
  })  
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});