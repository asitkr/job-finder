import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const JobList = () => {

    const jobs = useSelector(state => state.jobs);

    return (
        <div className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll={100} id="sectionsNav">
            <div className='joblist__container'>
                <div className='jobList__heading'>
                    <h2>Lob List</h2>
                </div>

                <ul>
                    {
                        jobs && jobs.map((item) => (
                            <li key={item.IdNumber} className='joblist__single__section'>
                                <div>
                                    <h3>Job Title: {item.title}</h3>
                                    <p>Source: {item.source}</p>
                                    <Link to={`/job-details/${item.IdNumber}`}>
                                        <button className='jobDeatils__btn'>Job Details</button>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default JobList;