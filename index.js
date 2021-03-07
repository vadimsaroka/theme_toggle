const initTheme = localStorage.getItem("themeSwitch");

const sunMonContainer = document.querySelector(".sun-moon-container");

const rotate = () => {
    const currentRotation = parseInt(getComputedStyle(sunMonContainer).getPropertyValue("--rotation"));
    sunMonContainer.style.setProperty("--rotation", currentRotation + 180);
};

if (initTheme) {
    document.body.classList.add("dark");
    rotate();
};

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    rotate();

    if (document.body.className == "dark") {
        localStorage.setItem("themeSwitch", "dark");
    } else {
        localStorage.removeItem("themeSwitch", "dark");
    };
});