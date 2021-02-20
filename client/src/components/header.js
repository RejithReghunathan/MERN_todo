import React from 'react'

export default function header() {
    return (
        <div className="card bg-info text-center text-white rounded-0">
            <h1 className='display-4'>
                <i className="fas fa-clipboard-list mr-3">
                    <span className="text-dark mr-3">MY</span>Todo List
                </i>
            </h1>
        </div>
    )
}
