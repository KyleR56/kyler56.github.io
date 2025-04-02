import './App.css'

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Kyle Reinholdtsen</h1>
        <h2>Software Engineer</h2>
      </header>
      <article>
        <hr></hr>
        <section>
          <h3>About</h3>
          <p>
            Proficient full-stack developer with 2 years of experience in web programming, object-oriented design, distributed systems, and machine learning. Thrives in collaborative environments and works effectively in teams to deliver high-quality software.
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          <h4>Languages</h4>
          <ul>
            <li>Java, JavaScript, HTML, CSS, Python, C, C++, C#, SQL.</li>
          </ul>
          <h4>Technologies</h4>
          <ul>
            <li>React.js, Node.js, Unity, PyTorch, Linux, Git.</li>
          </ul>
        </section>
        <section>
          <h3>Education</h3>
          <div className='section-heading'>
            <h4>B.S. Computer Science & Engineering</h4>
            <span>06/2021 - 12/2023</span>
          </div>
          <p><i>University of Washington, Seattle</i></p>
          <ul>
            <li><b>Classes: </b>Distributed Systems, Operating Systems, Algorithms, Compilers, Machine Learning, Artificial Intelligence, Software Engineering, Computer Vision, Programming Languages, Systems Programming, Database Systems, Interaction Programming.</li>
            <li><b>GPA: </b>3.88 (Cum Laude, Dean’s List).</li>
          </ul>
        </section>
        <section>
          <h3>Experience</h3>
          <div className='section-heading'>
            <h4>Software Engineer, Husky Robotics</h4>
            <span>01/2022 - 03/2023</span>
          </div>
          <p><i>University of Washington, Seattle</i></p>
          <ul>
            <li>
              Developed the mission control website for operating the team’s rover using JavaScript, React.js, and Redux.
              <ul>
                <li>Created UI elements for displaying the rover’s cameras and telemetry data (position, power, velocity).</li>
                <li>Implemented a 3D rendering of the rover with React Three Fiber, dynamically updated in real-time using telemetry data.</li>
              </ul>
            </li>
            <li>
              Developed a Unity simulator that emulates the rover’s cameras, motors, wheels, and sensors in a 3D virtual environment.
              <ul>
                <li>Enabled users to orbit the rover using intuitive mouse controls.</li>
                <li>Added functionality to configure intrinsic camera parameters within the simulator for enhanced simulation accuracy.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>Projects</h3>
          <h4>MuseShare <a href='https://github.com/KyleR56/MuseShare'>(GitHub)</a></h4>
          <ul>
            <li>Built an online music sharing website for discovering and interacting with indie artists.</li>
            <li>Designed and developed the user interface using React.js, ensuring optimal performance across both
            desktop and mobile devices.</li>
            <li>Used Firebase for database management and user authentication.</li>
          </ul>
          <h4>MCQuest</h4>
          <ul>
            <li>Created an online multiplayer game within Minecraft where players can explore a fantasy world, complete quests, slay enemies, and upgrade their character.</li>
            <li>Deployed a remote server which players can connect to with a default Minecraft client.</li>
            <li>Developed server-side game logic using Java such as physics calculations, item and skill behavior, and data persistence.</li>
          </ul>
        </section>
        <hr></hr>
      </article>
      <footer>
        <div className='socials'>
          <a href='mailto:kyle@reinholdtsen.com'>
            <i className='fas fa-envelope'></i> kyle@reinholdtsen.com
          </a>
          <span className='separator'>•</span>
          <a href='https://www.linkedin.com/in/kyle-reinholdtsen-306849223/'>
            <i className='fab fa-linkedin'></i> Kyle Reinholdtsen
          </a>
          <span className='separator'>•</span>
          <a href='https://github.com/kyler56'>
            <i className='fab fa-github'></i> kyler56
          </a>
        </div>
        <a href='https://github.com/kyler56/resume/releases/latest/download/resume.pdf' download='Kyle_Reinholdtsen_Resume.pdf' className='download-button'>
          Download Resume <i className='fas fa-download'></i>
        </a>
      </footer>
    </div>
  )
}

export default App
