import React, { Component } from 'react';
import './Todos.css';
import {addTodo, clearDone, loadTodo, updateTodo} from "./actions";
import {connect} from 'react-redux';

const mapDispatchToProps = function (dispatch) {
    return {
        addTodo : function (name) {
            dispatch(addTodo(name));
        },

        updateTodo : function (id, todoDone) {
            dispatch(updateTodo(id, todoDone));
        },

        clearDone : function () {
            dispatch(clearDone())
        },
        loadTodo : () => {
            dispatch(loadTodo())
        }
    }
};

const mapStateToProps = function (state) {
    return {
        todos : state.addTodoReducer,
        numberOfDone : state.addTodoReducer.filter( (todo) => todo.done).length
    }
};

class Todos extends Component {

    constructor(props) {
        super(props);
        this.newTodo = React.createRef()
    }

    onInputChange(e) {
        e.preventDefault();
        this.props.addTodo(this.newTodo.current.value)
    }
    onChange(e) {
        this.props.updateTodo(e.currentTarget.getAttribute('data-todo-id'), e.currentTarget.checked);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) => <li className={"todo-done-"+todo.done} key={index}>{todo.name}
                        <input type="checkbox" data-todo-id={index} onChange={this.onChange.bind(this)} checked={todo.done}/>
                    </li>)}
                </ul>
                {/*{JSON.stringify(store.getState())}*/}
                <form onSubmit={this.onInputChange.bind(this)} >
                    <input ref={this.newTodo}/>
                    <input type="submit"/>
                </form>
                <button onClick={this.props.clearDone.bind(this)}>
                    Clear Done
                </button>
                <button onClick={this.props.loadTodo.bind(this)} > LOAD </button>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos);

/*
BTVN combine Action, combine Reducer, ES7 decorator*/
