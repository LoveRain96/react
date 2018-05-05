
import React, { Component } from 'react';
//import logo from './logo.svg';
import './Todos.css';
import store from "./store";
import {addTodo, clearDone, updateTodo} from "./actions";

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: store.getState()
        };
        this.newTodo = React.createRef()
    }

    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                todos: store.getState()
            });
        })
    }
    countDone () {
        return this.state.todos.filter( (todo) => todo.done).length
    }
    onClearDoneClick () {
        store.dispatch(clearDone());
    }
    onInputChange(e) {
        e.preventDefault();
        store.dispatch(addTodo(this.newTodo.current.value));
    }
    onChange(e) {
        store.dispatch(updateTodo(e.currentTarget.getAttribute('todoid'), e.currentTarget.checked));
        console.log(e.currentTarget.getAttribute('todoid'));

    }
    render() {
        return (
            <div>

                <h1>{this.countDone()}/{this.state.todos.length}</h1>
                <ul>
                    {this.state.todos.map((todo, index) => <li className={"todo-done-"+todo.done} key={index}>{todo.name}
                        <input type="checkbox" todoid={index} onChange={this.onChange.bind(this)} checked={todo.done}/>
                    </li>)}
                </ul>
                {/*{JSON.stringify(store.getState())}*/}
                <form onSubmit={this.onInputChange.bind(this)} >
                    <input ref={this.newTodo}/>
                    <input type="submit"/>
                </form>
                <button onClick={this.onClearDoneClick.bind(this)}>
                    Clear Done
                </button>
            </div>
        );
    }
}

export default Todos;
