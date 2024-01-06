let username = document.getElementById("un");
let password1 = document.getElementById("pwd1");
let password2 = document.getElementById("pwd2");
let phone = document.getElementById("phone");
let email = document.getElementById("eml");

function registration() {

    let un = username.value;
    let pwd1 = password1.value;
    let pwd2 = password2.value;
    let phn = phone.value;
    let eml = email.value;



    if (pwd1 === pwd2) {
        let userData = new regData(un, pwd1, phn, eml);
        localStorage.setItem("userdetails", JSON.stringify(userData));
        alert("REGISTRATION SUCCESSFULLY");
        open("login.html");
    }
    else {
        alert("Password does not Match");

    }

}


function regData(un, pass, phn, eml) {
    this.un = un;
    this.pass = pass;
    this.phn = phn;
    this.eml = eml;
}

