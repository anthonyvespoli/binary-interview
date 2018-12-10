const faker = require('faker');
const jsonfile = require('jsonfile');

const numberOfEntries = 5000;

if (numberOfEntries < 100) {
  numberOfEntries = 100;
}

const generateStreetAddress = () => {
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const zipCode = faker.address.zipCode();
  const state = faker.address.state();
  return `${streetAddress} ${city} ${state}, ${zipCode}`;
};

const types = [
  { id: 1, name: 'Condo' }, 
  { id: 2, name: 'Single Family' }, 
  { id: 3, name: 'TownHouse' },
  { id: 4, name: 'Multi Family' },
  { id: 5, name: 'Land' }
];

const baths = [
  { id: 1, name: '1 bath' }, 
  { id: 2, name: '2 baths' }, 
  { id: 3, name: '3 baths' },
  { id: 4, name: '4 baths' },
  { id: 5, name: '5 baths' }
];

const jsonFile = 'db.json';

let jsonOutput = {
  locations: [],
  user: [
    { id: 1, roles: [1] },
    { id: 2, roles: [1] },
    { id: 3, roles: [1, 2] },
    { id: 4, roles: [1] },
  ],
  types,
  baths
};

for (var i = 0; i < numberOfEntries; i++) {
  const generatedJsonObject = {
    id: i,
    address: generateStreetAddress(),
    baths: faker.random.number(5),
    types: faker.random.number(5)
  };

  jsonOutput.locations.push(generatedJsonObject);
}

jsonfile.writeFile(jsonFile, jsonOutput, { spaces: 2 }, err => {
  if (err) {
    console.error('blah: ', err);
  } else {
    console.log('done');
  }
});
