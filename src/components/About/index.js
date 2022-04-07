import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello.  My name is Mary Braunger and I'm an all-around aspiring Web Developer with working knowledge in both client-side and server-side techniques.  
                I enjoy fixing code and debugging challenges, and especially working in a 
                team setting. Browse my latest projects or reach out to me by using my 
                contact info below.
        </p>
      </div>
    </section>
  );
}

export default About;
