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
             Full-stack software engineer with hands-on experience building production-ready web apps usingReact, Angular, Node.js, and AWS. Passionate about frontend UX, scalable backend design, and cloud-native deployments using Docker and serverless architecture. Strong foundation in distributed systems and team-based software delivery
          </p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages:</strong> TypeScript, JavaScript, Python, Java, HTML, CSS.</li>
            <li><strong>Frontend:</strong> Angular, React, Redux, Responsive Design, RxJS.</li>
            <li><strong>Backend:</strong> Node.js, Express, REST APIs.</li>
            <li><strong>AWS:</strong> S3, Lambda, DynamoDB, Fargate, ECS, API Gateway.</li>
            <li><strong>DevOps & Tools:</strong> Git, Docker, CI/CD, Linux.</li>
            <li><strong>Certifications:</strong> AWS Certified Cloud Practitioner.</li>
          </ul>
        </section>
        <section>
          <h3>Education</h3>
          <div className='section-heading'>
            <h4>B.S. Computer Science & Engineering</h4>
            <span>06/2021 - 12/2023</span>
          </div>
          <p><i>University of Washington, Seattle,</i> 3.88 (Cum Laude)</p>
        </section>
        <section>
          <h3>Experience</h3>
          <div className='section-heading'>
            <h4>Software Engineer, Husky Robotics</h4>
            <span>01/2022 - 03/2023</span>
          </div>
          <p><i>University of Washington, Seattle</i></p>
          <ul>
            <li>Built the mission control website for Husky Robotics, a student engineering team, to operate the team’s rover using JavaScript, React, and Redux.</li>
            <li>Maintained high code quality through Git-based collaboration, including feature branching, peer reviews, and issue tracking with detailed documentation.</li>
            <li>Designed and implemented a custom WebSocket-based JSON messaging protocol to enable real-time, bidirectional communication between the mission control website and the rover.</li>
            <li>Created UI elements to display rover camera feeds and telemetry data (position, power, velocity).</li>
            <li>Implemented a 3D rendering of the rover with React Three Fiber, dynamically updated in real-time using telemetry data.</li>
          </ul>
        </section>
        <section>
          <h3>Projects</h3>    
          <h4>Paintle <a href='https://paintle.net'>paintle.net</a>, <a href='https://github.com/KyleR56/paintle-front-end'>GitHub</a></h4>
          <ul>
            <li>Created Paintle, a website inspired by Wordle where users solve a daily puzzle by painting a 5x5 grid.</li>
            <li>Built a responsive frontend using Angular, designed for seamless play on both desktop and mobile browsers.</li>
            <li>Deployed a fully serverless architecture on AWS using S3 (frontend), Lambda (backend logic), API Gateway (routing), and DynamoDB (storage), achieving &lt;200 ms cold-start latency and $0 backend cost under typical usage</li>
            <li>Implemented secure authentication via Google OAuth 2.0 and JSON Web Tokens (JWT), incorporating best practices such as short-lived tokens, RS256 asymmetric signing, and validation of token audience and issuer.</li>
          </ul>
          <h4>MCQuest <a href='https://github.com/mc-quest/mc-quest'>GitHub</a></h4>
          <ul>
            <li>Developed a custom Minecraft server to support a multiplayer RPG with questing, combat, and character progression.</li>
            <li>Collaborated with a 5-person team using Agile practices including structured requirements planning, sprint-based development, weekly standups, and CI/CD pipelines to ensure quality and fast iteration.</li>
            <li>Implemented backend systems in Java for handling in-game mechanics such as physics calculations, skill behavior, item interactions, and data persistence.</li>
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
        <a href='https://github.com/KyleR56/Resume/releases/download/v1.3/Kyle_Reinholdtsen_Resume.pdf' download='Kyle_Reinholdtsen_Resume.pdf' className='download-button'>
          Download Resume <i className='fas fa-download'></i>
        </a>
      </footer>
    </div>
  )
}

export default App
