var feedbackFormButton = document.querySelector(".feedback-form-button");
var modalWrapper = document.querySelector(".modal-wrapper");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");

var form = document.querySelector(".feedback-form");
var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=question]");

feedbackFormButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    modalWrapper.classList.add("wrapper-show");
    
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    modalWrapper.classList.remove("wrapper-show");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value || !textarea.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            modalWrapper.classList.remove("wrapper-show");
        }
    }
});