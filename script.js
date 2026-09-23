/* =========================
   LOADING
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

        setTimeout(function () {

            const welcome = document.getElementById("welcome");

            if (welcome) {
                welcome.classList.add("show");
            }

        }, 400);

        setTimeout(function () {

            const welcome = document.getElementById("welcome");

            if (welcome) {
                welcome.classList.remove("show");
            }

        }, 2800);

    }, 3000);

});


/* =========================
   SLIDER
========================= */

let currentSlide = 0;

const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

const totalSlides = 5;


function goToSlide(index) {

    currentSlide = index;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    if (slider) {

        slider.style.transform =
            "translateX(-" +
            (currentSlide * 100) +
            "%)";
    }


    dots.forEach(function (dot, index) {

        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });

}


/* Ҳар 2 сония мошини дигар */

setInterval(function () {

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    goToSlide(currentSlide);

}, 2000);


/* =========================
   MODAL
========================= */

function openModal(name, price, year, fuel, gear) {

    const modal = document.getElementById("carModal");

    document.getElementById("modalName").textContent = name;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalYear").textContent = year;
    document.getElementById("modalFuel").textContent = fuel;
    document.getElementById("modalGear").textContent = gear;

    modal.classList.add("show");
}


function closeModal() {

    const modal = document.getElementById("carModal");

    modal.classList.remove("show");

}


/* =========================
   BUY
========================= */

function buyCar() {

    const car =
        document.getElementById("modalName").textContent;

    alert(
        "Шумо " +
        car +
        " -ро барои харид интихоб кардед."
    );

}


/* =========================
   CLOSE OUTSIDE
========================= */

const modal =
    document.getElementById("carModal");

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });

}


/* =========================
   ESC
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});