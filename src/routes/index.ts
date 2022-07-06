import express from 'express';

const mainAPI = express.Router();

mainAPI.get('/', (req: express.Request, res: express.Response):void => {
  res.send('Welcome to image resizer API');
});

export default mainAPI;
