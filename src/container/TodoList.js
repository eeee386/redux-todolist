import React from 'react';
import {connect} from "react-redux";
import {archiveTodo, deleteTodo} from "../actions/index";

const TodoList = (StateAndDispatchProps) => {
    if (StateAndDispatchProps.todoListItems.length > 0) {
        return (
            <ul>{StateAndDispatchProps.todoListItems.map((item) => {
                if (item.id >= 0) {
                    return (
                        <li key={item.id}>
                            <span style={{textDecoration: item.isArchived ? 'line-through' : 'none'}}>{item.text}</span>
                            <button onClick={() => StateAndDispatchProps.onArchiveClick(item.id)}>Archive</button>
                            <button onClick={() => StateAndDispatchProps.onDeleteClick(item.id)}>Delete</button>
                        </li>)
                }
            })}</ul>
        );
    } else {
        return (<p>You have nothing to do.</p>)
    }

};

const mapStateToProps = (state) => ({todoListItems: state.todoReducer});

const matchDispatchToProps = (dispatch) => ({
    onArchiveClick: id => dispatch(archiveTodo(id)),
    onDeleteClick: id => dispatch(deleteTodo(id))
});

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(TodoList);