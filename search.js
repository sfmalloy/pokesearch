$(document).ready(() => {
    $("#doSearch").submit((e) => {
        var name = $("#doSearch").serializeArray()[0].value;
        var cacheName = `pokesearch-${name}`
        e.preventDefault();

        $("#result").html("<p>Searching...</p>");

        if (!(cacheName in localStorage)) {
            $.ajax({
                type: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${name}`,
                success: (response) => {
                    console.log("GET call Success");
                    localStorage[cacheName] = response["sprites"]["other"]["official-artwork"]["front_default"]
                    $("#result").html(`<img src="${localStorage[cacheName]}">`);
                },
                error: (response) => {
                    $("#result").html(`<p>Pokémon "pokesearch-${name}" does not exist</p>`);
                }
            });
        } else {
            console.log("Image source in cache");
            $("#result").html(`<img src="${localStorage[cacheName]}">`);
        }
    });
});

