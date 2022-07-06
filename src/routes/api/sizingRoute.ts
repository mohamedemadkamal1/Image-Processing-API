/* eslint-disable no-unused-vars */
import express from 'express';
import path from 'path';
import resizer from '../../util/processor';
import * as fs from 'fs';

const processor = express.Router();

processor.get('/', (req: express.Request, res: express.Response):void => {
  try {
    const name = req.query.name as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;
    const mainImage = path.resolve(`./image/${name}.jpg`);

    // First lets see if the image we want to resize exists.
    if (fs.existsSync(mainImage)) {
      // If it does exist then lets see if the user entered a valid Width and Height.
      if (isNaN(width) || typeof width === 'undefined' || width === null) {
        res.send('Please enter a width');
      } else if (isNaN(height) || typeof height === 'undefined' || height === null) {
        res.send('Please enter a height');
      } else { // If he entered a valid Width and Height then lets produce the image using the resize function.
        resizer(name, width, height).then(async (outputImage) => {
          const img = await fs.promises.readFile(outputImage).catch((error: any) => {
            throw error;
          });
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(img, 'binary');
        }).catch((error) => {
          res.status(400).send({
            message: error.message
          });
        });
      }
    } else { // If the image name does not exist, then an error showed to the user.
      res.send('Please enter a valid image name');
    }
  } catch (err) { // Handling error if anything went wrong in the above code.
    res.send(err + 'Please enter valid input.');
  }
});

export default processor;
