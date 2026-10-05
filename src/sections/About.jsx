import { projects } from '../data/projects'

const principles = [
  ['People before technology', 'Start with the people using the tools. Make space for questions and explain the options in language that makes sense.'],
  ['A practical next step', 'Focus on the problem that matters now, with a scope and cost discussed before work begins.'],
  ['Built around your work', 'Shape websites, support and software around your organisation’s everyday needs and the people you serve.'],
]

function PrincipleIcon({ index }) {
  return <svg className="about-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{index === 0 ? <><circle cx="24" cy="21" r="8" /><path d="M9 49v-5a15 15 0 0 1 30 0v5M42 15a8 8 0 0 1 0 16M46 37a13 13 0 0 1 9 12" /></> : index === 1 ? <><rect x="13" y="10" width="38" height="46" rx="5" /><path d="m22 25 4 4 8-9M22 41h20M22 48h13M39 25h4" /></> : <><rect x="8" y="12" width="48" height="33" rx="4" /><path d="M8 22h48M25 53h14M32 45v8m-8-26-5 5 5 5m16-10 5 5-5 5" /></>}</svg>
}

export default function About() {
  return <>
    <section className="page-intro section about-intro">
      <div className="about-intro-copy"><p className="eyebrow">About GAP TECH · Established 2024</p>
      <h1>Practical technology.<br /><em>Personal service.</em></h1>
      <p className="page-lead">IT support, website development and digital solutions for small businesses, community organisations and people with an idea to build.</p>
      <a className="button dark" href="/contact">Let’s talk about your needs →</a>
      <dl className="about-facts"><div><dt>Established</dt><dd>2024</dd></div><div><dt>Businesses &amp; organisations helped</dt><dd>20+</dd></div></dl></div>
      <figure className="about-photo"><img src="/images/about-networking.png" alt="Network switches with neatly organised blue and teal Ethernet cables; illustrative image." width="1536" height="1024" fetchPriority="high" /><figcaption>Connected systems, practical support · illustrative image.</figcaption></figure>
    </section>

    <section className="section about-story">
      <div><p className="eyebrow">The work behind GAP TECH</p><h2>Helping organisations get on with what matters.</h2><figure className="about-photo about-story-photo"><img src="/images/laptop-repair-card.jpg" alt="Illustrative close-up of hands working on a laptop." width="960" height="540" loading="lazy" decoding="async" /></figure></div>
      <div className="about-story-copy">
        <p>GAP TECH started in 2024 and has helped more than 20 businesses and organisations with their technology needs.</p>
        <p>A website helps people find your organisation and understand what you do. IT support helps the people behind it keep working. GAP TECH brings these needs together in one place.</p>
        <p>Our experience includes website development and IT support for Waikato Refugee Forum, Waikato Navigate Trust and Ephata Initiatives Trust, alongside website development for the DearEcho Project.</p>
        <p>That work sits at the heart of our approach: understand the organisation, listen to the people using its technology and work towards something useful.</p>
      </div>
    </section>

    <section className="section services about-principles">
      <p className="eyebrow">How we approach the work</p><h2>Clear advice. Thoughtful solutions.</h2>
      <div className="about-principle-grid">{principles.map(([title, description], index) => <article className="detail-card" key={title}><PrincipleIcon index={index} /><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="section about-experience">
      <div className="section-heading"><div><p className="eyebrow">Selected experience</p><h2>Work with a community focus.</h2></div><p>A selection of the organisations and projects we’ve supported.</p></div>
      <ul className="about-project-list">{projects.map(project => <li key={project.slug}><img className="about-project-thumb" src={project.image} alt={`${project.name} homepage`} width="1466" height="973" loading="lazy" decoding="async" /><div><h3>{project.name}</h3><p>{project.services.join(' · ')}</p></div></li>)}</ul>
      <a className="text-link" href="/#selected-work">See selected project screenshots →</a>
    </section>

    <section className="section about-direction">
      <div><p className="eyebrow">Support. Build. Innovate.</p><h2>Help for today.<br />Ideas for what comes next.</h2><figure className="about-photo about-story-photo"><img src="/images/coding-screen-card.jpg" alt="A desktop monitor displaying illustrative application code, with no people." width="960" height="539" loading="lazy" decoding="async" /><figcaption>Building useful digital tools · illustrative image.</figcaption></figure></div>
      <div className="about-story-copy"><p>Alongside IT support and website development, we discuss custom applications and workflows for organisations that need something shaped around their work.</p><p>We’re also exploring a family of GAP TECH software products. These remain planned concepts, with availability and features yet to be confirmed.</p><div className="about-links"><a className="text-link" href="/it-services">Explore IT services →</a><a className="text-link" href="/web-development">Explore development →</a><a className="text-link" href="/products">Explore planned products →</a></div></div>
    </section>

    <section className="section call-to-action about-contact"><div><svg className="about-contact-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 10h40a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H28L12 56V46a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"/><path d="M21 25h22M21 33h15"/></svg><p className="eyebrow">Start with a conversation</p><h2>What would make your work easier?</h2><p className="cta-note">Tell us what you’re working on, what’s getting in the way or what you’d like to build.</p></div><a className="button primary" href="/contact">Contact GAP TECH →</a></section>
  </>
}
