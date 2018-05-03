import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TodoList} from './TodoList';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    todoListItems: [
        {id: 1, isArchived: false, text: "ayylmao"},
        {id: 2, isArchived: true, text: "AYY"},
        {id: 3, isArchived: true, text: "text"} 
    ],
    onArchiveClick: jest.fn(),
    onDeleteClick: jest.fn(),
    onEmptyTodoList: jest.fn(),
};

describe('TodoListComponent', ()=> {
    const enzymeWrapper = mount(<TodoList {...props} />);
    it('should render itself', ()=> {
        expect(enzymeWrapper.find('ul')).toBeTruthy();
        expect(enzymeWrapper.find('li').at(0).key()).toBeTruthy();
        expect(enzymeWrapper.find('li').at(1).key()).toBeTruthy();
        expect(enzymeWrapper.find('li').at(2).key()).toBeTruthy();
        expect(enzymeWrapper.find('#span-1')).toBeTruthy();
        expect(enzymeWrapper.find('#span-2')).toBeTruthy();
        expect(enzymeWrapper.find('#span-3')).toBeTruthy();
        expect(enzymeWrapper.find('#Archbutton-1')).toBeTruthy();
        expect(enzymeWrapper.find('#Archbutton-2')).toBeTruthy();
        expect(enzymeWrapper.find('#Archbutton-3')).toBeTruthy();
        expect(enzymeWrapper.find('#Delbutton-1')).toBeTruthy();
        expect(enzymeWrapper.find('#Delbutton-2')).toBeTruthy();
        expect(enzymeWrapper.find('#Delbutton-3')).toBeTruthy();
        expect(enzymeWrapper.find('#span-1').props().style).toEqual({textDecoration:"none"});
        expect(enzymeWrapper.find('#span-2').props().style).toEqual({textDecoration:"line-through"});
        expect(enzymeWrapper.find('#span-3').props().style).toEqual({textDecoration:"line-through"});
        expect(enzymeWrapper.find('#span-1').text()).toEqual("ayylmao");
        expect(enzymeWrapper.find('#span-2').text()).toEqual("AYY");
        expect(enzymeWrapper.find('#span-3').text()).toEqual("text");
    });
    it('should call the onArchiveClick functions, when clicking on the Archive buttons', () => {
        let archButton = enzymeWrapper.find('#Archbutton-1');
        archButton.simulate('click');
        expect(props.onArchiveClick).toHaveBeenCalledWith(1);
        archButton = enzymeWrapper.find('#Archbutton-2');
        archButton.simulate('click');
        expect(props.onArchiveClick).toHaveBeenCalledWith(2);
        archButton = enzymeWrapper.find('#Archbutton-3');
        archButton.simulate('click');
        expect(props.onArchiveClick).toHaveBeenCalledWith(3);
    });

    it('should call the onArchiveClick functions, when clicking on the Archive buttons', () => {
        let delButton = enzymeWrapper.find('#Delbutton-1');
        delButton.simulate('click');
        expect(props.onDeleteClick).toHaveBeenCalledWith(1);
        delButton = enzymeWrapper.find('#Delbutton-2');
        delButton.simulate('click');
        expect(props.onDeleteClick).toHaveBeenCalledWith(2);
        delButton = enzymeWrapper.find('#Delbutton-3');
        delButton.simulate('click');
        expect(props.onDeleteClick).toHaveBeenCalledWith(3);
    });
});