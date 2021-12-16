import useAuth from '../Utils/useAuth';
import { Link } from "react-router-dom";
import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";

const EMAIL = 'email';
const PASSWORD = 'password';

export default function Login() {
    const navigate = useNavigate();
    const { login, err } = useAuth();
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
        login(data.email, data.password);
        if ( !err ) navigate("/");
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <i className="fas fa-exclamation text-warning"/>
                &nbsp;
                Don't Have An Account? <Link to="/signup">Sign Up</Link>
            </p>
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
