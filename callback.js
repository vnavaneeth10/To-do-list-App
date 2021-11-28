function validate(callback){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
     if(username.value != '' && password.value != '')
     {
        if (username.value == "admin"){
            if(password.value == "12345"){
                // alert("login credentials are valid");
                return true;
                callback();
            }
            else{
                alert("Invalid Password");
                return false;
            }
        }
        else{
            alert("Invalid Username");
            return false;
        }
     }
     else{
         alert("Please enter valid Username & Password");
         return false;
    }

}

function callback() {
    
    // window.location.href = "";
    window.location.href = "./todolist.html";
   

}

 