import React from 'react';

import Hero from '../components/Hero';

import ReactTypingEffect from 'react-typing-effect';


function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <ReactTypingEffect className="typingeffect" text={['I\'m a Full Stack Web Developer']} speed={100} eraseDelay={700} />

        </div>
    );
}

export default HomePage;