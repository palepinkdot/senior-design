import React from "react";


var faker = require("faker");
var fs = require('fs');

function generatePets() {

    for (let id = 1; id <= 10; id++) {

        // initialize animal with random data
        let pets = [];

        var name = faker.random.firstname;
        var type = "dog";
        var petPrice = faker.random.datatype.number({ min: "25", max: "300" });
        var imageURL = faker.random.image.animal();
        var description = faker.random.words(15);
        var breed = "german shephard";
        var totalLikes = faker.random.datatype.number({ min: "0", max: "10" });
        var createdAt = faker.random.date.past;
        var updatedAt = faker.random.date.recent;

        // push data to array
        pets.push({
            "id": id.toString(),
            "pet_name": name,
            "pet_type": type,
            "pet_price": petPrice,
            "pet_bio": description,
            "pet_image": imageURL,
            "pet_breed": breed,
            "pet_totalLikes": totalLikes,
            "pet_createdAt": createdAt,
            "pet_updatedAt": updatedAt
        });
        
        return { "PetData": pets }


    }

    // write data to JSON file
    let dataObj = generatePets();
    console.log(dataObj);

    fs.writeFileSync('petData.json', JSON.stringify(dataObj, null, '\t'));

}


//   @Field()
//   @Column()
//   orgId!: string;

//   @Field(() => String)
//   @ManyToOne(() => Org, (org) => org.animals)
//   org!: Org;