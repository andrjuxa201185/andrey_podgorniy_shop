// import chai from 'chai';
// import sinon from 'sinon';
// import faker from 'faker';
// import { getUsers } from './users';

// const { assert, expect } = chai;
// chai.should();

// describe('getUsers()', () => {
//   let stub;
//   let fakeConsole;
//   const testString = faker.lorem.word();

//   beforeEach(() => {
//     stub = sinon.stub(window, 'fetch');
//     stub.returns(Promise.resolve({
//       json() { return Promise.resolve(testString); }
//     }));
//     fakeConsole = sinon.stub(window.console, 'log');
//   });

//   const createStub = () => {
//     const stub = sinon.stub(window, 'fetch');
//   }

//   afterEach(() => {
//     window.fetch.restore();
//     window.console.log.restore();
//   });

//   it('should call fetch()', () => {
//     getUsers();
//     expect(stub.called).to.be.true;
//   });

//   it('should call console.log with result if success', (done) => {
//     const fakeConsole = sinon.stub(console, 'log');

//     // createStub;()
//     getUsers().then(() => {  
//       expect(fakeConsole.getCall(0).args[0]).to.equal(testString);
//       done();  
//     });
//   });
// });