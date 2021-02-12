import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavWrapper } from '../Button';

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm
            navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/users'>
                            Users
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/test'>
                            Test
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/products'>
                            Products
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/alarmsetting'>
                            Set Alarm
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/statistik'>
                            Statistics
                        </Link>
                    </li>
                </ul>
            </NavWrapper>
        )
    }
};