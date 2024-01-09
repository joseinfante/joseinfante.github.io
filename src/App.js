import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div id="content">
        <div id="navigation-bar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experiance">Experience</a></li>
                
              </ul>
        </div>
        <h1 id="home">JOSE A. INFANTE</h1>
        <div id="intro">
            
        <div id="about-me">
            <h1 >hi!</h1>
            <p>My name is Jose Angel Infante and I recently graduated this Fall 2023, with a Bachelor of Science in Computer Science at the University of Texas at Rio Grande Valley✌️.</p>
            <p>I am passionate about a wide spectrum of technology, spanning from full-stack development to artificial intelligence and human-computer interactions. My interests encompass the entire range of technologies that bridge the gap between software development and the interaction between humans and machines.</p>
            <div class="email-me-button">
                <a href="mailto:angel.infante@angelinfante.com" class="intro-contact">
                    <button class="email-me">
                       <ul>
                            {/* <li><img height="25px" width="25px" src="/resources/icons/email-white.png" alt="Send me an email!"></li> */}
                            <li>Say hi!</li>
                       </ul>
                    </button>
                </a>
            </div>
        </div>
        </div>
        <div id="experience">
            <h1 >-Experience</h1>
            <p>Here are some technologies I have been working with:</p>
        </div>
        {/* end of content div */}
        </div> 
        <div id="footer">
            <div class="ending-credits">
            <div>Built and designed by Jose A. Infante. </div>
            <div>All rights reserved. ©</div>
        </div>
    </div>
</body>
  );
}

export default App;
