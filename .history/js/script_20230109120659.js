// preloader
const preloader = document.querySelector(".preloader");
window.onload = function () {
  preloader.classList.add("hide");
};

// Menu      //////////
let menuBtn = document.getElementById("menu-btn");
let sidebarCloseBtn = document.getElementById("sidebar-close-btn");
let sideBar = document.querySelector(".sidebar");
let sidebarWrapper = document.querySelector(".sidebar-wrapper");
menuBtn.onclick = function () {
  sideBar.classList.add("show");
  sidebarWrapper.classList.add("active");
};
function hideSidebar() {
  sideBar.classList.remove("show");
  sidebarWrapper.classList.remove("active");
}
sidebarCloseBtn.onclick = function (e) {
  hideSidebar();
};
sidebarWrapper.onclick = function () {
  hideSidebar();
};
sideBar.onclick = function (e) {
  e.stopPropagation();
};

// Slider         //////////
const bannerImgs = document.querySelectorAll(".banner-img");
const bannerPrevBtn = document.getElementById("banner-prev-btn");
const bannerNextBtn = document.getElementById("banner-next-btn");
bannerImgs.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
let slideCounter = 0;
function slideNext() {
  slideCounter++;
  slideMove();
}
bannerNextBtn.onclick = function () {
  slideNext();
};
bannerPrevBtn.onclick = function () {
  slideCounter--;
  slideMove();
};
function slideMove() {
  if (slideCounter == bannerImgs.length) {
    slideCounter = 0;
  }
  if (slideCounter < 0) {
    slideCounter = bannerImgs.length - 1;
  }

  // hiding prevbtn
  if (slideCounter == 0) {
    bannerPrevBtn.style.display = "none";
  } else {
    bannerPrevBtn.style.display = "block";
  }
  //  hiding nextbtn
  if (slideCounter == bannerImgs.length - 1) {
    bannerNextBtn.style.display = "none";
  } else {
    bannerNextBtn.style.display = "block";
  }

  bannerImgs.forEach((bannerImg) => {
    bannerImg.style.transform = `translateX(-${slideCounter * 100}%)`;
  });
}
window.setInterval(slideNext, 10000);


// Validation              ///////////////
let contactForm = document.forms.contactForm;
let simpleInputs = document.querySelectorAll(
  ".contact-form-item input.simple-input"
);
let commitPassword = contactForm.commitPassword;
let password = contactForm.password;
let email = contactForm.email;
let passwordError = document.querySelector(".password-error-message");
let commitPasswordError = document.querySelector(
  ".commit-password-error-message"
);
function successFunc(element) {
  element.parentElement.classList.remove("error");
  element.parentElement.classList.add("success");
  element.style.border = "1px solid green";
}
function errorFunc(element) {
  element.parentElement.classList.remove("success");
  element.parentElement.classList.add("error");
  element.style.border = "1px solid red";
}
contactForm.onsubmit = function (e) {
  // for simple inputs :  name, surname etc
  for (let i = 0; i < simpleInputs.length; i++) {
    if (simpleInputs[i].value == "") {
      errorFunc(simpleInputs[i]);
    } else {
      successFunc(simpleInputs[i]);
    }
  }

  // checking if commit password"s value is eqaul to passoword"s value
  if (commitPassword.value !== password.value || commitPassword.value == "") {
    commitPasswordError.style.display = "block";
    errorFunc(commitPassword);
  } else {
    commitPasswordError.style.display = "none";
    successFunc(commitPassword);
  }

  // checking if password"s value contains at least 8 characters
  if (password.value.length < 8) {
    passwordError.style.display = "block";
    errorFunc(password);
  } else {
    passwordError.style.display = "none";
    successFunc(password);
  }

  // checking if the value is a valid email
  if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errorFunc(email);
  } else successFunc(email);
  e.preventDefault();
};

// Calcualtor
let calcResult = document.querySelector(".calculation-result");
let calcBtns = document.querySelectorAll(
  ".calculation-btns button:not(.operation-btn"
);
let equalBtn = document.getElementById("equal-btn");
console.log(calcBtns);
let calcDeleteAllBtn = document.getElementById("calc-delete-all-btn");
let calcDeleteBtn = document.getElementById("calc-delete-btn");
calcBtns.forEach((btn) => {
  btn.onclick = function () {
    calcResult.innerText += this.innerText;
  };
});
equalBtn.onclick = function () {
  try {
    calcResult.innerText = eval(calcResult.innerText);
  } catch {
    calcResult.innerText = "";
  }
};
calcDeleteAllBtn.onclick = function () {
  calcResult.innerText = "";
};
calcDeleteBtn.onclick = function () {
  calcResult.innerText = calcResult.innerText.slice(0, -1);
};

// Accordion
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const accordionBtn = accordion.querySelector(".accordion-btn");
  accordionBtn.onclick = function () {
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("collapsed");
      }   
    });
    accordion.classList.toggle("collapsed");
  };
});
