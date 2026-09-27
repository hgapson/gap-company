import { useState } from 'react'
export default function Contact({ interest = '' }) {
 const [prepared, setPrepared] = useState(false)
 function submit(event) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const subject = 'GAP TECH enquiry — ' + data.get('service')
  const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nInterest: ' + data.get('service') + '\n\n' + data.get('message')
  window.location.href = 'mailto:hgapson@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
  setPrepared(true)
 }
 return <section className="contact"><div className="contact-copy"><p className="eyebrow">Let’s solve it together</p><h1 className="contact-title">Tell us what you need.</h1><p>From an everyday IT issue to a custom application, start with a little about your goals.</p><div className="contact-detail"><span>Based in Hamilton, New Zealand</span><span>Remote support across New Zealand</span><a href="mailto:hgapson@gmail.com">hgapson@gmail.com</a></div><p className="draft-notice">Complete the form to prepare an email to hgapson@gmail.com. Your email app opens so you can review and send it.</p></div><form onSubmit={submit} onChange={() => setPrepared(false)}><label>Your name<input required name="name" autoComplete="name" placeholder="Name" /></label><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label>What can we help with?<select name="service" defaultValue={interest || 'IT support'}>{['IT support', 'Network, cloud or email setup', 'Web development', 'Custom software', 'Business solutions', 'Product demo request', 'Product quote / customisation', 'Something else', ...(interest ? [interest] : [])].map(item => <option key={item}>{item}</option>)}</select></label><label>Tell us a little more<textarea required name="message" rows="5" placeholder="What would you like to improve or fix?" /></label><button className="button primary" type="submit">Prepare email enquiry <span>→</span></button><p className="form-note" role="status">{prepared ? 'Email requested. Please send it from your email app. If no app opened, email hgapson@gmail.com directly; your details remain here.' : 'This form opens your email app. It does not send automatically.'}</p></form></section>
}
