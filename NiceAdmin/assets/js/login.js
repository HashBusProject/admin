function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
//TODO:
    // var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

    if (!usernameRegex.test(username)) {
        alert("Username must consist of alphanumeric characters and underscores, with a minimum length of 3 characters.");
        return;
    }

    // if (!passwordRegex.test(password)) {
    //     alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
    //     return;
    // }

    var user = {
        username: username,
        password: password,
    };

    $.ajax({
        url: "https://global-memento-407716.uc.r.appspot.com/Admin/Login",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
        success: function (data) {
            alert("Login successful");
            localStorage.setItem("isLoggedIn" , true);
            window.location.href = "AddUser.html" ;
        },
        error: function (xhr) {
            alert("Login failed: " + xhr.responseText);
        },
    });
}



$(document).ready(function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn") ;
    if(isLoggedIn){
        window.location.href = "adduser.html" ;

    }

});