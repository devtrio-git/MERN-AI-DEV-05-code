import React, { useState } from 'react'
import "./authentication.css"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      
    });
    const [errors, setErrors] = useState({

    });
    const navigate = useNavigate();

    const validate = () => {
        let newError = {};

       
        if (!formData?.email?.trim()) {
            newError.email = "Please Enter Email Address"
        }
        if (!formData?.password) {
            newError.password = "Password is required"
        } else if (formData?.password?.length < 6) {
            newError.password = "Minimum 6 characters required"
        }
       


        setErrors(newError)
        return Object.keys(newError)?.length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData)
            navigate("/home");

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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               
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

                <div>
                    <Link to={"/signup"}>
                        create new account
                    </Link>
                </div>
               
               
               

                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
