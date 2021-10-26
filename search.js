// var resultJson = null;

// function search() 
// {
//     httpGetAsync("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("name").value, (responseText) => {
//         resultJson = JSON.parse(responseText);
//         document.getElementById("result").innerHTML = "<img src= \"" + resultJson["sprites"]["other"]["official-artwork"]["front_default"] + "\">";
//     });
// }

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4)
//         {
//             if (xmlHttp.status == 200)
//                 callback(xmlHttp.responseText);
//             else if (xmlHttp.status == 404)
//                 document.getElementById("result").innerHTML = "<p> \"" + document.getElementById("name").value + "\" not found.</p>"
//         }
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.send(null);
// }

$(document).ready(() => {
    $("#doSearch").submit((e) => {
        var name = $("#doSearch").serializeArray()[0].value;

        e.preventDefault();

        $("#result").html("<p>Searching...</p>");

        console.log(name);
        $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + name,
            success: (response) => {
                console.log("Success");
                $("#result").html(`<img src="${response["sprites"]["other"]["official-artwork"]["front_default"]}">`);
            },
            error: (response) => {
                $("#result").html(`<p>Pokémon "${name}" does not exist`);
            }
        });
    });
});

