  var faker = require('faker');

  var name = faker.name.findName();
  var randomEmail = faker.internet.email();
  console.log(name);