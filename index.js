/// Element Selectors
const footer1El = document.getElementById("footer-1");
const footer2El = document.getElementById("footer-2");
const footer3El = document.getElementById("footer-3");
const footer4El = document.getElementById("footer-4");
const footer5El = document.getElementById("footer-5");

const color1 = document.getElementById("color-container-1");
const color2 = document.getElementById("color-container-2");
const color3 = document.getElementById("color-container-3");
const color4 = document.getElementById("color-container-4");
const color5 = document.getElementById("color-container-5");

const colorPickerEl = document.getElementById("color-picker");
const colorSchemeSelectorEl = document.getElementById("color-scheme-selector");
const getColorSchemeBtn = document.getElementById("color-scheme");

// "Get Color Scheme" Button Function
getColorSchemeBtn.addEventListener("click", function () {
    fetch(
        `https://www.thecolorapi.com/scheme?hex=${colorPickerEl.value.slice(1)}&format=json&mode=${colorSchemeSelectorEl.value}&count=5`,
    )
        .then((res) => res.json())
        .then((data) => {
            color1.style.backgroundColor = data.colors[0].hex.value;
            color2.style.backgroundColor = data.colors[1].hex.value;
            color3.style.backgroundColor = data.colors[2].hex.value;
            color4.style.backgroundColor = data.colors[3].hex.value;
            color5.style.backgroundColor = data.colors[4].hex.value;

            footer1El.innerHTML = data.colors[0].hex.value;
            footer2El.innerHTML = data.colors[1].hex.value;
            footer3El.innerHTML = data.colors[2].hex.value;
            footer4El.innerHTML = data.colors[3].hex.value;
            footer5El.innerHTML = data.colors[4].hex.value;

            footer1El.addEventListener("click", function () {
                navigator.clipboard.writeText(footer1El.innerText);
            });

            footer2El.addEventListener("click", function () {
                navigator.clipboard.writeText(footer2El.innerText);
            });

            footer3El.addEventListener("click", function () {
                navigator.clipboard.writeText(footer3El.innerText);
            });

            footer4El.addEventListener("click", function () {
                navigator.clipboard.writeText(footer4El.innerText);
            });

            footer5El.addEventListener("click", function () {
                navigator.clipboard.writeText(footer5El.innerText);
            });
        });
});
