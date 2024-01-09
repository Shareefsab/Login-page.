function hello(){
    let a = document.getElementById('PasswordG').value;
    let b = document.getElementById('PasswordGG').value;
    if (a == "") {
        document.getElementById("massages").innerHTML="Please Enter Password.(........)";
        return false;
    }
    if (a != b) {
        document.getElementById("massages").innerHTML="Password is not Correct.";
        return false;
    }
    if (a.length < 5) {
        document.getElementById("massages").innerHTML="password length must be greter than 4 Characters.";
        return false
    }
    if (a.length > 8) {
        document.getElementById("massages").innerHTML="password length must be smaller than 8 Characters.";
        return false
    }
}