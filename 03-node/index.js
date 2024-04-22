import express from 'express';
import helmet from 'helmet';

const app = express();

// Use Helmet!
app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello middleware');
  next();
});

app.use(express.static('public'));

// get all
app.get('/users', () => {});
// get one
app.get('/users/:id', (request, response) => {
  const id = request.params.id;
});
// create
app.post('/users', (request, response) => {
  const data = request.body;
});
// update the whole dataset
app.put('/users/:id', () => {});
// update fieldwise
app.patch('/users/:id', () => {});
// remove
app.delete('/users/:id', () => {});

app.get('/', (request, response) => {
  // res.set('X-Powered-By', 'Apache');
  response.json({
    id: 1,
    firstName: 'Klaus',
    lastName: 'Müller',
  });
});

app.listen(3000, () => console.log('I AM LISTENING!!!'));
