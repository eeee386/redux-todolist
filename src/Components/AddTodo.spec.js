import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import {AddTodo} from './AddTodo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    addTodo: jest.fn(),
    findGIF: jest.fn()
};

describe('AddTodoComponent', ()=> {
    const enzymeWrapper = mount(<AddTodo {...props} />);
    it('should render itself', ()=> {
        const formProps = enzymeWrapper.find('form').props();
        // itt jobb lenne, ha tényleg le tudnám írni, hogy itt egy functiont szeretnék
        expect(formProps.onSubmit).toBeTruthy();
        expect(enzymeWrapper.find('label').text("Add a new thing to-do"));
        const inputProps = enzymeWrapper.find('input').props();
    });

    it('should dispatch addTodo, and findGIFThunk', () => {
        const button = enzymeWrapper.find('button');
        button.simulate('click');
        expect(props.addTodo.mock.calls.length).toBe(0);
        expect(props.findGIF.mock.calls.length).toBe(0);
        let input = enzymeWrapper.find('input');
        input.simulate('change', {target: {value: 'My new value'}});
        button.simulate('click');
        expect(props.addTodo).toHaveBeenCalled();
        expect(props.findGIF).toHaveBeenCalled();
    });
});