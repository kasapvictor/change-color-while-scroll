let fixed = document.querySelector(".fixed");


window.addEventListener('scroll', () => {
    if (
        changeTextColor(section2) ||
        changeTextColor(section4)
    ) {
        fixed.classList.add("color-dark");
    } else {
        fixed.classList.remove("color-dark");
    }
});

function changeTextColor(el) {
    return (
        pageYOffset >= el.offsetTop && pageYOffset < (el.offsetHeight + el.offsetTop)
    );
}

