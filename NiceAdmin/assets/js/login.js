function login() { 
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value ; 
    const secretKey = "secret";
    var user = {
        username : username,
        password : password 
    };
    $.ajax({
        url: "http://localhost:8080/Admin/Login",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
        success: function (data) {
            alert("Login successful");
            localStorage.setItem("session", data.session);
            window.location.href = "AddUser.html" ;
        },
        error: function (xhr) {
            alert("Login failed: " + xhr.responseText);
        },
    });
}