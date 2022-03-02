/*-----Welcome-----*/
var loginForm = document.getElementById("login_container");
var signupForm = document.getElementById("signup_container");

var username = document.forms['loginform']['username'];
var password = document.forms['loginform']['password'];

var userError = document.getElementById("user_error");
var passError = document.getElementById("pass_error");

username.addEventListener('input', userVerify);
password.addEventListener('input', passVerify);

// Hides login and sign-up forms 
function showLogin(){
    if(loginForm.style.display === "none"){
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }
    else{
        loginForm.style.display = "none";
    }
}

function showSignup(){
    if(signupForm.style.display === "none"){
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    }
    else{
        signupForm.style.display = "none";
    }
}

// Validates inputs for the forms 
function validated(){
    if (username.value.length < 5) {
        username.style.border = "1px solid red";
        userError.style.display = "block";
        username.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        passError.style.display = "block";
        password.focus();
        return false;
    }
}

function userVerify(){
    if (username.value.length >= 5) {
        username.style.border = "1px solid silver";
        userError.style.display = "none";
        return true;
    }
}

function passVerify(){
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        passError.style.display = "none";
        return true;
    }
}