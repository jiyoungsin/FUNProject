import React from 'react';
import useAuth from '../Utils/useAuth';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";

const FIRST_NAME = 'first_name';
const LAST_NAME = 'last_name';
const EMAIL ='email';
const PASSWORD = 'password';

export default function SignUp() {
    const navigate = useNavigate();
    const { signUpWithEmailPassword, err } = useAuth();
    const { 
        register,
        control,
        handleSubmit,
        formState: { errors } 
    } = useForm();

    const {
        isDirty,
        isSubmitting,
    } = useFormState({ control });

    const onSubmit = data => {
        signUpWithEmailPassword(data);
        if ( !err ) navigate("/");
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
                    placeholder="Last Name"
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
                <label className="form-label" htmlFor={PASSWORD}>Password</label>
                <input
                    id={PASSWORD}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...register(PASSWORD, { required: "This is a required field" })}
                />
                {errors.password && <span>This field is required</span>}
            </div>
            <div className="flex-grow-1">
                <p>
                    Already Have An Account? <Link to="/login">Login</Link>
                </p>
                <p>
                    {err}
                </p>
            </div>
            <div className="text-right">
                <Button
                    size="sm"
                    disabled={isSubmitting || !isDirty}
                    variant="primary"
                    type="submit"
                >
                    {isSubmitting ? "Creating..." : "Create"}
                </Button>
            </div>
        </form>
    )
}
