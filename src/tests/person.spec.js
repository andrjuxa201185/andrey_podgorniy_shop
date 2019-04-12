// import chai from 'chai';
// import faker from 'faker';
// import { Person } from './person';

// const { assert, expect } = chai;
// chai.should();

// describe('Person Class', () => {
//   let person, name;

//   beforeEach(() => {
//     person = new Person();
//     name = faker.name.firstName;
//   });

//   it('should create instance with field name', () => {
//     person.name.should.equal('John');
//   });

//   it('should create instance with field Date', () => {
//     person.creation.should.instanceOf(Date);
//   });

//   it('should create instance with field name', () => {
//     const person = new Person(name);
    
//     person.name.should.equal(name);
//   });

//   it('should return name on getName()', () => {
//     person.getName().should.equal(person.name);
//   });

//   it('should set name on setName()', () => {
//     person.setName(name);
//     person.name.should.equal(name);
//   });

//   it('should return "night child" on getCreation() if 3 hours', () => {
//     person.creation.setHours(3);
//     person.getCreation().should.equal('night child');
//   });
// });