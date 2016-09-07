// const db = require('../server.js');
// const fs = require('fs');
// const path = require('path');
// const testJsonFile = path.join(__dirname, '../server/db/games.test.json');
// const expect = require('expect');
//
// describe('db unit tests', () => {
//   // Mocha runs the "before" function once, before any tests are executed.
//   // If you need to perform an asynchronous operation during a Mocha function, then
//   // you have two options. One is to return a promise and Mocha will honor that promise,
//   // not continuing to the next step until the Promise is resolved. The second way is
//   // to provide a callback function named "done" (the approach I'm using below).
//   // If you provide the callback, then Mocha will not move on to the next step until
//   // the "done" callback has been called. Here, I'm passing "done" directly to the
//   // fs.writeFile function which will call done as soon as the file has been written.
//   // This way, the tests won't start until the "database" file has been reset to an empty Array!
//   before(() => {
//     // Make sure "db" is empty
//     fs.writeFileSync(testJsonFile, JSON.stringify([], null, 2));
//     db.reset();
//   });
//
//   // In Mocha we use the "describe" function to seperate our tests into sections.
//   // The main purpose here is to make the console output easier to read. Each test
//   // inside of a describe block will have its output indented inside of its description.
//   // You can also place "before", "beforeEach", "after", and "afterEach" functions
//   // inside of "describe" blocks and they will only run for tests inside the describe block.
//   describe('#create', () => {
//     it('valid game is written to json file', () => {
//       const game = { winner: 'X' };
//       db.create(game);
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList.length).toEqual(1);
//       expect(gameList[0].winner).toEqual('X');
//     });
//
//     // TODO: Finish unit testing the create function
//
//     // it('game has unique ID field added', () => {
//     //   const game1 = {winner: "X"};
//     //   const game2 = {winner: "O"};
//     //   db.create(game1);
//     //   db.create(game2);
//     //   const gameList = db.find();
//     //   expect(gameList[1].id).toNotEqual(gameList[2].id);
//     // });
//
//     // it('adding a second game does not overwrite first game', () => {
//     //   const gameListLength = db.find().length;
//     //
//     //   const game3 = {winner: 'X'};
//     //   db.create(game3);
//     //   const gameList = db.find();
//     //   expect(gameList.length).toEqual(gameListLength + 1);
//     //
//     // });
//     //
//     // it('if winner field is not provided, game is not added and an error is returned', () => {
//     //   expect(function(){db.create({loser: 'X'});}).toThrow();
//     //   // TODO: Practice test-driven development here. Currently the create function does
//     //   // not return an error if the winner field is not provided. Follow the TDD approach:
//     //   //   1. Write a test that tests that an error is returned if the "winner" field is not provided
//     //   //   2. Run the tests and make sure your new test fails (since this feature doesn't exist yet)
//     //   //   3. Add the functionality to create function in server/db/games.js to make your test pass
//     // });
//     //
//     // it('game has createdAt date for the current time', () => {
//     //   // Hint: To test this in-depth, try mocking the date with Sinon.js
//     //   // This way you can set a random date, create a new game in the database,
//     //   // and then assert that the game in the database matches the date you set exactly!
//     //   var d = new Date();
//     //   var clock = sinon.useFakeTimers(d.getTime());
//     //
//     //   db.create({winner: 'O'});
//     //
//     //   expect(db.find()[4].createdAt).toEqual(d.toISOString());
//     //
//     //   clock.restore();
//     // });
//   });
//
//   // TODO: Unit test the #find and #drop functions
//
//   // describe('#find', () => {
//   //   it('returns list of all games from the json file', () => {
//   //     const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//   //
//   //     expect(db.find()).toEqual(gameList);
//   //   });
//   //
//   //   it('works if the list of games is empty', () => {
//   //     db.drop();
//   //
//   //     expect(db.find()).toEqual([]);
//   //   });
//   // });
//   //
//   // describe('#drop', () => {
//   //   it('writes an empty array to the json file', () => {
//   //     db.drop();
//   //     const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//   //     expect(gameList).toEqual([]);
//   //   });
//   // });
// });
