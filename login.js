// for styling the page 

let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// for varification and login to another page 

let username = document.getElementById("un");
let password = document.getElementById("pass");

function login() {
  username = username.value;
  password = password.value;

  let userData=JSON.parse(localStorage.getItem("userdetails"));

  if ((username === userData.un)&&(password === userData.pass)) {
    open("home.html");
  }
  else{
    alert("INVALID CREDENTIAL");
  }
}

