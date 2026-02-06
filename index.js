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

// Copy to Clipboard Function
[footer1El, footer2El, footer3El, footer4El, footer5El].forEach((footer) => {
    footer.addEventListener("click", function () {
        navigator.clipboard.writeText(footer.textContent.trim());
    });
});

// "Get Color Scheme" Button Function
getColorSchemeBtn.addEventListener("click", function () {
    const hexValue = colorPickerEl.value.slice(1);

    if (!hexValue || hexValue.length !== 6) {
        alert("Please select a valid color");
        return;
    }

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${colorSchemeSelectorEl.value}&count=5`,
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            color1.style.backgroundColor = data.colors[0].hex.value;
            color2.style.backgroundColor = data.colors[1].hex.value;
            color3.style.backgroundColor = data.colors[2].hex.value;
            color4.style.backgroundColor = data.colors[3].hex.value;
            color5.style.backgroundColor = data.colors[4].hex.value;

            footer1El.innerText = data.colors[0].hex.value;
            footer2El.innerText = data.colors[1].hex.value;
            footer3El.innerText = data.colors[2].hex.value;
            footer4El.innerText = data.colors[3].hex.value;
            footer5El.innerText = data.colors[4].hex.value;
        })
        .catch(() => alert("Error fetching color scheme"));
});
