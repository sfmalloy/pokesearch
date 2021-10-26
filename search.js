var cache = {};

$(document).ready(() => {
    $("#doSearch").submit((e) => {
        var name = $("#doSearch").serializeArray()[0].value;

        e.preventDefault();

        $("#result").html("<p>Searching...</p>");

        if (!(name in cache)) {
            $.ajax({
                type: "GET",
                url: "https://pokeapi.co/api/v2/pokemon/" + name,
                success: (response) => {
                    console.log("GET call Success");
                    cache[name] = response["sprites"]["other"]["official-artwork"]["front_default"]
                    $("#result").html(`<img src="${cache[name]}">`);
                },
                error: (response) => {
                    $("#result").html(`<p>Pokémon "${name}" does not exist`);
                }
            });
        } else {
            console.log("Image source in cache");
            $("#result").html(`<img src="${cache[name]}">`);
        }
    });
});

