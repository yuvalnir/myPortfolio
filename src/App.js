import "./App.css";
import Skills from "./components/Skills";
import ProfilePic from "./images/ProfilePic.jpg";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Farewell from "./components/Farewell";
import { github, linkedin } from "./images/icons";

function App() {
    return (
        <div className="App">
            <div className="main-container">
                <div className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={ProfilePic} alt="" />
                            <h4>Yuval Nir</h4>
                            <h5>Full Stack Developer</h5>
                        </div>
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <div className="mobile">
                                <p>0503902417</p>
                            </div>
                            <div className="email">
                                <p>yuvalnir11@gmail.com</p>
                            </div>
                        </div>
                        <div className="links">
                            <a
                                className="github"
                                href="https://github.com/yuvalnir"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {github}
                            </a>
                            <a
                                className="linkedin"
                                href="https://www.linkedin.com/in/yuval-nir-92775218a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {linkedin}
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="mobile-content">
                            <Intro></Intro>
                            <Skills></Skills>
                            <Projects></Projects>
                            <Farewell></Farewell>
                        </div>
                    </div>
                </div>
                <div className="circle1 circle-definition"></div>
                <div className="circle2 circle-definition"></div>
                <div className="circle3 circle-definition"></div>
                <div className="circle4 circle-definition"></div>
                <div className="circle5 circle-definition"></div>
                <div className="circle6 circle-definition"></div>
                <div className="circle7 circle-definition"></div>
                <div className="circle8 circle-definition"></div>
                <div className="circle9 circle-definition"></div>
                <div className="circle10 circle-definition"></div>
            </div>
        </div>
    );
}

export default App;
