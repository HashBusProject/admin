var url = "https://global-memento-407716.uc.r.appspot.com" ;

$(document).ready(function(){
    var xhr = new XMLHttpRequest() ; 
    xhr.open("GET" , url + "/Admin/GetNumberOfPoint" , true) ;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) { 
            data = xhr.responseText;
            document.getElementById("numberOfUser").innerHTML = data ; 
        }
    }
    xhr.send();
});


$(document).ready(function() {
    $.ajax({
        url: url + "/Admin/GetAllPoint",
        method: "GET",
        success: function(persons) {
            $("#example").DataTable({
                data: persons,
                columns: [
                    { data: "id" },
                    { data: "pointName" },
                    { data: "x" },
                    { data: "y" },
                ]
            });
        },
        error: function(error) {
            console.error("Error fetching data:", error);
        }
    })
    });

function showAddFeild(){
    document.getElementById("addPointName").value = "";
    document.getElementById("addPointX").value = "";
    document.getElementById("addPointY").value = "";
    $('#addPointModal').modal('show');
}

function addPoint() {
    var x = document.getElementById("addPointY").value;
    var y = document.getElementById("addPointX").value;
    var pointName = document.getElementById("addPointName").value;
    var data = {
        pointName: pointName,
        x: x,
        y: y,
    };
    $.ajax({
        url: url + "/Admin/AddStopPoint",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
        success: function (data) {
            alert("Point Added Successfully!!!");
        },
        error: function (error) {
            alert(error.responseText);
            window.location.reload();
        },
    });
}
