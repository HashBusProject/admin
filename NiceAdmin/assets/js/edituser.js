var url = "https://global-memento-407716.uc.r.appspot.com" ;
function editUser() {
    var isConfirmed = confirm("Are you sure you want to update this user?");

    if (!isConfirmed) {
        return;
    }

    const id = document.getElementById('id').value;
    const editName = document.getElementById("editName").value;
    const editUserName = document.getElementById('editUserName').value;
    const editEmail = document.getElementById('editEmail').value;
    var data = {
        userID: id,
        name: editName,
        username: editUserName,
        email: editEmail,
    }
    $.ajax({
        url: url + '/Admin/EditUser',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (data) {
            if (data) {
                alert("User updated successfully!!");
                window.location.reload();
            }
        },
        error: function (error) {
            alert(error.responseText);
            window.location.reload();
        },
    });
}
