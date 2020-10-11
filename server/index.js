
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const { setupDB } = require('./config/database-connection.js')
const app = express();

setupDB(v => console.log(v));

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(4000);
console.log('SERVER OK');
