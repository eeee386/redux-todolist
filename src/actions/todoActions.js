let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'Add_Todo',
    id: nextTodoId++,
    isArchived: false,
    text: text
});

export const archiveTodo = (id) => ({
    type: 'Archive_Todo',
    id: id,
    isArchived: true,
});

export const deleteTodo = (id) => ({
    id: id,
    type: 'Delete_Todo'
});