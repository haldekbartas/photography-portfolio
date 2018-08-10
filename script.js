//smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//button click
var loadMoreButton = document.getElementById("load-more");
loadMoreButton.onclick = function () {
    var fashion = document.getElementsByClassName("fashion")[0];
    var kids = document.getElementsByClassName("kids")[0];
    fashion.style.display = "inherit";
    kids.style.display = "inherit";
    loadMoreButton.style.display = "none";
}

// Slider 

var slides = document.getElementsByClassName("testimonial-content");
var dots = document.getElementsByClassName("round-button");

for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].onclick = function () {
        setSlide(i);
        slideIndex = i;
        clearInterval(myInterval);
        myInterval = setInterval(nextSlide, 2500);
    }
}

function setSlide(n) {
    slides[n].style.display = "block";
    dots[n].className += " active";
    for (let i = 0; i < slides.length; i++) {
        if (i != n) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }
}

var slideIndex = 0;
setSlide(slideIndex);

function nextSlide() {
    slideIndex++;
    if (slideIndex == slides.length) {
        slideIndex = 0;
    }
    setSlide(slideIndex);
    console.log(slideIndex);
}

var myInterval = setInterval(nextSlide, 2500);
