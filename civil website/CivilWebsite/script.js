// ============================
// DURGADEVI INFRA & INTERIORS
// PREMIUM WEBSITE SCRIPT
// ============================

// HEADER EFFECT

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(header){

if(window.scrollY > 100){

header.style.background = "rgba(0,0,0,0.95)";
header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

}else{

header.style.background = "rgba(0,0,0,0.85)";
header.style.boxShadow = "none";

}

}

});

// ============================
// COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter, 20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// ============================
// SCROLL REVEAL
// ============================

const hiddenElements =
document.querySelectorAll(
".service-card, .project-card, .counter-box"
);

if(hiddenElements.length > 0){

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{ threshold: 0.2 }

);

hiddenElements.forEach((el) => observer.observe(el));

}

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target =
document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior: 'smooth'
});

}

});

});

// ============================
// PAGE LOADER
// ============================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// ============================
// REGISTER PAGE
// ============================

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("regEmail")?.value || "";

const password =
document.getElementById("regPassword")?.value || "";

localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

alert("Registration Successful!");

window.location.href = "login.html";

});

}

// ============================
// LOGIN PAGE
// ============================

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail")?.value || "";

const password =
document.getElementById("loginPassword")?.value || "";

const savedEmail =
localStorage.getItem("userEmail");

const savedPassword =
localStorage.getItem("userPassword");

if(email === savedEmail &&
password === savedPassword){

localStorage.setItem("loggedIn", "true");

alert("Login Successful!");

window.location.href = "index.html";

}else{

alert("Invalid Email or Password");

}

});

}

// ============================
// LOGOUT
// ============================

function logoutUser(){

localStorage.removeItem("loggedIn");

alert("Logged Out Successfully");

window.location.href = "login.html";

}

// ============================
// CONSOLE MESSAGE
// ============================

console.log(
"Welcome to Durgadevi Infra & Interiors"
);