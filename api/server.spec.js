const request = require('supertest')

const server = require('./server')

describe('GET /', () => {
    it('should return 200 Ok', () => {
        return  request(server)
            .get('/')
            .expect(200)
    })

    it('should return JSON using done callback', done => {
        // using the done callback
        request(server)
          .get('/')
          .then(res => {
            expect(res.type).toBe('application/json'); // Content-Type
            done();
          });
      });

      it('should return { message: success! }', done => {
        // using the done callback
        request(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: 'success!' }); // Content-Type
            done();
          });
      });
})