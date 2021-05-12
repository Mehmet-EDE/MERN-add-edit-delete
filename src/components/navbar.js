import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <Link to='/' className="navbar-brand">Home Page</Link>
                <div className="collpase navbar-collpase" >
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item" >
                            <Link to='/' className="nav-link">Employee List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/create' className="nav-link">Add New Employee</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}