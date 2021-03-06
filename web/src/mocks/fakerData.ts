import faker, { animal } from "faker";
import { v4 as uuidv4 } from "uuid";

export const animals = [
  {
    id: uuidv4(),
    org: faker.company.companyName(),
    name: faker.name.firstName(),
    type: "dog",
    desciption: faker.lorem.paragraph(1),
    imageURL: "https://swipet.s3.us-east-2.amazonaws.com/demo/1000",
    breed: faker.animal.dog(),
    totalLikes: 0,
  },
  {
    id: uuidv4(),
    org: faker.company.companyName(),
    name: faker.name.firstName(),
    type: "dog",
    desciption: faker.lorem.paragraph(1),
    imageURL: "https://swipet.s3.us-east-2.amazonaws.com/demo/1001",
    breed: faker.animal.dog(),
    totalLikes: 0,
  },
  {
    id: uuidv4(),
    org: faker.company.companyName(),
    name: faker.name.firstName(),
    type: "dog",
    desciption: faker.lorem.paragraph(1),
    imageURL: "https://swipet.s3.us-east-2.amazonaws.com/demo/1002",
    breed: faker.animal.dog(),
    totalLikes: 0,
  },
  {
    id: uuidv4(),
    org: faker.company.companyName(),
    name: faker.name.firstName(),
    type: "dog",
    desciption: faker.lorem.paragraph(1),
    imageURL: "https://swipet.s3.us-east-2.amazonaws.com/demo/1003",
    breed: faker.animal.dog(),
    totalLikes: 0,
  },
  {
    id: uuidv4(),
    org: faker.company.companyName(),
    name: faker.name.firstName(),
    type: "dog",
    desciption: faker.lorem.paragraph(1),
    imageURL: "https://swipet.s3.us-east-2.amazonaws.com/demo/1004",
    breed: faker.animal.dog(),
    totalLikes: 0,
  },
];
