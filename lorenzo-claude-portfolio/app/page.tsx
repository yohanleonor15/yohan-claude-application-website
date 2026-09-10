import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "ASTRA Smart Bin",
    tag: "AI × Embedded Systems",
    description:
      "An Arduino-based smart waste segregation prototype integrating hardware sensing with an AI waste-classification model to trigger real-time sorting actions.",
    meta: "Technofusion 2026 Hackathon · Finalist",
  },
  {
    number: "02",
    title: "Linguify",
    tag: "AI × Language",
    description:
      "An AI-powered English learning platform built around personalized grammar correction, writing feedback, translation, and conversation practice.",
    meta: "Feature planning · AI feedback",
  },
  {
    number: "03",
    title: "ASTRA Developers",
    tag: "Technology × Community",
    description:
      "A student-led technology organization focused on advancing innovation and creating opportunities for students to learn, collaborate, and build.",
    meta: "Founder & CEO · A.Y. 2026–2027",
  },
];

const leadership = [
  ["2024", "Started my Computer Engineering journey", "Batangas State University – The National Engineering University"],
  ["2025", "Students' Rights & Welfare", "Supreme Student Council"],
  ["2025", "Community projects & student services", "reSSConance · eSSCentials · aSSCist Prints"],
  ["2026", "Founder & CEO", "ASTRA Developers"],
  ["2026", "Business Manager", "Computer Engineering Students' Organization"],
  ["2026", "Public Relations Officer", "Supreme Student Council"],
];

const skills = [
  "Embedded Systems",
  "Arduino / C++",
  "Python",
  "TypeScript",
  "AI / ML",
  "React",
  "Node.js",
  "Flutter",
  "Firebase",
  "Circuit Design",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">LYL<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#leadership">Leadership</a>
          <a href="#claude">Why Claude</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">Computer Engineering · AI · Student Leadership</p>
          <h1>
            Lorenzo Yohan
            <br />
            <em>Leonor.</em>
          </h1>
          <p className="hero-lede">
            I build technology, communities, and opportunities for students.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span>↗</span></a>
            <a className="button button-light" href="#claude">Why Claude <span>↓</span></a>
          </div>
        </div>

        <div className="hero-photo-wrap reveal reveal-delay">
          <div className="photo-frame">
            <Image
              src="/profile.png"
              alt="Lorenzo Yohan Leonor"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 42vw"
              className="hero-photo"
            />
          </div>
          <div className="photo-caption">
            <span>01</span>
            <span>Batangas, Philippines</span>
          </div>
        </div>

        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <h2>I like building things <em>that matter.</em></h2>
          <div className="about-copy">
            <p>
              I&apos;m a Computer Engineering student specializing in Artificial Intelligence.
              My interests sit where hardware, software, and people meet.
            </p>
            <p>
              I&apos;ve built prototypes, explored AI-powered systems, led student organizations,
              and helped create communities where students can learn and build together.
            </p>
            <p>
              For me, technology is most meaningful when it gives people the ability to do
              something they couldn&apos;t do before.
            </p>
          </div>
        </div>

        <div className="discipline-grid">
          <article>
            <span className="card-number">01</span>
            <h3>Hardware</h3>
            <p>Embedded systems, sensors, circuit design, and hardware–software integration.</p>
          </article>
          <article>
            <span className="card-number">02</span>
            <h3>Artificial Intelligence</h3>
            <p>AI/ML experimentation, intelligent feedback systems, and AI-powered prototypes.</p>
          </article>
          <article>
            <span className="card-number">03</span>
            <h3>Communities</h3>
            <p>Student leadership, organization building, events, communication, and opportunity creation.</p>
          </article>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div className="section-label">02 — Selected work</div>
          <p>Ideas become more interesting when they become real.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-meta">{project.meta}</p>
              </div>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section leadership" id="leadership">
        <div className="section-label">03 — Leadership</div>
        <div className="leadership-intro">
          <h2>Building the <em>builders.</em></h2>
          <p>
            Technology is only part of the work. I care just as much about creating the
            environments where students can collaborate, contribute, and take initiative.
          </p>
        </div>

        <div className="timeline">
          {leadership.map(([year, role, place]) => (
            <div className="timeline-item" key={`${year}-${role}`}>
              <div className="timeline-year">{year}</div>
              <div className="timeline-line"><span /></div>
              <div>
                <h3>{role}</h3>
                <p>{place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="claude-section" id="claude">
        <div className="claude-inner">
          <div className="section-label light-label">04 — Why Claude</div>
          <div className="claude-grid">
            <h2>
              AI shouldn&apos;t
              <br />
              stay <em>inside</em>
              <br />
              the classroom.
            </h2>
            <div>
              <p className="claude-lead">
                I want to help students move from simply using AI to understanding how to use
                it thoughtfully, creatively, and responsibly.
              </p>
              <p>
                As a Computer Engineering student and student leader, I see an opportunity to
                make AI more approachable for students who may not yet know where to start—from
                engineering students building their first prototype to organizations looking
                for better ways to work, communicate, and create.
              </p>
              <p>
                As a Claude Campus Ambassador, I want to help build a culture where students
                don&apos;t just ask what AI can do for them, but start asking what <strong>they
                can build with it.</strong>
              </p>
            </div>
          </div>

          <div className="vision-grid">
            <article>
              <span>01</span>
              <h3>Claude Build Sessions</h3>
              <p>Hands-on sessions where students bring an idea and turn it into a working workflow or prototype.</p>
            </article>
            <article>
              <span>02</span>
              <h3>AI for Student Organizations</h3>
              <p>Practical ways student leaders can use AI for planning, documentation, communication, and research.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Engineering × AI</h3>
              <p>Sessions connecting AI-assisted development with engineering, prototyping, and technical work.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Claude Community</h3>
              <p>A space for students to share experiments, workflows, projects, and lessons learned.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="section-label">05 — Capabilities</div>
        <div className="capabilities-grid">
          <h2>Tools I use to <em>make things real.</em></h2>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <span key={skill}><b>{String(index + 1).padStart(2, "0")}</b>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements">
        <div className="section-label">06 — Highlights</div>
        <div className="achievement-grid">
          <div><strong>Finalist</strong><span>Technofusion 2026 Hackathon</span></div>
          <div><strong>Best Pitch</strong><span>Technofusion 2026</span></div>
          <div><strong>Rank 1</strong><span>CpE-1103 Top Performing Students</span></div>
          <div><strong>Merit Scholar</strong><span>Department of Science and Technology</span></div>
        </div>
      </section>

      <footer className="footer section" id="contact">
        <div className="section-label">07 — Contact</div>
        <div className="footer-content">
          <h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2>
          <div className="footer-right">
            <p>
              Whether it&apos;s a circuit, an AI system, a student organization, or an idea that
              hasn&apos;t been built yet—I&apos;m interested in turning ideas into something real.
            </p>
            <a className="email-link" href="mailto:lorenzoyohan15@gmail.com">
              lorenzoyohan15@gmail.com <span>↗</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lorenzo Yohan Leonor</span>
          <span>Batangas State University · Computer Engineering</span>
        </div>
      </footer>
    </main>
  );
}
