const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to server');
  }
  console.log('Connected to server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
  //   console.log(res);
  // });
  //
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  });

  client.close();
});
