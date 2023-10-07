import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const JobDetailsPage = () => {

    let { id } = useParams();
    const jobs = useSelector(state => state.jobs);
    const [singleJob, setSingleJob] = useState();

    useEffect(() => {
        if(id) {
            const filteredJob = jobs.filter(job => job.id === id);
            console.log(filteredJob);
            setSingleJob(filteredJob);
        }
    }, [jobs, id]);

    return (
        <div>
            <h1 className='job__heading'>Jobs Portal</h1>
            {
                singleJob && singleJob.map(item => (
                    <div>
                        <div className='job__title'>
                            <h2>{item.title}</h2>
                        </div>
                        <div className='job__Description'>
                            <h2>Job Title: {item.title}</h2>
                            <p>Source: {item.source}</p>
                            <Link to={`/apply/${id}`}>
                                <button className='jobDeatils__btn'>
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default JobDetailsPage;