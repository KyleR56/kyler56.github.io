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
            Proficient full stack developer with 1+ years of experience in web programming, object-oriented design, distributed systems, and machine learning. Thrives in collaborative environments and works effectively in teams to deliver high-quality software.
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          <h4>Languages</h4>
          <ul>
            <li>Java, JavaScript, HTML, CSS, Python, C, C++, C#, SQL.</li>
          </ul>
          <h4>Tools & Platforms</h4>
          <ul>
            <li>React, Angular, Node.js, Express, REST APIs, HTTP, Docker, AWS, Linux, Git.</li>
          </ul>
          <h4>Certifications</h4>
          <ul>
            <li>AWS Certified Cloud Practitioner.</li>
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
            <li>
              <b>Classes: </b>
              Distributed Systems, Operating Systems, Data Structures & Algorithms, Compilers, Machine Learning, Artificial Intelligence, Software Engineering, Computer Vision, Programming Languages, Systems Programming, Database Systems, Interaction Programming, Client-Side Development.
            </li>
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
              Developed the mission control website for operating the team’s rover using JavaScript, React, and Redux.
              <ul>
                <li>Designed and implemented a custom WebSocket-based messaging protocol to enable real-time, bidirectional communication between the mission control website and the rover.</li>
                <li>Created UI elements to display rover camera feeds and telemetry data (position, power, velocity).</li>
                <li>Implemented a 3D rendering of the rover with React Three Fiber, dynamically updated in real-time
                using telemetry data.</li>
              </ul>
            </li>
            <li>
            Developed a Unity simulator that emulates the rover’s cameras, motors, wheels, and sensors in a 3D virtual environment, and transmits camera feeds and telemtry data to the mission control website.
              <ul>
                <li>Enabled users to orbit the rover within the simulator using intuitive mouse controls.</li>
                <li>Added functionality to configure the rover’s intrinsic camera parameters for enhanced simulation accuracy.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>Projects</h3>    
          <h4>Paintle <a href='https://paintle.net'>paintle.net</a>, <a href='https://github.com/KyleR56/MuseShare'>GitHub</a></h4>
          <ul>
            <li>Created Paintle, a website inspired by Wordle where users solve a daily puzzle by painting a 5x5 grid.</li>
            <li>Developed the frontend using Angular, ensuring an accessible interface for both desktop and mobile users.</li>
            <li>Built the backend with Node.js and Express to serve webpage content and handle API requests.</li>
            <li>Deployed the application using Docker containers on AWS Fargate, leveraging load balancing for scalability.</li>
          </ul>
          <h4>MuseShare <a href='https://github.com/KyleR56/MuseShare'>GitHub</a></h4>
          <ul>
            <li>Built an online music sharing website for discovering and interacting with indie artists.</li>
            <li>Designed and developed the user interface using React, following a mobile-first approach.</li>
            <li>Used Firebase for database management and user authentication.</li>
          </ul>
          <h4>MCQuest <a href='https://github.com/KyleR56/mc-quest'>GitHub</a></h4>
          <ul>
            <li>Collaborated with a team of 5 to create an online multiplayer game within Minecraft, where players explore a fantasy world, complete quests, slay enemies, and upgrade their character.</li>
            <li>Followed an Agile development cycle with continuous integration and continuous deployment (CI/CD) to streamline updates, automate testing, and maintain code quality.</li>
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
            <i className='fab fa-github'></i> KyleR56
          </a>
        </div>
        <a href='https://github.com/KyleR56/Resume/releases/download/v1.1/Kyle_Reinholdtsen_Resume.pdf' download='Kyle_Reinholdtsen_Resume.pdf' className='download-button'>
          Download Resume <i className='fas fa-download'></i>
        </a>
      </footer>
    </div>
  )
}

export default App
