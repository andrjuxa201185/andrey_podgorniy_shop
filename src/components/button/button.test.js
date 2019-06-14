import { shallow } from 'enzyme';

import { Button } from './Button';

describe('<Button />', () => {
  it('should create buttonComponent', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('a').length).toBe(1);
  });
});
