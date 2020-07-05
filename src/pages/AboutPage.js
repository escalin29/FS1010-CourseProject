import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hi! I'm Escalin, a budding Full Stack Web Developer with experience in HTML, CSS3, Core Java, JavaScript, Express JS, Node JS, jQuery, Bootstrap and React.</p>

                <p>I have three years of experience in the IT industry in Remote Technical Support and WMS Testing (Manhattan WMS and Oracle Logfire WMS).</p>

                <p>I'm passionate about learning new things and am currently gaining experience with JavaScript, React, Express JS, and Node JS.</p>

            </Content>
        </div>
    );
}

export default AboutPage;