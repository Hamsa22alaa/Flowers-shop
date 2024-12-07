$('#header').load('../Header/header.html');

document.forms[0].onsubmit = function(event) {

    var form = document.forms[0]
    , password = form.password.value
    , email = form.email.value 
    , valid = true;
    
    

    if(password ==="" ||  email ===""){
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

    
	return valid;
};