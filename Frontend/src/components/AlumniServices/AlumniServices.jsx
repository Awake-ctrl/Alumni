import React from 'react';
import './AlumniServices.css';

const AlumniServices = () => {
    const services = [
        {
            id: 1,
            iconClass: "fas fa-city",
            title: "Alumni in your city",
            description: "Find alumni living in your city & connect with them",
            buttonText: "Alumni In My City",
            buttonLink: "/alumni-city"
        },
        {
            id: 2,
            iconClass: "fas fa-users",
            title: "Your Batchmates",
            description: "View our exclusive batchmates directory to know about whereabouts of your batchmates",
            buttonText: "My Batchmates",
            buttonLink: "/batchmates"
        },
        {
            id: 3,
            iconClass: "fas fa-address-book",
            title: "Alumni Directory",
            description: "Explore complete alumni directory & connect with alumni with your interests & domain.",
            buttonText: "View Directory",
            buttonLink: "/AlumniDirectory"
        },
        {
            id: 4,
            iconClass: "fas fa-network-wired",
            title: "Alumni Clusters",
            description: "Join alumni groups based on your city, profession, or interests to stay connected, collaborate,",
            buttonText: "Alumni Clusters",
            buttonLink: "/alumni-clusters"
        }
    ];

    return (
        <div className="alumni-services-page">
            <div className="services-wrapper">
                <div className="services-header">
                    <h1>Connect with Alumni</h1>
                    <p>Explore various ways to engage with our alumni community</p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">
                                <i className={service.iconClass}></i>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a href={service.buttonLink} className="service-button">
                                {service.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlumniServices;
