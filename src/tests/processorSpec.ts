/* eslint-disable no-undef */
import path from 'path';
import resizer from '../util/processor';

it('It should return a resized Image', () => {
  expect(resizer('wolf', 300, 300)).toBeTruthy();
});

it('should return a resized Image', () => {
  const img = resizer('wolf', 300, 300);
  img.then((outputImage) => {
    expect(outputImage).toBe(path.resolve('./thumbnails/wolf-300-300.jpg'));
  });
});
