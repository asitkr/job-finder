import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/landing');
        }, 2000)
    }, [])

    return (
        <div>
            <h2>Application Submitted Successfully</h2>
            <h3>Preview:</h3>
            <p>Name: {'Name'}</p>
            <p>Email: {'Email'}</p>
            <p>Cover Letter: {'CoverLetter'}</p>
        </div>
    )
}

export default SuccessPage;