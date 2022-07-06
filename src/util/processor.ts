/* eslint-disable no-unused-vars */
import sharp from 'sharp';
import path, { resolve } from 'path';
import * as fs from 'fs';

const resizer = async (name:string, width:unknown, height:unknown):Promise<string> => {
  const mainImage = path.resolve(`./image/${name}.jpg`);
  const outputImage = path.resolve(`./thumbnails/${name}-${width}-${height}.jpg`);

  // Applying cache for repeated use.
  // see if the called image already exists.
  // If it does exist => return it instead of making it again.
  if (fs.existsSync(outputImage)) {
    return outputImage;
  }
  return new Promise((resolve, reject) => {
    // If it doesn't so lets produce it using #sharp and file system.
    sharp(mainImage)
      .resize({
        width: parseInt(width as string),
        height: parseInt(height as string)
      })
      .toFile(outputImage).then(() => {
        resolve(outputImage);
      }).catch((err) => {
        reject(err);
      });
    // After the image is produced, now we can send it as a respond to the request from the route.
  });
};

export default resizer;
