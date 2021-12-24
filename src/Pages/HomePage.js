import React from "react";
import useAuth from '../Utils/useAuth';

export default function HomePage() {
    const { signUserOut } = useAuth();
    return (
        <div>
           home page
        </div>
    )
}
