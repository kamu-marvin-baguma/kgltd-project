function validateForm(){
    let username = document.form[myform][Name]
    let email = document.form[myform][Email]
    let password = document.form[myform][Password]
    if (username.value == ""){
        username.style.border = "3px solid red";
        // alert("dont leave the username field empty");
        username.innerHTML = "please enter your name";
        username.focus();
        return false;
    }else{
        username.style.border = "3px solid green";
    }
}


 