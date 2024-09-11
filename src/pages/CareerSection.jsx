import React, { useState } from 'react';
import './CareerSection.css';

function CareerSection() {
    const jobs = [
        {
            id: 1,
            title: 'Software Engineer',
            location: 'Mumbai, India',
            description: 'Develop and maintain web applications with a focus on front-end technologies.',
        },
        {
            id: 2,
            title: 'Project Manager',
            location: 'Kolkata, India',
            description: 'Oversee project planning, execution, and delivery while managing project teams.',
        },
        {
            id: 3,
            title: 'Mechanical Engineer',
            location: 'Jamshedpur, India',
            description: 'Design, analyze, and improve mechanical systems in a manufacturing environment.',
        }
    ];

    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null,
    });

    const handleApply = (job) => {
        setSelectedJob(job);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Application submitted for ${selectedJob.title}!`);
        setSelectedJob(null);
        setFormData({
            name: '',
            email: '',
            resume: null,
        });
    };

    return (
        <div className="career-section">
            <h2>Current Job Openings</h2>
            <div className="job-list">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <div className="job-card-content">
                            <h3>{job.title}</h3>
                            <p>{job.location}</p>
                            <p>{job.description}</p>
                            <button onClick={() => handleApply(job)} className="apply-button">Apply</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedJob && (
                <div className="application-form animate">
                    <h2>Apply for {selectedJob.title}</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Resume:
                            <input
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit" className="submit-button">Submit Application</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CareerSection;
