import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function useVolunteerApplication(formData) {

    const payload = { ...formData };
    const [ isSuccess , setSuccess ] = useState(false);

    const createVolunteer = async() => {
        await axios.post('http://localhost:5000/volunteer/volunteerPOST', {
            data: payload,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setSuccess(true);
            console.log(res);
            console.log("Successfully created a Volunteer Post");
        }).catch((err) => {
            setSuccess(false);
            console.error(err);
            alert('ERROR: Sending Application Data to backend');
        })
    }

    return { createVolunteer, isSuccess};
}
