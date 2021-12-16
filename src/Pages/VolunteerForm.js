import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";
import useVolunteerApplication from "../Utils/useVolunteerApplication";

const EMAIL ='email';
const SCHOOL ='school';
const LAST_NAME = 'last_name';
const GRAD = 'graduation_year';
const FIRST_NAME = 'first_name';
const LINKED_IN = 'linked_in';


export default function VolunteerForm() {
    const navigate = useNavigate();
    const { createVolunteer, isSuccess } = useVolunteerApplication();
    const { 
        register,
        control,
        handleSubmit,
        formState: { errors } 
    } = useForm();

    const {
        isDirty,
        isSubmitting,
        isSubmitSuccessful,
    } = useFormState({ control });

    const onSubmit = data => {
        console.log(data);
        createVolunteer(data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label className="form-label" htmlFor={FIRST_NAME}>First Name</label>
            <input
                id={FIRST_NAME}
                type="text"
                className="form-control"
                placeholder="First Name"
                {...register(FIRST_NAME, { required: "This is a required field" })}
            />
            {errors.first_name && <span>This field is required</span>}
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor={LAST_NAME}>Last Name</label>
            <input
                id={LAST_NAME}
                type="text"
                className="form-control"
                placeholder="First Name"
                {...register(LAST_NAME, { required: "This is a required field" })}
            />
            {errors.last_name && <span>This field is required</span>}
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor={EMAIL}>Email</label>
            <input
                id={EMAIL}
                type="text"
                className="form-control"
                placeholder="Email"
                {...register(EMAIL, { required: "This is a required field" })}
            />
            {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor={SCHOOL}>School Name</label>
            <input
                id={SCHOOL}
                type="text"
                className="form-control"
                {...register(SCHOOL, { required: "This is a required field" })}
            />
            {errors.school && <span>This field is required</span>}
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor={GRAD}>Graduation</label>
            <input
                id={GRAD}
                type="text"
                className="form-control"
                placeholder="Graduation Year"
                {...register(GRAD, { required: "This is a required field" })}
            />
            {errors.graduation_year && <span>This field is required</span>}
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor={LINKED_IN}>LinkedIn</label>
            <input
                id={LINKED_IN}
                type="text"
                className="form-control"
                placeholder="Graduation Year"
                {...register(LINKED_IN, { required: "This is a required field" })}
            />
            {errors.linked_in && <span>This field is required</span>}
        </div>
        
        <div className="text-right">
            <Button
                size="sm"
                disabled={isSubmitting || !isDirty}
                variant="primary"
                type="submit"
            >
                {isSubmitting ? "logging in..." : "login"}
            </Button>
        </div>
    </form>
  );
}
