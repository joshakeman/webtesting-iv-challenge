const request = require('supertest')

const server = require('../api/server')

describe('POST /', () => {
    it('should return 200 Ok', () => {
        return  request(server)
            .get('/users')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

    

    // it('should return JSON using done callback', done => {
    //     // using the done callback
    //     request(router)
    //       .put('/')
    //       .then(res => {
    //         expect(res.type).toBe('application/json'); // Content-Type
    //         done();
    //       });
    //   });

    //   it('should return { message: success! }', done => {
    //     // using the done callback
    //     request(router)
    //       .get('/')
    //       .then(res => {
    //         expect(res.body).toEqual({ message: 'success!' }); // Content-Type
    //         done();
    //       });
    //   });
})