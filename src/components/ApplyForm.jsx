import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ApplyForm = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coverLetter: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(formData) {
            dispatch(setFormData(formData));
            navigate('/success');
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>ApplyForm</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
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
                            <label>Cover Letter</label>
                            <input
                                type="text"
                                name='coverLetter'
                                value={formData.coverLetter}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Resume</label>
                            <input
                                type="file"
                                name='coverLetter'
                                accept=".pdf,.doc,.docx"
                                value={formData.coverLetter}
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyForm;