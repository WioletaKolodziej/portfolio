import { FaCode, FaPalette, FaVial } from "react-icons/fa";

export const cardsData = {
  header: {
    title: "UI-kolo",
    subtitle: "Frontend & Design",
    icons: true,
    bg: "transparent",
  },

  about: {
    title: "About me",
    description:
      "I am a frontend developer experienced in React, JavaScript, TypeScript, and accessibility standards (WCAG). Feel free to explore my projects, see my expertise in tools and development, and contact me for collaboration.",
    expanded: `
      I am a frontend developer experienced in React, JavaScript, TypeScript, and accessibility standards (WCAG) open to collaboration. I value practical solutions, continuous learning, and good communication. Feel free to explore my projects, see my expertise in tools and development, and contact me for collaboration.
    
      I specialize in creating clean, accessible UIs and solving UI/UX problems with a practical mindset.
      I enjoy building tools that improve workflow and collaborating on thoughtful front-end architecture.
      Outside of work, I love hiking, traveling, yoga, and quiet minimalistic design.
    `,
    bg: "#6D00FF",
    tall: true,
  },

  firstRow: [
    {
      title: "Accessibility checker",
      bg: "#4C6FFF",
      link: "https://accessibility-web-checker.vercel.app/",
    },
    {
      title: "Flexbox game",
      bg: "#9B4CFF",
      link: "https://flexbox-dots.vercel.app/",
    },
    {
      title: "Rehaservice Webpage",
      bg: "#5100FF",
      link: "https://rehaservice.vercel.app/",
    },
  ],

  secondRow: [
    {
      title: "Tools & Development",
      bg: "#008FAD",
      expanded: (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaCode size={24} />
            <span>
              <strong>Code / Frontend:</strong> JavaScript, TypeScript, React,
              HTML, CSS, Tailwind, Styled Components, Accessibility (WCAG, Axe
              Core)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaVial size={24} />
            <span>
              <strong>Tests:</strong> Jest, RTL, Puppeteer
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaPalette size={24} />
            <span>
              <strong>Design:</strong> Canva, Figma, Adobe Creative Suite
            </span>
          </div>
        </section>
      ),
    },
    {
      title: "Offer",
      bg: "#E4F2FF",
      text: "#6D00FF",
      expanded: (
        <section className="container mx-auto px-4 text-center transition-colors">
          <h2 className="my-4">
            I offer professional front-end and design support in the following
            areas:
          </h2>

          <div className="my-4">
            <h3>✔️ React / TypeScript</h3>
            <ul>
              <li>Creating simple projects and components</li>
              <li>
                Implementing improvements and fixes in existing applications
              </li>
              <li>API integration</li>
            </ul>
          </div>

          <div className="my-4">
            <h3>✔️ Websites</h3>
            <ul>
              <li>
                Building new sites (landing pages, portfolios, small websites)
              </li>
              <li>Modernizing and optimizing existing sites</li>
              <li>Improving speed, accessibility, and usability</li>
              <li>Design</li>
            </ul>
          </div>

          <div className="my-4">
            <h3>✔️ Accessibility (WCAG/A11y)</h3>
            <ul>
              <li>Accessibility audits</li>
              <li>Recommendations and implementation of changes</li>
              <li>
                Enhancements for keyboard navigation, screen readers, and
                contrast
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h3>✔️ UX / UI</h3>
            <ul>
              <li>Analyzing and improving interface intuitiveness</li>
              <li>Designing clean, modern layouts</li>
              <li>Prototypes and mockups</li>
            </ul>
          </div>

          <div className="my-4">
            <h3>✔️ Branding & Visual Identity</h3>
            <ul>
              <li>Logo / Poster design</li>
              <li>Color palettes, typography</li>
              <li>Basic identity elements for small businesses</li>
            </ul>
          </div>

          <p>
            I handle projects from start to finish or on a task-by-task basis.
            I’d love to learn about your project—let me know what you need.
          </p>
          <p>Each project is quoted individually.</p>
        </section>
      ),
    },
    {
      title: "Contact me",
      bg: "#4C6FFF",
      expanded: (
        <section
          id="contact"
          className="py-24 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <p className="text-lg mb-12">
              Have a question or want to work together? Reach out, I’d love to
              hear from you!
            </p>

            <a
              href="mailto:kolowioleta@gmail.com"
              className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </a>

            <div className="mt-16 text-lg space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:uikolo.frontend@gmail.com"
                  className="underline hover:text-indigo-200 transition-colors"
                >
                  uikolo.frontend@gmail.com
                </a>
              </p>
              <p>
                <strong>Chat:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/wioleta-ko%C5%82odziej-%C5%BCmudzka-113113195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-200 transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      ),
    },
  ],
};
