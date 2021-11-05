import React from "react";

var faker = require("faker");
var fs = require('fs');

function generatePets() {

    for (let id = 1; id <= 20; id++) {

        let pets = [];

        // initialize variables with random data
        var petName = faker.random.firstname;
        var petType = "dog";
        var petPrice = faker.random.datatype.number({ min: "25", max: "300" });
        var petImage = faker.random.image.animal();
        var petBio = faker.random.words(15);

        pets.push({
            "id": id,
            "pet_name": petName,
            "pet_type": petType,
            "pet_price": petPrice,
            "pet_bio": petBio,
            "pet_image": petImage
        });

        return {"PetData": pets}

    }

    let dataObj = generatePets();

    fs.writeFileSync('petData.json', JSON.stringify(dataObj, null, '\t'));

}


