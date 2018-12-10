#### Usage
This fake server uses `faker.js` and `json-server` in order to serve up fake data for our front end test.

Run default server with `npm start`, this will serve up the contents in `db.json`.

You may create a new `db.json` file by running the `generateDB.js` file and adjusting the `numberOfEntries` value contained inside it (minimum number of entries is 5000).

We will be checking the final submission by running generateDB.js again to create new `db.json` file.

You may launch the server with the `db.json` file by running `npm run start`.

#### Data Shapes

The API route that serves the location data is `http://localhost:8001/locations?baths=1&types=1`, and the data it serves up is of shape:
```
{
    "id": 0,
    "address": "293 Ova Extensions Koelpinstad New Hampshire, 86680-5255",
    "baths": 1,
    "types": 1,
}
```

The API route that serves the types is `http://localhost:8001/types`.  The response is:
```
[
  { id: 1, name: 'Condo' }, 
  { id: 2, name: 'Single Family' }, 
  { id: 3, name: 'TownHouse' },
  { id: 4, name: 'Multi Family' },
  { id: 5, name: 'Land' }
]
```

The API route for all baths is `http://localhost:8001/baths`.  The response is:
```
[
  { id: 1, name: '1 bath' }, 
  { id: 2, name: '2 baths' }, 
  { id: 3, name: '3 baths' },
  { id: 4, name: '4 baths' },
  { id: 5, name: '5 baths' }
]
```

The API route for all users is `http://localhost:8001/user`.  You can request a single user object by appending the id to the previous URL like so: `http://localhost:8001/user/1`.  The data shape for a user is:
```
{
  "id": 1,
  "roles": [1]
}
```
