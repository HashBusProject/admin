var url = "https://global-memento-407716.uc.r.appspot.com" ;
$(document).ready(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/Admin/GetUser?role=4" , true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var persons = JSON.parse(xhr.responseText);
            document.getElementById("numberOfUser").innerHTML = persons.length ; 
            $("#example").DataTable({
                data: persons,
                columns: [
                    { data: "userID" },
                    { data: "name" },
                    { data: "username" },
                    { data: "email" },
                    {
                        data: null,
                        defaultContent: "<button class='edit-button'>Edit</button>"
                    },
                    {
                        data: null,
                        defaultContent: "<button class='delete-button'>Delete</button>"
                    }
                ],
                columnDefs: [
                    { targets: [4, 5], searchable: false, orderable: false } 
                ]
            });
        }
    };
    xhr.send();
    $('#example').on('click', '.edit-button', function () {
        var data = $("#example").DataTable().row($(this).parents('tr')).data();
        const editUserName = document.getElementById('editUserName');
        const editEmail = document.getElementById('editEmail');
        const editId = document.getElementById("id");
        const editName = document.getElementById("editName");
    
        var isConfirmed = confirm("Are you sure you want to edit this user?");
    
        if (!isConfirmed) {
            return;
        }
    
        editId.value = data.userID;
        editUserName.value = data.username;
        editEmail.value = data.email;
        editName.value = data.name;
        $('#editUserModal').modal('show');
    });
    
$('#example').on('click', '.delete-button', function() {
    var data = $("#example").DataTable().row($(this).parents('tr')).data();

    var isConfirmed = confirm("Are you sure you want to delete this user?");

    if (!isConfirmed) {
        return;
    }

    var id = {
        userID: data.userID
    };

    $.ajax({
        url: url + "/Admin/DeleteUser",
        method: "POST",
        data: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (data) {
            console.log(data);
            window.location.reload();
        },
        error: function (error) {
            alert(error.responseText);
            window.location.reload();
        },
    });
});

    });