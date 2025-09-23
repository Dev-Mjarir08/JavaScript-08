let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let forms = document.getElementById("form-container");

function showLogin() {
  forms.style.transform = "translateX(0%)";
  loginBtn.className = "active";
  signupBtn.className = "";
}

function showSignup() {
  forms.style.transform = "translateX(-50%)";
  signupBtn.className = "active";
  loginBtn.className = "";
}

let users = [];

function handleRegister() {
  const email = document.querySelector('#signupForm input[placeholder="Email"]').value;
  const password = document.querySelector('#signupForm input[placeholder="Password"]').value;
  const confirm = document.querySelector('#signupForm input[placeholder="Confirm Password"]').value;

  if (!email || !password || !confirm) {
    alert(" Please fill all fields!");
    return;
  }

  if (password !== confirm) {
    alert(" Passwords do not match!");
    return;
  }


  const exists = users.some(user => user.email === email);
  if (exists) {
    alert(" This email is already registered!");
    return;
  }
  users.push({ email: email, password: password });

  alert(" Registered Successfully! Please login.");

  clearInputs("signupForm"); 
  showLogin(); 
}

function handleLogin() {
  const email = document.querySelector('#loginForm input[placeholder="Email"]').value;
  const password = document.querySelector('#loginForm input[placeholder="Password"]').value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
  
    alert(" Login Successful! Welcome " + user.email);
    clearInputs("loginForm"); 
  } else {
    alert(" Invalid email or password!");
  }
}

function clearInputs(loginForm , signupForm) {
  document.querySelectorAll(`#${loginForm} input`).forEach(input => {
    input.value = "";
  });
   document.querySelectorAll(`#${signupForm} input`).forEach(input => {
    input.value = "";
  });
  
}
