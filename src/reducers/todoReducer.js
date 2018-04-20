export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'Add_Todo':
            return [
                ...state,
                {
                    id: action.id,
                    isArchived: action.isArchived,
                    text: action.text,
                }
            ];
        case 'Delete_Todo':
            return state.filter(item => item.id !== action.id);
        case 'Archive_Todo':
            return state.map(todo => {
                    if (todo.id === action.id)
                        todo.isArchived = !todo.isArchived;
                    return todo;
                }
            );

        default:
            return state;
    }

};