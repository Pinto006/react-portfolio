export { default as About } from 'react'
import { ProfilePic } from '../assets/images/ProfilePic.jpeg'

function About() {

    return (
      <>
     <section className="container">
        <div className="row">
            <div id="About Me"></div>
            <h2>About Me</h2>
            <img src= {ProfilePic} alt="Profile picture of Mallorie"/>
        </div>
        <div className="row"></div>
        <p>Dedicated corporate benefits specialist with 6+ years of experience looking for a new challenge. I am a newly trained full stack 
            developer and have earned my certification from UCSD extension program. Through the extension program I have developed skills 
            in HTML, CSS, JavaScript, Java and C++. I am very excited and eager to start this new path in my career and continue to grow 
            my knowledge. </p>
    </section>
</>
    )
}
export default About;