const request = require('supertest');
// Start server
// const app = require('../');

const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;
const testJsonFile = path.join(__dirname, '../server/db/games.test.json');
const fs = require('fs');

/**
* include an assertion library here so that you can make assertions other than those
* provided by supertest. Choose whichever assertion library suits you.
*/
// const expect = require('expect');

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and application/ content type', done => {
        request(HOST)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });

      it('404 everything else', function testPath(done) {
        request(HOST)
          .get('/foo/bar')
          .expect(404, done);
      });

    });
  });
});
