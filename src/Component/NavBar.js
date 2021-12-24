import React from 'react';
import useAuth from '../Utils/useAuth';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavBar() {
    const { signUserOut, user, isAdmin } = useAuth();
    console.log({user})
    console.log({isAdmin})

    const loggedIn = () =>{
        return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex ml-auto">
                <ul class="navbar-nav">
                    <li class="nav-item mr-2">
                        <Link to="/volunteerForm">Volunteer Form</Link>
                    </li>
                    <li class="nav-item mr-2">
                        <Link to="/volunteerList">Volunteer List</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Button onClick={signUserOut}>
                            Sign Out
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>)
    }

    const notLoggedIn = () =>{
        return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex ml-auto">
                <ul class="navbar-nav">
                    <li class="nav-item mr-2">
                        <Link to="/volunteerForm">Volunteer Form</Link>
                    </li>
                    <li class="nav-item mr-2">
                        <Link to="/volunteerList">Volunteer List</Link>
                    </li>
                    <li class="nav-item mr-2">
                    <Link to="/login">Login</Link>
                </li>
                <li class="nav-item mr-2">
                    <Link to="/signup">Sign Up</Link>
                </li>
                </ul>
            </div>
        </nav>)
    }
    return (
        <>
            {user ? loggedIn() : notLoggedIn()} 
        </>
    )
}
