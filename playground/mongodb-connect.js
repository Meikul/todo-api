const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to server');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({}).count({name: 'Michael'}).then((count) => {
    console.log(`Michaels counts: ${count}`);
  }, (err) => {
    console.log('Not fetched', err);
  });

  client.close();
});
