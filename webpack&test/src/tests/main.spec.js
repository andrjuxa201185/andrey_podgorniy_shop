import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './main';
import { days, defaultProduct, money, users } from './constants';

const { assert, expect } = chai;
chai.should();

describe('main', () => {
  let name, product, fakeAlert;

  beforeEach(() => {
    product = new Product();
    name = faker.name.firstName;
  });
  // ----------- showMessage ---------//
  it('should alert with showMessage("text") was called', () => {
    fakeAlert = sinon.stub(window, 'alert');
    showMessage();
    expect(fakeAlert.called).to.be.true;
    window.alert.restore();
  });
  
  it('should alert "text" with showMessage("text")', () => {
    fakeAlert = sinon.stub(window, 'alert');
    showMessage(name);
    expect(fakeAlert.getCall(0).args[0]).to.equal(name);
    window.alert.restore();
  });
  // ----------- getDay -----------//
  it('should return days[day] on getDay()', () => {
    let day = new Date().getDay();
    getDay().should.equal(days[day]);
  });
  // ----------- getAdultUsers --------//
  it('should return Array on getAdultUsers()', () => {
    getAdultUsers().should.instanceOf(Array);
  });
  
  it('should return [{age: 19}] on getAdultUsers([{age: 17},{age: 19}])', () => {
    expect(getAdultUsers([{ age: 17 }, { age: 19 }])).to.deep.equal([{ age: 19 }]);
  });
  // --------- getRandomUsers -------//
  it('should return false if argument  == false', () => {
    expect(getRandomUsers(false)).to.be.false;
  });

  it('should return [1,2] from getRandomUsers([1,2,3,4]) if random returns > 0.5', () => {
    let fakeRandom = sinon.stub(Math, 'random');
    fakeRandom.returns(0.7);
    expect(getRandomUsers([1, 2, 3, 4])).to.deep.equal([1, 2]);
    Math.random.restore();
  });

  it('should return [3,4] from getRandomUsers([1,2,3,4]) if random returns < 0.5', () => {
    let fakeRandom = sinon.stub(Math, 'random');
    fakeRandom.returns(0.1);
    expect(getRandomUsers([1, 2, 3, 4])).to.deep.equal([3, 4]);
    Math.random.restore();
  });
  // ---------- Product ----------//
  it('should create instance with field default title', () => {
    product.title.should.equal(defaultProduct);
  });

  it('should create instance with field default price', () => {
    product.price.should.equal(10);
  });

  it('should create instance with field title = name', () => {
    const product = new Product(name);
    product.title.should.equal(name);
  });

  it('should create instance with field price = 20', () => {
    const product = new Product(undefined, 20);
    product.price.should.equal(20);
  });

  it('should return 10$ on getPrice() method', () => {
    product.getPrice().should.equal(10 + money)
  });

  it('should set on field value argument of setPrice(val) if val > 10', () => {
    product.setPrice(12);
    product.value.should.equal(12);
  });

  it('should product.value !== val if on setPrice(val) val < 10', () => {
    product.setPrice(9);
    expect(product.value).not.to.equal(9);
  });

  it('should throw new Error on setPrice()', () => {
    expect(product.setPrice).to.throw();
  });
});