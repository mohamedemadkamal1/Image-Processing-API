/* eslint-disable no-unused-vars */
import express from 'express';
import processor from './routes/api/sizingRoute';
import mainAPI from './routes';

const app = express();
const port = 3000;

app.use('/Main', mainAPI);
app.use('/sizing', processor);

app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});

export default app;
