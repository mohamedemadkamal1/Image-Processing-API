/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

it('Should get the API endpoint', async () => {
  const response = await request.get('/Main');
  expect(response.status).toBe(200);
});

it('Should get the resized image', async () => {
  const response = await request.get('/sizing?name=wolf&width=600&height=200');
  expect(response.status).toBe(200);
});
