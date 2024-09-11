import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircle, FaIndustry, FaSave, FaTools, FaTruck } from 'react-icons/fa';
import './ServiceHome.css';

const ServiceHome = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about'); // Adjust the route as needed
    };

    const services = [
        {
            icon: <FaIndustry color="#000000" />, // Black
            title: 'Project Management :',
            description: 'Expert management for seamless project execution and operational success.',
            color: '#ffbe0b',
            className: 'service-card-1'
        },
        {
            icon: <FaTools color="#000000" />, // White
            title: 'Manufacturing :',
            description: 'Advanced manufacturing services with top-tier quality and efficiency.',
            color: '#7c23kc',
            className: 'service-card-2'
        },
        {
            icon: <FaTruck color="#000000" />, // Pink
            title: 'Design :',
            description: 'Innovative design solutions that blend aesthetics with functionality.',
            color: '#ffbe0b',
            className: 'service-card-3'
        },
        {
            icon: <FaSave color="#000000" />, // Black
            title: 'Retrofit and Renovation :',
            description: 'Enhancing structures with modern, efficient renovation solutions.',
            color: '#7c23kc',
            className: 'service-card-4'
        },
        {
            icon: <FaCircle color="#000000" />, // White
            title: 'Installation :',
            description: 'Precise, professional installation services with attention to detail.',
            color: '#ffbe0b',
            className: 'service-card-5'
        },
    ];

    return (
        <div className="services-section">
            <h2 className="serviceh2 " > Our Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className={`service-card ${service.className}`} style={{ backgroundColor: service.color }}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span onClick={handleButtonClick}>Read More</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceHome;