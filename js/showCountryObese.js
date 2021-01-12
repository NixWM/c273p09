$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $("#idCountry").val();
        console.log("#idCountry");
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                
                var msg = "<thead></th><th>Population</th><th>obese</th></tr></thead>";
                msg += "<tr><td>" + response.population + "</td>" + "<td>" + response.obese + "</td></tr>";
                msg += "</tbody>";
                $("#obeseTable").html(msg);
            }
        });
    });
});