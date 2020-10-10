import express from 'express'
import cors from 'cors'
import graph from 'express-graphql'
const { graphqlHTTP } = graph
const app = express();

const schema = {
  // we will add this later
};

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
