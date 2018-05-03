import {addTodo, deleteTodo, archiveTodo} from "./todoActions";

describe("todoActions test", ()=> {
    it("addTodo should be the right format", () => {
        const addText = addTodo("ayylmao");
        expect(addText).toEqual({id: 0, isArchived: false, text:"ayylmao", type:"Add_Todo"})
    });
    it("deleteTodo should be the right format", () => {
        const deleteText = deleteTodo(0);
        expect(deleteText).toEqual({id: 0, type:"Delete_Todo"});
    });
    it("archiveTodo should be the right format", () => {
        const archiveText = archiveTodo(0);
        expect(archiveText).toEqual({id: 0, type: "Archive_Todo"})
    })
});
