const audiences = [
  ['Small businesses', 'Reliable systems and a confident online presence.'],
  ['Non-profits & community groups', 'Affordable digital tools that help you reach people.'],
  ['Churches & faith groups', 'Websites, communication tools and practical support.'],
  ['Start-ups & individuals', 'A solid, friendly foundation from day one.'],
]

export default function Audience() {
  return <section className="audience section"><div className="audience-copy"><p className="eyebrow">Built around your needs</p><h2>Big-company care for organisations doing important work.</h2><p>We understand that not every team has an IT department. You deserve responsive support, sensible advice and a partner who takes time to understand your goals.</p><a className="button dark" href="/contact">Tell us what you need <span>→</span></a></div><div className="audience-list">{audiences.map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>)}</div></section>
}
