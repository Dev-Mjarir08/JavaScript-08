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