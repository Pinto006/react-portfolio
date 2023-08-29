import './App.css'
import { EvergreenIcon, EvergreenPan, ProfilePic } from './assets/images'
import Header from './pages/header'
import Footer from './pages/footer'
import Form from './pages/form'

function App() {

  return (
    <div>
    <Header></Header>
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
    <section className="container">
        <div id="My Projects">
            <h2>My Projects</h2>
        </div>
        <div className="row"></div>
        <div className="column-project"> <a href="https://pinto006.github.io/GeoBurn/">GeoBurn <img
                    src={EvergreenPan} alt="Project 1 Icon"/></a></div>
        <div className="row"></div>
        <div className="column-project-half">
             <a href="https://github.com/shadowfre4k/viewFolio">ViewFolio <img src={EvergreenIcon} alt="Project 2 Icon"/></a>
            <a href="https://google.com">Project 3 <img src= {EvergreenIcon} alt="Project 3 Icon"/></a>
            <a href="https://google.com">Project 4 <img src={EvergreenIcon}  alt="Project 4 Icon"/></a>
            <a href="https://google.com">Project 5 <img src={EvergreenIcon}  alt="Project 5 Icon"/></a>
        </div>
    </section>
    <section className="container">
        <div id="Contact Me">
            <h3>Contact Me!</h3>
            <Form></Form>
        </div>
    </section>
    <Footer></Footer>
    </div>
  )
}

export default App
