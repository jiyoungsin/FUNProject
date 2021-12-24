import axios from 'axios';
import { useState } from 'react';


export default function useVolunteerApplication() {
    const [ isSuccess , setSuccess ] = useState(false);
    const [ volunteerList , setVolunteerList] = useState([]);

    const createVolunteer = async (formData) => {
        const payload = { ...formData };
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

    const listVolunteer = async () => {
        await axios.get(`http://localhost:5000/volunteer/volunteerGET`)
        .then((res) => {
            setVolunteerList(res.data);
            console.log("Successfully retrieved list of Volunteers");
        })
        .catch((err) => {
            console.log(err);
            alert('Error while Fetching Volunteer List Requests');
        });
    }

    return { listVolunteer, createVolunteer, isSuccess, volunteerList};
}
