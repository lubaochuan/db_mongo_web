# Simple Web App with MongoDB

This project is modified from the example app in the Edx course -
[Programming for the Web with JavaScript](https://www.edx.org/course/programming-web-javascript-pennx-sd4x).

Here are the steps to run this app.

0. setup MongoDB and create the collection.

See the instructions on [how to install and run MongoDB server](https://docs.c9.io/docs/setup-a-database).

Run the following commands to create a collection and populate it with sample
data.
```
use myDatabase

db.createCollection("books", {autoIndexId : true})

db.books.insert(
[{
  title: 'Introduction to Algorithms',
  year: 1990,
  authors: [
    { name: 'Thomas Cormen', affiliation: 'Dartmouth' },
    { name: 'Charles Leiserson', affiliation: 'MIT' },
    { name: 'Ronald Rivest', affiliation: 'MIT' },
    { name: 'Clifford Stein', affiliation: 'Columbia' }]
}, {
  title: 'Principles of Compiler Design',
  year: 1977,
  authors: [
    { name: 'Alfred Aho', affiliation: 'Bell Labs' },
    { name: 'Jeffrey Ullman', affiliation: 'Princeton' }]
}])
```

1. clone this repo and run the following command in the project directory to
  install required node packages.
```
npm install
```

2. Start MongoDB server
```
mongod --bind_ip=$IP --nojournal
```

3. Start the app (express server)

Run `npm index.js` in the project directory.

4. Play with the app

Go to `https://database-baochuan.c9users.io/public/bookform.html`
(replace `database-baochuan` with your Cloud 9 workspace name).
