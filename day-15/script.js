const slides = document.querySelectorAll('.slide');
let current = 0;


function show(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active', 'left', 'right');
        if (i < index) s.classList.add('left');
        if (i > index) s.classList.add('right');
    });
    slides[index].classList.add('active');
    current = index;
}

function login() {
    show(1);
}
function register() { show(2); }
function homeScr() { show(0); }
let uname = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')


let users = JSON.parse(localStorage.getItem('users')) || [];

function signupForm() {
    let user = {
        email: email.value,
        password: password.value,
    }

   if (users.push(user)){
     localStorage.setItem('users', JSON.stringify(users))
    alert("Register Successfully ✅");
     homeScr(); 
   }
   
}

let lemail = document.getElementById('loginEmail');
let lpass = document.getElementById('loginPass');

function loginForm() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
        (u) => u.email === lemail.value && u.password === lpass.value
    );

    if (validUser) {
        alert("Login Successfully ✅");
        homeScr(); // Go to home screen after login
    } else {
        alert("Invalid Email or Password ❌");
    }
}