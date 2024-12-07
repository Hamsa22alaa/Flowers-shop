
document.forms[0].onsubmit = function(event) {

    var form = document.forms[0]
    , user_name = form.username.value
    , password = form.password.value
    , confirmPassword = form.confirmPassword.value
    , email = form.email.value 
    , valid = true;

    if(user_name ==="" || password ==="" || confirmPassword ==="" || email ===""){
        valid = false;
        alert("Please fill out all fields");
        event.preventDefault();
    }

    const isValidEmail = email => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }

    if(!isValidEmail(email)){
        valid = false;
        alert("Please enter a valid email");
        event.preventDefault();
    }
    
    if(password.length < 8){
        valid = false;
        alert("Password must be at least 8 characters");
        event.preventDefault();
    }


    if(password !== confirmPassword){
        valid = false;
        alert("Passwords must be match");
        event.preventDefault();
    }

    
	return valid;
};


