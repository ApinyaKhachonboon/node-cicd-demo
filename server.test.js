import request from 'supertest';
import app from './server';

describe('GET /', () => {
  it('responds with json', () => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.name).toBe('iblurblur');
      });
  });
});
