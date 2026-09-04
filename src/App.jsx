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
            Full-stack software engineer with experience building production
            financial applications and APIs using Vue (Nuxt), FastAPI,
            PostgreSQL, and AWS. Experienced in backend development, API design,
            financial data, authentication, automated testing, and cloud
            infrastructure, with a strong focus on building reliable and
            intuitive user experiences.
          </p>
        </section>

        <section>
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages:</strong> TypeScript, JavaScript, Python, Java, HTML, CSS.</li>
            <li><strong>Frontend:</strong> Vue (Nuxt), React, Angular, Tailwind CSS, Redux.</li>
            <li><strong>Backend:</strong> FastAPI, Node.js, Express, REST APIs.</li>
            <li><strong>Databases:</strong> PostgreSQL, SQL, DynamoDB.</li>
            <li><strong>AWS:</strong> ECS, RDS, S3, Lambda, API Gateway, SNS, SQS, Cognito.</li>
            <li><strong>DevOps & Tools:</strong> Terraform, GitHub Actions, Docker, Git, Linux, CI/CD.</li>
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
            <h4>Full Stack Software Engineer, Citizen Mint</h4>
            <span>08/2025 - Present</span>
          </div>
          <p><i>Remote</i></p>
          <ul>
            <li>
              Developed an investment platform using Vue (Nuxt), FastAPI,
              PostgreSQL, and AWS.
            </li>
            <li>
              Architected and built an internal distribution payment API that
              processed $5m+ in investor payments.
            </li>
            <li>
              Built an investor portfolio dashboard using advanced PostgreSQL
              queries and time-series data to calculate portfolio performance
              and returns over time.
            </li>
            <li>
              Streamlined admin workflows including CSV upload/download, rich
              text and media content management, and PDF document generation,
              reducing operation time from hours to minutes.
            </li>
            <li>
              Implemented custom authentication flows using AWS Cognito and
              Lambda, including email/SMS MFA, session tracking, JWT-based
              inactivity timeouts, and step-up MFA for sensitive operations.
            </li>
            <li>
              Automated infrastructure and deployment workflows using Terraform
              and GitHub Actions, adding unit tests to the primary web
              application and automating deployments.
            </li>
            <li>
              Built responsive and accessible investment interfaces for 10+
              offerings using Vue and Tailwind CSS.
            </li>
          </ul>

          <div className='section-heading'>
            <h4>Software Engineer, Husky Robotics</h4>
            <span>01/2022 - 03/2023</span>
          </div>
          <p><i>University of Washington, Seattle</i></p>
          <ul>
            <li>
              Built the mission control website for Husky Robotics, a student
              engineering team, to operate the team’s rover using JavaScript,
              React, and Redux.
            </li>
            <li>
              Designed and implemented a custom WebSocket-based JSON messaging
              protocol to enable real-time, bidirectional communication between
              the mission control website and the rover.
            </li>
            <li>
              Created UI elements to display live rover camera feeds and
              telemetry data including position, power, and velocity.
            </li>
            <li>
              Implemented a 3D rendering of the rover with React Three Fiber,
              dynamically updated in real-time using telemetry data.
            </li>
          </ul>
        </section>

        <section>
          <h3>Projects</h3>

          <h4>
            Paintle{' '}
            <a href='https://paintle.net'>paintle.net</a>,{' '}
            <a href='https://github.com/KyleR56/paintle-front-end'>GitHub</a>
          </h4>
          <ul>
            <li>
              Designed and shipped a responsive Wordle-inspired puzzle game in
              Angular for desktop and mobile browsers.
            </li>
            <li>
              Deployed a fully serverless architecture on AWS using S3, Lambda,
              API Gateway, and DynamoDB, achieving &lt;200 ms cold-start latency
              and $0 backend cost under typical usage.
            </li>
            <li>
              Implemented secure authentication via Google OAuth 2.0 and JWTs,
              using short-lived tokens, RS256 asymmetric signing, and validation
              of token audience and issuer.
            </li>
          </ul>

          <h4>
            MCQuest{' '}
            <a href='https://github.com/mc-quest/mc-quest'>GitHub</a>
          </h4>
          <ul>
            <li>
              Developed a custom Minecraft server to support a multiplayer RPG
              with questing, combat, and character progression.
            </li>
            <li>
              Collaborated with a 5-person team using Agile practices including
              structured requirements planning, sprint-based development, weekly
              standups, and CI/CD pipelines.
            </li>
            <li>
              Implemented backend systems in Java for in-game mechanics
              including physics calculations, skill behavior, item interactions,
              and data persistence.
            </li>
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

        <a
          href='https://github.com/KyleR56/Resume/releases/download/v1.3/Kyle_Reinholdtsen_Resume.pdf'
          download='Kyle_Reinholdtsen_Resume.pdf'
          className='download-button'
        >
          Download Resume <i className='fas fa-download'></i>
        </a>
      </footer>
    </div>
  )
}

export default App
