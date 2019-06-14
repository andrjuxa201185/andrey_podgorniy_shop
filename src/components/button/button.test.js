/* eslint-disable no-undef */

import { shallow } from 'enzyme';
import { Button } from './Button';

describe('<Button />', () => {
  it('should create buttonComponent', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should called onClick', () => {
    const fakeClick = jest.fn();
    const wrapper = shallow(<Button callback={fakeClick} />);
    const event = {
      target: { name: { value: '' } },
      preventDefault: _ => _
    };
    wrapper.simulate('click', event);
    expect(fakeClick).toHaveBeenCalled();
  });

  it('should set text', () => {
    const someText = 'text';
    const wrapper = shallow(<Button text={someText} />);
    expect(wrapper.find('a').text()).toBe(someText);
  });

  it('should set default text', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('a').text()).toBe('Ok');
  });
});
