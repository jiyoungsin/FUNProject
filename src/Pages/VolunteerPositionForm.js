import React from 'react'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";

const CITY = 'city';
const COMPANY = 'company';
const PROVINCE = 'province';
const JOB_TITLE = 'job_title';
const STREET_ADDRESS = 'address';
const ROLE_IN_HIRING = 'role_in_hiring';
const NUM_VOLUNTEERS = 'number_of_volunteers';

export default function VolunteerPositionForm() {
    const navigate = useNavigate();
    const { 
        reset,
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

    const onSubmit = async data => {
        console.log(data);
        // await createVolunteer(data);
        // reset();
        // if(isSuccess) navigate("/");
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label className="form-label" htmlFor={COMPANY}>Your Company Name</label>
            <input
                id={COMPANY}
                type="text"
                className="form-control"
                placeholder="Company"
                {...register(COMPANY, { required: "This is a required field" })}
            />
            {errors.COMPANY && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={ROLE_IN_HIRING}>Your Role in the hiring process</label>
            <input
                id={ROLE_IN_HIRING}
                type="text"
                className="form-control"
                placeholder="Ex. Human Resources"
                {...register(ROLE_IN_HIRING, { required: "This is a required field" })}
            />
            {errors.ROLE_IN_HIRING && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={JOB_TITLE}>Position Title</label>
            <input
                id={JOB_TITLE}
                type="text"
                className="form-control"
                placeholder="Position Title"
                {...register(JOB_TITLE, { required: "This is a required field" })}
            />
            {errors.JOB_TITLE && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={STREET_ADDRESS}>Enter a street address</label>
            <input
                id={STREET_ADDRESS}
                type="text"
                className="form-control"
                {...register(STREET_ADDRESS, { required: "This is a required field" })}
            />
            {errors.STREET_ADDRESS && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={CITY}>City</label>
            <input
                id={CITY}
                type="text"
                className="form-control"
                {...register(CITY, { required: "This is a required field" })}
            />
            {errors.CITY && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={PROVINCE}>Province</label>
            <input
                id={PROVINCE}
                type="text"
                className="form-control"
                {...register(PROVINCE, { required: "This is a required field" })}
            />
            {errors.PROVINCE && <span>This field is required</span>}
        </div>

        <div className="form-group">
            <label className="form-label" htmlFor={NUM_VOLUNTEERS}>How many volunteers?</label>
            <input
                id={NUM_VOLUNTEERS}
                type="number"
                className="form-control"
                {...register(NUM_VOLUNTEERS, { required: "This is a required field" })}
            />
            {errors.NUM_VOLUNTEERS && <span>This field is required</span>}
        </div>

        <div className="text-right">
            <Button
                size="sm"
                disabled={isSubmitting || !isDirty}
                variant="primary"
                type="submit"
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </div>
    </form>
  );
}
