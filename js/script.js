console.log("conected");
const signup = document.querySelector(".signup-nav");
const login = document.querySelector(".login-nav");
const loginCard = document.querySelector("#signin");
const signupCard = document.querySelector("#signup");
const homeNav = document.querySelector(".home-nav");
const main = document.querySelector(".main-card");

signup.addEventListener("click", function () {
  signupCard.style.display = "inline";
  signupCard.style.left = "40%";
  loginCard.style.display = "none";
  main.style.display = "none";
});

login.addEventListener("click", function () {
  loginCard.style.display = "inline";
  loginCard.style.left = "40%";
  signupCard.style.display = "none";
  main.style.display = "none";
});
homeNav.addEventListener("click", function () {
  loginCard.style.display = "none";
  main.style.display = "inline";
  signupCard.style.display = "none";
});
