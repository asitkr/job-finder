import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupAndStoreToLocalStorage } from '../redux/actions';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ 
        username: '',
        email: '', 
        password: '' 
    });
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // console.log(formData);

        dispatch(signupAndStoreToLocalStorage(formData));

        // checking if successfully saved data into localStorage then redirect to login page
        if(localStorage.getItem('user')) {
            navigate('/')
        }
    }

    return (
        <div className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Register</h2>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    type="text"
                                    name='username'
                                    value={formData.username} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <button type="submit">Register</button>
                        </form>

                        <div className='additional__link'>
                            <p>Already member? &nbsp;
                                <Link className='links__' to={'/'}>
                                    LogIn
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;