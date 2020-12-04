var user = document.getElementById("user");
var pwd = document.getElementById("pwd");
function validate(){
    if(user.value == "admin" && pwd.value == "12345")
    {
        return true;
    }
    else{
        alert("invalid credentials!!");
        return false;
    }
}
function home(){
    var a =document.getElementById("loginform");
    a.onsubmit("index.html")
}