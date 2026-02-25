import React from 'react';
import profilePic from '../assets/Profile.jpg';

function About() {
    return (
        <section id="about" style={{padding: '50px', textAlign: 'center'}}>
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile" style={{width: '150px', borderRadius: '50%'}}/>
            <p>sorry boss wala ing q kasabot..pero kong maigo k kinomo nko sobra p s libat imong mata..taronga ing ng txt nimo boss..mura kag sikinsa b..</p>
        </section>
    )
}


export default About; //This allows you to use it in another file