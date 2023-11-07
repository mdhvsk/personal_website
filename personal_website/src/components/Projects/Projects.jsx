import React from 'react'
import "./Projects.css"
import Image from 'next/image'


const Projects = () => {
    return (
        <div className="projects-section">
            <div className="projects-intro">
                <h1 className='projects-aboutHeader'>Projects</h1>
                <p>---</p>
                <p>Here you will find some of the projects I have created on my own time </p>
            </div>
            <div className='projects-list'>
                <div className='project-row'>
                    <Image
                        src="/HealthCheck.png"
                        width={700}
                        height={200}
                    />
                    <div className='project-desc'>
                        <h2 className='project-row-header'>HealthCheck</h2>
                        <h2 className='project-row-text'>HealthCheck is a medical tracking platform that allows patients to keep track of their vitals, apppintments, and medications</h2>
                        <a href='#' className='project-button'>Project Link</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects