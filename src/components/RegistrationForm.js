import React from "react";
import Heading from "./Heading";
import classNames from "classnames";

import { useForm } from 'react-hook-form';

const RegistrationForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched",
    });

    console.log(errors);

    const submitResult = data => console.log(data);

    return (
        <div className="container">
            <div className="row p-5 border  ">
                <div className="col-12">
                    <Heading
                        heading="Bank Registration Form"
                        class_name="text-center" />
                    <hr />
                    <form onSubmit={handleSubmit(submitResult)}>
                        <div className="row justify-content-center mt-3 mb-3">
                            <div className="col-12">
                                <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'} {...register('account', { required: true })} name="account">
                                    <option disabled>Account Type</option>
                                    <option value="savings">Savings Account</option>
                                    <option value="current">Current Account</option>
                                    <option value="salary">Salary Account</option>
                                    <option value="FD">Fixed Deposit Account</option>
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={classNames("form-control", { "is-invalid": errors.firstname, })} id="floatingInput"
                                        placeholder="First Name"
                                        name="firstName"
                                        {...register('firstname',
                                            {
                                                required: "This field is required",
                                                minLength: {
                                                    value: 4,
                                                    message: "Atleast 4 characters are required"
                                                },
                                            })} />
                                    <label htmlFor="floatingInput">First Name</label>
                                    {errors.firstname && (
                                        <div className="invalid-feedback">{errors.firstname.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={classNames("form-control")}
                                        id="floatingInput"
                                        placeholder="Middle Name"
                                        name="middlename"
                                        {...register('middlename')} />
                                    <label htmlFor="floatingInput">Middle Name</label>
                                    {errors.middlename && (
                                        <div className="invalid-feedback">{errors.middlename.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={classNames("form-control", { "is-invalid": errors.lastname })}
                                        id="floatingInput"
                                        placeholder="Last Name"
                                        name="lastName"
                                        {...register('lastname', {
                                            required: "This field is required",
                                            minLength: {
                                                value: 4,
                                                message: "Atleast 4 characters are required"
                                            }
                                        })} />
                                    <label htmlFor="floatingInput">Last Name</label>
                                    {errors.lastname && (
                                        <div className="invalid-feedback">{errors.lastname.message}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-evenly mb-3">
                            <div className="col-md-4 col-sm-12 genderFields">
                                <h6>Gender</h6>
                                <span className="form-check">
                                    <input
                                        className={classNames("form-check-input",{"is-invalid": errors.gender})}
                                        type="radio" id="flexRadioDefault1"
                                        name="gender"
                                        {...register('gender', {
                                            required : "This field is required",
                                            }
                                        )}
                                    />
                                    <label className="form-check-label"
                                        htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                    
                                </span>
                                <span className="form-check">
                                    <input
                                        className={classNames("form-check-input",{"is-invalid": errors.gender})}
                                        type="radio" id="flexRadioDefault1"
                                        name="gender"  
                                        {...register('gender', {
                                            required : "This field is required",
                                            }
                                        )} />
                                    <label className="form-check-label"
                                        htmlFor="flexRadioDefault1">
                                        Female
                                    </label>
                                </span>
                                <span className="form-check">
                                    <input className={classNames("form-check-input",{"is-invalid": errors.gender})} 
                                    type="radio" id="flexRadioDefault1" 
                                    name="gender"  
                                    {...register('gender', {
                                        required : "This field is required",
                                        }
                                    )}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Others
                                    </label>
                                </span>
                                {errors.gender && (
                                        <div className="invalid-feedback">{errors.gender.message}</div>
                                    )}
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <label htmlFor="birthday">Date of Birth: </label>
                                <input 
                                    type="date" 
                                    className={classNames({"is-invalid": errors.dob})}
                                    id="birthday" 
                                    name="birthday"  
                                    {...register('dob', 
                                        { required: "This field is required"})} />

                                    {errors.dob && (
                                        <div className="invalid-feedback">{errors.dob.message}</div>
                                    )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-8">
                                <div className="form-floating mb-3">
                                    <input type="text" className={classNames("form-control", { "is-invalid": errors.email })} id="floatingInput" placeholder="Email"
                                        name="email"  {...register('email', {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                                message: "Please provide a valid email."
                                            }
                                        })} />
                                    <label htmlFor="floatingInput">Email</label>
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-8">
                                <div className="form-floating mb-3">
                                    <input type="text" className={classNames("form-control", { "is-invalid": errors.mobile })} id="floatingInput" placeholder="Mobile no"
                                        name="mobile" {...register('mobile', {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^([+]\d{2})?\d{10}$/,
                                                message: "Pease provide a valid mobile number."
                                            }
                                        })} />
                                    <label htmlFor="floatingInput">Mobile</label>
                                    {errors.mobile && (
                                        <div className="invalid-feedback">{errors.mobile.message}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-success btn-sm">Submit</button>
                                <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default RegistrationForm;