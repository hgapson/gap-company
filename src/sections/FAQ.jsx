const faqs = [
 ['Can I get help with a one-off problem?', 'Yes. Start with the issue you need to solve, whether it involves one device, an email account or a wider setup. We can discuss the scope before you decide to proceed.'],
 ['Do I need to know exactly what technology I need?', 'No. Tell us what is getting in the way or what you want to achieve. We can help you explore the options and agree a practical next step.'],
 ['How does pricing work?', 'Pricing depends on the work involved. We discuss your requirements and agree the scope and cost before work starts. Include any budget or deadline in your enquiry.'],
 ['Can we discuss ongoing support?', 'Yes. We can discuss maintenance, updates and ongoing help alongside one-off projects, with the scope agreed around your needs.'],
 ['Are GAP TECH software products available now?', 'The product family is currently at the concept stage. You can explore the ideas and register interest, or contact us about a separate custom development project.'],
 ['What happens when I enquire?', 'Share the problem, your current setup and any deadline. We will review your enquiry and discuss the information needed to work out a next step.'],
]

export default function FAQ() {
 return <section className="section faq-section"><p className="eyebrow">Before we get started</p><h2>A few useful answers.</h2><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
}
