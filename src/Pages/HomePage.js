import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from '../Utils/useAuth';

export default function HomePage() {
    const { signUserOut } = useAuth();
    return (
        <div>
            Home
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
            <div>
                <Button onClick={signUserOut}>
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
