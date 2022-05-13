/*-----Welcome-----*/
var loginForm = document.getElementById("login_container");
var signupForm = document.getElementById("signup_container");

var username = document.forms['loginform']['username'];
var password = document.forms['loginform']['password'];

var emailIn = document.forms['signupform']['enterEmail'];
var userCreateIn = document.forms['signupform']['userCreate'];
var passCreateIn = document.forms['signupform']['passCreate'];
var passConfirmIn = document.forms['signupform']['passConfirm'];
var enterEmail = document.getElementById("emailCheck");
var userCreate = document.getElementById("userCheck");
var passCreate = document.getElementById("passCheck");
var passConfirm = document.getElementById("passCheck2");

var userError = document.getElementById("user_error");
var passError = document.getElementById("pass_error");

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

passConfirmIn.addEventListener('keyup', passChecker2);

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

function passChecker2(){
    if (passConfirmIn.value == passCreateIn.value) {
        passConfirm.style.display = "none";
        return true;
    }
    else{
        passConfirm.style.display = "block";
        return false;
    }
}