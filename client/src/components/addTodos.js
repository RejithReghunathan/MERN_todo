
import React, { Component } from 'react'
import { Consumer } from '../context'
import Mytodos from './addTodo'


export default class addTodos extends Component {
    render() {
        return (
            <Consumer>{
                value=>{
                 const {todo} =value
                 return todo.map(t=><Mytodos todos={t} key={t.id}></Mytodos>)   
                }
                }
            </Consumer>
        )
    }
}
