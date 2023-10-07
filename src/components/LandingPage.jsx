import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setJobs, setLanguage } from '../redux/actions';
import JobList from './JobList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [programming, setProgramming] = useState('');
    const jobs = useSelector(state => state.jobs);
    const language = useSelector(state => state.language);

    const handleChange = (e) => {
        setProgramming(e.target.value);
    };

    useEffect(() => {
        if (programming) {
            const firstLetter = programming.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = programming.slice(1);
            const capitalizedWord = firstLetterCap + remainingLetters;

            dispatch(setLanguage(capitalizedWord));
            localStorage.setItem('language', capitalizedWord);
        }
    }, [])

    const handleSubmit = async () => {

        // console.log(programming.charAt(0));
        const firstLetter = programming.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = programming.slice(1);
            const capitalizedWord = firstLetterCap + remainingLetters;

        const options = {
            method: 'GET',
            url: `https://usa-jobs-for-it.p.rapidapi.com/${capitalizedWord}`,
            headers: {
                'X-RapidAPI-Key': '2b328e3b6bmsh08df084bc6a3c2cp17f96djsnbc3b5b822f3c',
                'X-RapidAPI-Host': 'usa-jobs-for-it.p.rapidapi.com'
            }
        };

        try {
            const res = await axios.request(options);
            // console.log(res?.data);
            // setJobs(res?.data)
            dispatch(setJobs(res?.data))
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('language');

        navigate('/')
    }

    return (
        <div className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
                <div className='heading__wrapper'>
                    <h1 className='job__heading'>Jobs Portal</h1>
                    <p className='logout' onClick={handleLogout}>Logout</p>
                </div>
            <div className="container__landing">
                <div  className='job__find__container'>
                    <div className='form-group inner__form'>
                        <input
                            type="text"
                            value={programming}
                            onChange={handleChange}
                            placeholder="Enter job title based on programming language"
                            required
                        />
                        <button onClick={handleSubmit} type="submit">Search</button>
                    </div>
                </div>
            </div>

            {
                jobs && <JobList />
            }
        </div>
    )
}

export default LandingPage