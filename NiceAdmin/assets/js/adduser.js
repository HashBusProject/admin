var url = "https://global-memento-407716.uc.r.appspot.com" ;

function addUser() {
    var name = document.getElementById("addName").value;
    var username = document.getElementById("addUserName").value;
    var email = document.getElementById("addEmail").value;
    var password = document.getElementById("addPassword").value;
    var selectElement = document.getElementById("inputState").selectedIndex;

    //!here
   if (!name || !username || !email || !password) {
        alert("Please fill in all required fields");
        return;
    }

    var data = {
        name: name,
        username: username,
        email: email,
        password: password,
        role: selectElement + 1
    };

    $.ajax({
        url: url + "/Admin/AddUser",
        method: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (data) {
            window.location.reload();
            alert("User Added Successfully!!");
        },
        error: function (error) {
            alert(error.responseText);
        }
    });
}


$(document).ready(function(){
    var xhr = new XMLHttpRequest() ; 
    xhr.open("Get" , url + "/Admin/GetNumberOfUser" , true) ;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) { 
            data = xhr.responseText;
            document.getElementById("numberOfUser").innerHTML = data ; 
        }
    }
    xhr.send();
});