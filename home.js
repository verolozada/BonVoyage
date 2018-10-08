$(document).ready(function () {


    $("#test").on("click", function () {
        // event.preventDefault();
        console.log("I've been clicked");
        city = $("#autocomplete-input1").val().trim();
        console.log(city);
        country = $("#autocomplete-input2").val().trim();
        console.log(country);
        // Attempting to call fourSquare API
        var fsURl = 'https://api.foursquare.com/v2/venues/explore?client_id=D4PJXJ4YDXIGGJXL0HU1XM1AZFXHDZTXFCIY0XKP5ALGUXJL&client_secret=L5O4FMUQAILJDX4SYQJBJLGXMG31P5LIGN2OQVL3WC4JVIU5&v=20180323&limit=4&near=' + city + ',' + country;
        console.log(fsURl)
        $.ajax({
            url: fsURl,
            method: "GET"
        }).then(function (response) {
            console.log('Response from FourSquare===>', response);
            const { response: { groups } } = response;
            const venues = [];
            // This code returns the response for the venue's name, the venue's address and the venue's category from the FourSquare API.
            groups[0].items.forEach(item => venues.push(item.venue.name + " Address: " + (item.venue.location.address) + " Category:  " + (item.venue.categories[0].name)));
            console.log('normalized DATA ==>', venues);
            // appending the venue information to the class thingToDo.
            venues.forEach(venue => {
                console.log("This is the Venue ==>", venue);
                 $(".thingToDo").append('<p>' + venue + '</p>');
            });

        })

    })
});