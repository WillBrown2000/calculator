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

it('validates operations', () => {
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

it('resets state', ()=> {
  let wrapper = mount(<App />)
  wrapper.setState({
    entries: ['1', '+', '1'],
    displayedValue: '2',
    newEntry: true,
    firstEntryMade: true,
  })

  expect(wrapper.state('entries')).toEqual(['1', '+', '1'])
  expect(wrapper.state('displayedValue')).toEqual('2')
  expect(wrapper.state('newEntry')).toEqual(true)
  expect(wrapper.state('firstEntryMade')).toEqual(true)

  let instance = wrapper.instance()
  instance.reset()

  expect(wrapper.state('entries')).toEqual([])
  expect(wrapper.state('displayedValue')).toEqual('')
  expect(wrapper.state('newEntry')).toEqual(false)
  expect(wrapper.state('firstEntryMade')).toEqual(false)
})

it('calculate', () => {
  let wrapper = mount(<App />)
  wrapper.setState({
    entries: ['1', '+'],
    displayedValue: '2',
    newEntry: true,
    firstEntryMade: true,
  })

  let instance = wrapper.instance()

  expect(instance.calculate('-','4')).toEqual(5)
  // remember, this sets the last state to 5 and next operator to -
  expect(instance.calculate('-','4')).toEqual(1)

})

it('check helper methods', () => {
  let wrapper = mount(<App />)
  wrapper.setState({
    entries: ['1', '+'],
    displayedValue: '2',
    newEntry: true,
    firstEntryMade: true,
  })

  let instance = wrapper.instance()

  expect(instance.containsFirstOperandOnly()).toBe(false)
  expect(instance.isEntriesEmpty()).toBe(false)
  expect(instance.checkDisplayedValue()).toBe(false)

  instance.reset()

  //check with empty state


  expect(instance.containsFirstOperandOnly()).toBe(false)
  expect(instance.isEntriesEmpty()).toBe(true)
  expect(instance.checkDisplayedValue()).toBe(false)

  wrapper.setState({
    entries: ['1'],
    displayedValue: '1',
    newEntry: true,
    firstEntryMade: true,
  })

  // check with first entry, no operator
  expect(instance.containsFirstOperandOnly()).toBe(true)
  expect(instance.isEntriesEmpty()).toBe(false)
  expect(instance.checkDisplayedValue()).toBe(true)


})
