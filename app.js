/*-----Welcome-----*/
var loginForm = document.getElementById("login_container");
var signupForm = document.getElementById("signup_container");

var username = document.forms['loginform']['username'];
var password = document.forms['loginform']['password'];

var userCreateIn = document.forms['signupform']['userCreate'];
var passCreateIn = document.forms['signupform']['passCreate'];
var passConfirmIn = document.forms['signupform']['passConfirm'];
var userCreate = document.getElementById("userCheck");
var passCreate = document.getElementById("passCheck");
var passConfirm = document.getElementById("passCheck2");

var userError = document.getElementById("user_error");
var passError = document.getElementById("pass_error");

username.addEventListener('input', userVerify);
password.addEventListener('input', passVerify);

userCreate.addEventListener('input', userChecker);
passCreate.addEventListener('input', passChecker);
passConfirm.addEventListener('keyup', passChecker2);

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
function validateLogin(){
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

function validateSignup(){
    if (userCreateIn.value.length < 5) {
        userCreateIn.style.border = "1px solid red";
        userCreateIn.focus();
        return false;
    }
    if (passCreateIn.value.length < 6) {
        passCreateIn.style.border = "1px solid red";
        passCreateIn.focus();
        return false;
    }
    if (passConfirmIn.value != passCreateIn.value) {
        passConfirmIn.style.border = "1px solid red";
        passConfirmIn.focus();
        return false;
    }
}

function userChecker(){
    if (userCreateIn.value.length >= 5) {
        userCreate.style.color = "green";
        return true;
    }
}

function passChecker(){
    if (passCreateIn.value.length >= 6) {
        passCreate.style.color = "green";
        return true;
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