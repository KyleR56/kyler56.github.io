import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Kyle Reinholdtsen</h1>
        <h2>Software Engineer</h2>
      </header>
      <hr></hr>
      <article>
        <section className="section">
          <h3>About</h3>
          <p>
            Proficient full-stack developer with 2 years of experience in web programming, object-oriented design, distributed systems, and machine learning. Thrives in collaborative environments and works effectively in teams to deliver high-quality software.
          </p>
        </section>
        <section class="section">
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
        <section class="section">
          <h3>Education</h3>
          <h4>B.S. Computer Science & Engineering, University of Washington, Seattle</h4>
          <ul>
            <li>Classes: Distributed Systems, Operating Systems, Algorithms, Compilers, Machine Learning, Artificial Intelligence, Software Engineering, Computer Vision, Programming Languages, Systems Programming, Database Systems, Interaction Programming.</li>
            <li>GPA: 3.88 (Cum Laude, Dean’s List).</li>
          </ul>
        </section>
        <section class="section">
          <h3>Experience</h3>
          <h4>Software Engineer, Husky Robotics, University of Washington, Seattle</h4>
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
        <section class="section">
          <h3>Projects</h3>
          <h4>MuseShare <a href="https://github.com/KyleR56/MuseShare">(GitHub)</a></h4>
          <ul>
            <li>Built an online music sharing website for discovering and interacting with indie artists.</li>
            <li>Designed and developed the user interface using React.js, ensuring optimal performance across both
            desktop and mobile devices</li>
            <li>Used Firebase for database management and user authentication.</li>
          </ul>
          <h4>MCQuest</h4>
          <ul>
            <li>Created an online multiplayer game within Minecraft where players can explore a fantasy world, complete quests, slay enemies, and upgrade their character.</li>
            <li>Deployed a remote server which players can connect to with a default Minecraft client.</li>
            <li>Developed server-side game logic using Java such as physics calculations, item and skill behavior, and data persistence.</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default App
