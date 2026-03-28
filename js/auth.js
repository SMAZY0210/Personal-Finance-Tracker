// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Login functionality will be connected to backend");
        
        // Later:
        // fetch('/api/login', {...})
    });
}

// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Signup functionality will be connected to backend");

        // Later:
        // fetch('/api/signup', {...})
    });
}