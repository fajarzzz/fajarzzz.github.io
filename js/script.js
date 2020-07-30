// Rotate Logo on Click Brand 
const brand = document.querySelector("#brand");
const bImg = document.querySelector("#brand img");
brand.addEventListener('click', function () {
    bImg.classList.toggle('putar');
});

// navbar shadow on scroll
const nav = document.querySelector('.nav');
if (window.scrollTop != 0) {
    window.addEventListener('scroll', function () {
        nav.classList.add('shadow');
        if (document.documentElement.scrollTop === 0) {
            nav.classList.remove('shadow');
        }
    });
}
