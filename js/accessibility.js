const body = document.body;

const decreaseFont = document.getElementById("decreaseFont");
const increaseFont = document.getElementById("increaseFont");
const readAloud = document.getElementById("readAloud");
const stopReading = document.getElementById("stopReading");
const highContrast = document.getElementById("highContrast");
const resetAccessibility = document.getElementById("resetAccessibility");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


/* =================================
   FONT SIZE
================================= */

let currentFontSize = 100;


function updateFontSize() {

    body.style.fontSize = `${currentFontSize}%`;

}


increaseFont.addEventListener("click", () => {

    if (currentFontSize < 150) {

        currentFontSize += 10;

        updateFontSize();

    }

});


decreaseFont.addEventListener("click", () => {

    if (currentFontSize > 80) {

        currentFontSize -= 10;

        updateFontSize();

    }

});


/* =================================
   TEXT TO SPEECH
================================= */

readAloud.addEventListener("click", () => {

    if (!("speechSynthesis" in window)) {

        alert(
            "Sorry, your browser does not support text-to-speech."
        );

        return;

    }


    speechSynthesis.cancel();


    const text = document.body.innerText;

    const speech =
        new SpeechSynthesisUtterance(text);


    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;


    speechSynthesis.speak(speech);

});


stopReading.addEventListener("click", () => {

    speechSynthesis.cancel();

});


/* =================================
   HIGH CONTRAST
================================= */

highContrast.addEventListener("click", () => {

    body.classList.toggle("high-contrast");

});


/* =================================
   RESET
================================= */

resetAccessibility.addEventListener("click", () => {

    currentFontSize = 100;

    body.style.fontSize = "100%";

    body.classList.remove("high-contrast");

    speechSynthesis.cancel();

});


/* =================================
   MOBILE MENU
================================= */

menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("show");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});