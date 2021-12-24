import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import useVolunteerApplication from "../Utils/useVolunteerApplication";

export default function VolunteerList() {
    const { listVolunteer, volunteerList } = useVolunteerApplication();
    const [isLoading, setLoading ] = useState(false);
    const [list,setList] = useState([]);
    const navigate = useNavigate();

    // fetch volunteer list
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                await listVolunteer();
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // print whenever list volunteer changes
    useEffect(() => {
        setList(volunteerList);
    }, [volunteerList]);

    console.log({list})

    const backToHome = () =>{
        navigate("/");
    }
    const temp = false;

    return (
        <>
            <div className="row mb-2 col-12">
                <p className="d-inline-block h2 text-truncate">
                    <a href="#" onClick={backToHome}>
                        <i className="fas fa-chevron-left mr-2"/>
                    </a>
                    Volunteers List
                </p>
            </div>
            <div className={classnames({ "d-none": !isLoading})}>
                <div className="d-flex justify-content-center align-items-center" style={{height: "50vh"}}>Loading Volunteers...</div>
            </div>
            <table className={classnames("table", { "d-none": isLoading})}>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>School/Graduation</th>
                    <th>LinkedIn</th>
                </tr>
                {list.map((volunteer) => (
                    <tr>
                        <td>{volunteer.FirstName} {volunteer.LastName}</td>
                        <td>{volunteer.Email}</td>
                        <td>{volunteer.Age}</td>
                        <td>{volunteer.SchoolName}</td>
                        <td>{volunteer.LinkedIn}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
