var modal = document.querySelector(".contactInfoModal");
var trigger = document.querySelector(".contactButton");
var closeButton = document.querySelector(".closeContactInfoModal");

function toggleModal() {
    modal.classList.toggle("contactInfoModalShow");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);