import Button from "react-bootstrap/Button";
import React, {useState, useContext} from 'react';
import { userSession } from '../userContextFile';
import { useNavigate } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";

const USER_NAME = 'username';
const PASSWORD = 'password';

export default function Login() {
    const navigate = useNavigate();
    const {login} = useContext(userSession);
    const { 
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors } 
    } = useForm();

    const {
        isDirty,
        isSubmitting,
        isSubmitSuccessful,
    } = useFormState({ control });

    const onSubmit = data => {
        console.log(data);
    };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label className="form-label" htmlFor={USER_NAME}>Username</label>
            <input
                id={USER_NAME}
                type="text"
                className="form-control"
                placeholder="Username"
                {...register(USER_NAME, { required: "This is a required field" })}
            />
            {errors.username && <span>This field is required</span>}
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
            <p className= {`d-none ${!isDirty ? "true" : "false"}`}>
                <i className="fas fa-exclamation text-warning"/>
                &nbsp;
                Unsaved changes
            </p>
            <p className={`d-none ${!(isSubmitSuccessful && !isDirty) ? "true" : "false"}`}>
                <i className="fas fa-check text-success"/>
                &nbsp;
                Saved
            </p>
        </div>
        <div className="text-right">
            <Button
                size="sm"
                disabled={isSubmitting || !isDirty}
                variant="primary"
                type="submit"
            >
                {isSubmitting ? "Saving..." : "Save"}
            </Button>
        </div>
    </form>
  );
}
