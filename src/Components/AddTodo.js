import React from 'react';
import {addTodo} from "../actions/todoActions";
import {connect} from "react-redux";
import {findGIFThunk} from "../actions/todoActions";

const AddTodo = ({dispatch}) => {

    let input;
    let searchTerm;
    let imageUrl;

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value) {
            return
        }

        dispatch(addTodo(input.value));
        dispatch(findGIFThunk(input.value));
        input.value = ''
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add a new thing to-do:
                <input value={searchTerm} ref={node => input = node}/>
            </label>
            <button type="submit">
                Add To-do
            </button>
            <img src={imageUrl ? imageUrl : ''} alt=''/>
        </form>

    )
};

export default connect()(AddTodo);

