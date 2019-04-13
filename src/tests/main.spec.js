import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { showMessage, getDay, getAdultUsers, getRandomUsers, Product } from './main';
import { days, defaultProduct, money, users } from './constants';

const { assert, expect } = chai;
chai.should();

describe('main', () => {
  let product, name, fakeAlert;

  beforeEach(() => {
    product = new Product();
    name = faker.name.firstName;
  });
// ------ showMessage ---------//
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
// -------- getDay -----------//
it('should return days[day] on getDay()', () => {
  let day = new Date().getDay();
  getDay().should.equal(days[day]);
});


});