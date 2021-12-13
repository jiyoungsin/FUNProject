import React from 'react'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            Home
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}