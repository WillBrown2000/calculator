import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('validates operations:', () => {
  let goodArray = ['1', '+', '2']
  let badArray1 = ['']
  let badArray2 = ['x', '+', '3']
  let badArray3 = []
  let badArray4 = ['e', '+', '10']
  let wrapper = shallow(<App />)
  let instance = wrapper.instance()
  expect(instance.isValidOperation(goodArray)).toBe(true)
  expect(instance.isValidOperation(badArray1)).toBe(false)
  expect(instance.isValidOperation(badArray2)).toBe(false)
  expect(instance.isValidOperation(badArray3)).toBe(false)
  expect(instance.isValidOperation(badArray4)).toBe(false)
});
