import React, { useState } from 'react'
import "./authentication.css"

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
        country: ""
    });
    const [errors, setErrors] = useState({

    });
    const validate = () => {
        let newError = {};

        if (!formData?.fullName?.trim()) {
            newError.fullName = "Please Enter a Full Name"
        }
        if (!formData?.email?.trim()) {
            newError.email = "Please Enter Email Address"
        }
        if (!formData?.password) {
            newError.password = "Password is required"
        } else if (formData?.password?.length < 6) {
            newError.password = "Minimum 6 characters required"
        }
        if (!formData?.gender) {
            newError.gender = "Select gender"
        }
        if (formData?.skills?.length === 0) {
            newError.skills = "Select at least one skill"
        }
        if (!formData?.country) {
            newError.country = "Select country"
        }


        setErrors(newError)
        return Object.keys(newError)?.length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData)
        } else {
            console.log("error")
        }
    }

    const handleChange = (e) => {
        
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => (
                {
                    ...prev,
                    skills: checked ? [...prev.skills, value] :
                        prev.skills.filter((item) => item != value)

                }
            ))
            setErrors({ ...errors, skills: "" })
        } else {
            setFormData({ ...formData, [name]: value })
            setErrors({ ...errors, [name]: "" })
        }



    }
    return (
        <div className='form-container'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className='form-group'>
                    <input
                        type='text'
                        name="fullName"
                        placeholder='Enter Full Name'
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors?.fullName && <p className='error'>{errors?.fullName}</p>}
                </div>
                {/* Email */}
                <div className='form-group'>
                    <input
                        type='email'
                        name="email"
                        placeholder='Enter Email Address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors?.email && <p className='error'>{errors?.email}</p>}
                </div>
                {/* Password */}
                <div className='form-group'>
                    <input
                        type='password'
                        name="password"
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors?.password && <p className='error'>{errors?.password}</p>}
                </div>
                {/* Gender */}
                <div className='form-group'>
                    <label>Gender</label>
                    <div className='inline'>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                value='male'
                                checked={formData.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                value='female'
                                checked={formData.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    {errors?.gender && <p className='error'>{errors?.gender}</p>}
                </div>
                {/* Skills */}
                <div className='form-group'>
                    <label>Skills</label>
                    <div className='inline'>
                        <label>
                            <input
                                type='checkbox'
                                value="React"
                                checked={formData.skills.includes("React")}
                                onChange={handleChange}
                            />
                            React
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                value="Node.js"
                                checked={formData.skills.includes("Node.js")}
                                onChange={handleChange}
                            />
                            Node.js
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                value="MongoDB"
                                checked={formData.skills.includes("MongoDB")}
                                onChange={handleChange}
                            />
                            MongoDB
                        </label>
                    </div>
                    {errors?.skills && <p className='error'>{errors?.skills}</p>}
                </div>
                {/* Country */}
                <div className='form-group'>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="PK">Pakistan</option>
                        <option value="US">USA</option>
                        <option value="UK">UK</option>
                        <option value="IND">India</option>
                    </select>
                    {errors?.country && <p className='error'>{errors?.country}</p>}
                </div>

                <button className='btn btn-primary' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
