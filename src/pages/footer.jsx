export { default as Footer } from 'react'
import Resume  from '../assets/images/Resume.pdf'

function Footer() {

    return (
      <>
    <section>    
      <div className="column-contact">
            <a>malloriepinto89@gmail.com</a>
            <a>Phone: 626-664-5069</a>
            <a href={Resume} download>Resume</a>
            <a href="https://github.com/Pinto006?tab=repositories">GitHub</a>
            <a href="https://www.linkedin.com/in/mallorie-pinto-7897478b">LinkedIn</a>
        </div>
    </section>
</>
    )
}
export default Footer;