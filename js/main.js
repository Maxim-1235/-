let point = document.querySelectorAll(".point");
let slider = document.querySelectorAll(".slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

point[0].classList.add("activePoint");
slider[0].classList.add("activeSlide");

let counter = 0;

for (let i = 0; i < point.length; i++) {
    point[i].addEventListener("click", () => {
        for (let j = 0; j < slider.length; j++) {
            point[j].classList.remove("activePoint");
            slider[j].classList.remove("activeSlide");
        }
        counter = i;
        slider[counter].classList.add("activeSlide");
        point[counter].classList.add("activePoint");
    })
}

prev.addEventListener("click", () => {
    for (let j = 0; j < slider.length; j++) {
        point[j].classList.remove("activePoint");
        slider[j].classList.remove("activeSlide");
    }
    counter--;
    if (counter < 0) {
        counter = slider.length - 1;
    }
    slider[counter].classList.add("activeSlide");
    point[counter].classList.add("activePoint");
});
next.addEventListener("click", () => {
    for (let j = 0; j < slider.length; j++) {
        point[j].classList.remove("activePoint");
        slider[j].classList.remove("activeSlide");
    }
    counter++;
    if (counter >= slider.length) {
        counter = 0;
    }
    slider[counter].classList.add("activeSlide");
    point[counter].classList.add("activePoint");
});

function slowSlider() {
    for (let j = 0; j < slider.length; j++) {
        point[j].classList.remove("activePoint");
        slider[j].classList.remove("activeSlide");
    }
    counter++;
    if (counter >= slider.length) {
        counter = 0;
    }
    slider[counter].classList.add("activeSlide");
    point[counter].classList.add("activePoint");

}

let interval = 1000*5;
let Timer = setInterval(() => slowSlider(), interval);
let blockSlider = document.getElementById("blockSlider");
blockSlider.addEventListener("mouseover", () => {
    clearInterval(Timer);
})


blockSlider.addEventListener("mouseleave", () =>{
    Timer = setInterval(() => slowSlider(), interval);
});

down = document.querySelectorAll("#down");
opened = document.querySelectorAll(".opened");
place = document.querySelectorAll(".place");


place.forEach((el) => {
    el.addEventListener("click", () => {
        let content = el.nextElementSibling;
        console.log(content);
        if (content.style.maxHeight) {
            opened.forEach((el) => {
                el.style.maxHeight = null;
            });
        } else {
            opened.forEach((el) => {
                el.style.maxHeight = null;
                content.style.maxHeight = "800px"
            });
        }

    });

});

