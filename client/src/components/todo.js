import React, { Component } from 'react'

export default class todo extends Component {
    render() {
        return (
           <form >
               <input type="text" className="form-control rounded-0" placeholder="Write your todo"></input>
               <button className="form-control rounded-0 btn btn-secondary " type="submit">Add Todo</button>
           </form>
        )
    }
}
