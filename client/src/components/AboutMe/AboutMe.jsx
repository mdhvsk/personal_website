import React from 'react'

import "./AboutMe.css"
const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className='aboutMe-intro'>
                <h1 className='aboutMe-aboutHeader'>About Me</h1>
                <p>---</p>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='aboutMe-content'>
                <div className='aboutMe-section'>
                    <h1 className='aboutMe-desc-header'>Get to know me!</h1>


                    <p>Hi I’m Madhav and I’m a <strong>full-stack software engineer</strong> who has passion for learning and solving challenging engineering problems! I’m actively seeking opportunities in software engineering in both <strong>frontend</strong> and <strong>backend</strong> development along with <strong>DevOps</strong> and <strong>QA</strong> positions. <br /> <br />

                        I have one year of experience as a <strong>software engineer</strong> along with a Bachelor's degree in <strong>biomedical engineering</strong>. Check out some of my work in the project
                        I love meeting with new people, feel free to connect or you can reach me at madhavasok@gmail.com!</p>
                    <button>Contact</button>
                </div>
                <div className='aboutMe-section'>
                    <h1 className='aboutMe-desc-header'>My Skills</h1>
                    <h3 className='aboutMe-desc-skill-header'>Languages</h3>
                    <div className='aboutMe-desc-skill-list'>
                        <div className='skill'>Javascript</div>
                        <div className='skill'>Java</div>
                        <div className='skill'>Python</div>
                        <div className='skill'>HTML</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>Bash</div>
                    </div>
                    <h3 className='aboutMe-desc-skill-header'>Frameworks</h3>
                    <div className='aboutMe-desc-skill-list'>
                        <div className='skill'>React</div>
                        <div className='skill'>Spring</div>
                        <div className='skill'>Flask</div>
                        <div className='skill'>Node.js</div>
                        <div className='skill'>Express</div>
                        <div className='skill'>Git</div>

                    </div>
                    <h3 className='aboutMe-desc-skill-header'>Automation and Deployment</h3>
                    <div className='aboutMe-desc-skill-list'>
                        <div className='skill'>AWS</div>
                        <div className='skill'>Docker</div>
                        <div className='skill'>Kubernetes</div>
                        <div className='skill'>Helm</div>
                        <div className='skill'>Jenkins</div>
                        <div className='skill'>Jest</div>
                        <div className='skill'>Junit</div>

                    </div>
                    <h3 className='aboutMe-desc-skill-header'>Databases</h3>
                    <div className='aboutMe-desc-skill-list'>
                        <div className='skill'>MySQL</div>
                        <div className='skill'>MongoDB</div>
                        <div className='skill'>PostgreSQL</div>
                    </div>


                </div>

            </div>
            <div className='aboutMe-certs'>
                <h2>Certifications</h2>
                <div className='aboutMe-certs-list'>
                    <img src="/ckad-logo.png" height={200} />
                </div>
            </div>

        </div>
    )
}

export default AboutMe