import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions';

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const registeredUserData = JSON.parse(localStorage.getItem('user'));
        if (registeredUserData && registeredUserData.email === formData.email && registeredUserData.password === formData.password) {
            sessionStorage.setItem('isLoggedIn', 'true');
            // alert('Login successful!');

            // Redirect to dashboard or update Redux store with user data
            navigate('/landing');
        } 
        else {
            alert('Invalid email or password');
        }
    }

    return (
        <div className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                            <button type="submit">LogIn</button>
                        </form>

                        <div className='additional__link'>
                            <p>Not a member? &nbsp;
                                <Link className='links__' to={'/register'}>
                                    Register Now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
