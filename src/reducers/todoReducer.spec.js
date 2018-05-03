import {todoReducer} from './todoReducer';

describe('todoReducerTest', () => {
    it('should return initial state, if state is undefined, action is empty', () => {
        expect(todoReducer(undefined, {})).toEqual([]);
    });
    it('should add a new todo, when Add_Todo action is given', () => {
        expect(todoReducer(undefined, {type: "Add_Todo", id: 3, isArchived: false, text: "text"})).toEqual([
            {id: 3, isArchived: false, text: "text"}
        ])
    });
    it('should delete a todo, when Delete_Todo action is given', () => {
        expect(todoReducer([{id: 3, isArchived: false, text: "text"}], {type: "Delete_Todo", id: 3})).toEqual([]);
    });
    it('should archive a todo, when Archive_Todo action is given', () => {
        expect(todoReducer([{id: 3, isArchived: false, text: "text"}], {type: "Archive_Todo", id: 3})).toEqual([
            {id: 3, isArchived: true, text: "text"} 
        ])
    });
});