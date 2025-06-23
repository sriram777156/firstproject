const username="vihaan";
const password="saami";

function login() {
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const msg=document.getElementById("message");

if(user===username&&pass===password) {
    msg.innerHTML="<p class='success'>Login successful !</P>";
    window.location.href="vvtution.html";
}
else{
    msg.innerHTML="<p class='error'>Invalid username or password</p>";
}
}
