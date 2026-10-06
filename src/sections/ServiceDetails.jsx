const journeys = {
 it: [
  ['Understand the issue', 'Tell us what is happening, which devices or systems are affected and how it is interrupting your work.'],
  ['Agree the next step', 'We discuss the assessment, scope and cost, including what access or information may be needed.'],
  ['Work through the solution', 'We troubleshoot, configure or maintain the agreed systems and check the result with you.'],
  ['Plan ongoing care', 'We explain the changes and discuss any follow-up, maintenance or support you need.'],
 ],
 web: [
  ['Plan', 'Define your audience, goals, key features and an agreed scope and budget.'],
  ['Design', 'Review the structure, content and visual direction before development progresses.'],
  ['Build', 'Develop the agreed website or application, with updates as the work takes shape.'],
  ['Review & hand over', 'Check the main journeys together, agree launch arrangements and explain how to manage the finished work.'],
 ],
}
const guidance = {
 it: [['The problem', 'What is happening, and when did it start?'], ['Your setup', 'Which devices, applications or accounts are affected?'], ['The impact', 'Who is affected, and how urgent is the issue?']],
 web: [['Your goals', 'Who is it for, and what should it help them do?'], ['The features', 'What pages, functions or integrations do you need?'], ['Budget & timing', 'Share a budget range and any target date, if you have them.']],
}

export default function ServiceDetails({ type }) {
 const isIT = type === 'it'
 return <>
  <section className="section process service-journey">
   <p className="eyebrow">What to expect</p><h2>{isIT ? 'A clear path from issue to next step.' : 'A shared plan from first idea to handover.'}</h2>
   <ol className="process-grid">{journeys[type].map(([title, description], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
  </section>
  <section className="section service-enquiry">
   <div><p className="eyebrow">A useful starting point</p><h2>{isIT ? 'Tell us what needs attention.' : 'Tell us what you want to build.'}</h2><p className="page-lead">{isIT ? 'A short description helps us understand the issue and discuss the right next step.' : 'You do not need a complete brief. Start with what you know, and we can discuss the rest.'}</p><a className="button dark" href={`/contact?interest=${encodeURIComponent(isIT ? 'IT support' : 'Web development')}`}>{isIT ? 'Start an IT support enquiry' : 'Discuss your web project'} →</a></div>
   <div className="enquiry-guidance">{guidance[type].map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
  </section>
 </>
}
