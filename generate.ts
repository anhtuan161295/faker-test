const faker = require('faker');

const randomName = faker.name.findName();
randomName = faker.name.lastName();

console.log(randomName);
