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

