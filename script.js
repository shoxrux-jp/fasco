const bars = document.getElementById("bars");
const menu = document.getElementById("menu")
const cancel = document.getElementById("nav__cancel");
const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minut = document.getElementById("minut");
const second = document.getElementById("second");
const discoundTime = document.querySelector(".products__discount__time");


// ======= bars ==============

bars.addEventListener('click', () => {
    menu.style.right = "0px"
});

cancel.addEventListener('click', () => {
    menu.style.right = "-250px"
});

// ========= time function ==========

function time() {
    let data = new Date();
    let dayTime = (data.getDay());
    let hoursTime = (data.getHours());
    let minutTime = (data.getMinutes());
    let secondTime = (data.getSeconds());

    day.textContent = `${dayTime}`;
    hours.textContent = `${hoursTime}`;
    minut.textContent = `${minutTime}`;
    second.textContent = `${secondTime}`;

    let localTime = new Date();
    let localDay = (localTime.getDay());
    let localHours = (localTime.getHours());
    let localMinut = (localTime.getMinutes());
    let localSekond = (localTime.getSeconds());

    discoundTime.textContent = `${localDay} : ${localHours} : ${localMinut} : ${localSekond}`
}
setInterval(time, 1000)


// ========== sign up  ================
const firstName = document.getElementById("signinNme");
const lastName = document.getElementById("signinLastName");
const email = document.getElementById("signinEmail");
const telNumber = document.getElementById("signinNumber");
const password = document.getElementById("signinPasword");
const confirPassword = document.getElementById("signinConfirPasword");
const signUpSubmit = document.getElementById("signupBtn");
const navIcons = document.getElementById("nav__icons");
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const menuSignin = document.getElementById("menuSignin");
const menuSignup = document.getElementById("menuSignup");
const menuIcons = document.getElementById("menuIcons");

signUpSubmit.addEventListener('click', () => {

    const pass = document.getElementById("signinPasword").value;
    const Confirpass = document.getElementById("signinConfirPasword").value;

    let obj = [
        {
            regFirstaName: firstName.value,
            regLastName: lastName.value,
            regEmail: email.value,
            regTel: telNumber.value,
            regPassword: password.value,
            regConfigPas: confirPassword.value
        }
    ]

    console.log(obj);



    if (
        firstName.value === "" ||
        lastName.value === "" ||
        email.value === "" ||
        telNumber.value === "" ||
        pass === "" ||
        Confirpass === ""
    ) {
        alert("Malumot kiriting !")
    } else {
        localStorage.setItem('firsName', obj[0].regFirstaName);
        localStorage.setItem('lastName', obj[0].regLastName);
        localStorage.setItem('email', obj[0].regEmail);
        localStorage.setItem('tel', obj[0].regTel);
        localStorage.setItem('password', obj[0].regPassword);
        localStorage.setItem('configPassword', obj[0].regConfigPas);
        navIcons.style.display = "flex";
        signin.style.display = "none";
        signup.style.display = "none";
        menuSignin.style.display = "none";
        menuSignup.style.display = "none";



        document.querySelectorAll(".signup__input").forEach(input => {
            input.value = " ";
        });
        alert(`Saytga hush kelibsiz ! ${lastName.value
            }  ${firstName.value}`);
    }


});


// ============ data switcher ============

window.onload = function () {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab

        tab_switcher.addEventListener('click', () => {
            const currentActive = document.querySelector(".nav__collect .nav__item.activePage");
            if (currentActive) {
                currentActive.classList.remove("activePage");
            }

            tab_switcher.classList.add("activePage");
            changePage(page_id);
        });


    }

    const tab_switcherTwos = document.querySelectorAll('[data-switcherTwo]');
    for (let i = 0; i < tab_switcherTwos.length; i++) {
        const tab_switcherTwo = tab_switcherTwos[i];
        const fashion_id = tab_switcherTwo.dataset.tab;

        tab_switcherTwo.addEventListener('click', () => {
            tab_switcherTwos.forEach(btn => btn.classList.remove("activeFashion"));

            tab_switcherTwo.classList.add("activeFashion");

            changeFashion(fashion_id);
        });
    }


    const tab_imgs = document.querySelectorAll('[data-img]');
    for (let i = 0; i < tab_imgs.length; i++){
        const tab_img = tab_imgs[i];
        const img_id = tab_img.dataset.tab;

        tab_img.addEventListener('click', () =>{
            const imgActive = document.querySelector(".products__img__collect .products__item.imgActive")
            if (imgActive) {
                imgActive.classList.remove("imgActive");
            }
            tab_img.classList.add("imgActive");
            changeImg(img_id);
        });
    }

    // ============== local stroge ================
    const savedNameF = localStorage.getItem('firsName');
    const savedNameL = localStorage.getItem('lastName');
    const savedEmail = localStorage.getItem('email');
    const savedTel = localStorage.getItem('tel');
    const savedPassword = localStorage.getItem('password');
    const savedPasswordC = localStorage.getItem('configPassword');

    if (savedNameF && savedNameL && savedEmail && savedTel && savedPassword && savedPasswordC) {
        navIcons.style.display = "flex";
        signin.style.display = "none";
        signup.style.display = "none";
        menuSignin.style.display = "none";
        menuSignup.style.display = "none";
    }

}
function changePage(page_id) {
    const current_page = document.querySelector(".pages .page.activePage");
    current_page.classList.remove("activePage");

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add("activePage")
}
function changeFashion(fashion_id) {
    const current_fashion = document.querySelector(".arrivals__collect .fashion.activeFashion");
    if (current_fashion) {
        current_fashion.classList.remove("activeFashion");
    }

    const next_fashion = document.querySelector(`.arrivals__collect .fashion[data-pageTwo="${fashion_id}"]`);
    if (next_fashion) {
        next_fashion.classList.add("activeFashion");
    }
}

function changeImg(img_id) {
    const current_img = document.querySelector(".products__img__main .imgPage.imgActive");
    current_img.classList.remove("imgActive");

    const next_img = document.querySelector(`.products__img__main .imgPage[data-filter="${img_id}"]`);
    next_img.classList.add("imgActive");
}



// =============== size ===========================
const size = document.querySelector(".products__sizing__text");
const sizeBtn = document.querySelectorAll(".products__sizing__btn");

sizeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        size.textContent = "Size :" + button.textContent;

        sizeBtn.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    })
});

// ================ color =======================
const color = document.querySelector(".products__color__text");
const colorBtn = document.querySelectorAll(".products__colors__box");

colorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const checkColor = button.getAttribute("data-color");
        color.textContent = "Color :" + checkColor;

        colorBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active")
    });
});


const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const number = document.getElementById("number");

let count = parseInt(number.textContent)
if (isNaN(count)) {
    count = 1;
    number.textContent = count;
};

plusBtn.addEventListener('click', () => {
    let count = parseInt(number.textContent);
    count++;
    number.textContent = count;

});

minusBtn.addEventListener('click', () => {
    let count = parseInt(number.textContent);
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});


const shopCardContainer = document.querySelector(".shopping__container");
const shopCardClose = document.getElementById("shopping--close");
const shopCard = document.querySelector(".shopping__card");


function timeCard() {
    shopCardContainer.style.display = "block";
}

shopCardClose.addEventListener('click', () =>{
    shopCardContainer.style.display = "none"
});
setInterval(timeCard, 990000)








const instaSlider = document.getElementById("followUS__container");

for (let i = 0; i < 3; i++) {
    instaSlider.innerHTML += instaSlider.innerHTML;
}

let scrollAmout = 0;
const sped = 1;

function autoScroll() {
    scrollAmout += sped;
    instaSlider.scrollLeft = scrollAmout;


    if (scrollAmout >= instaSlider.scrollWidth / 2) {
        scrollAmout = 0;
    }

    requestAnimationFrame(autoScroll);
}
autoScroll();




let slideIndex = 0;

function currentSlide(dir) {
    const slides = document.querySelectorAll(".customer__slide");

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex += dir;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides[slideIndex].classList.add("active");

}


