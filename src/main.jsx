import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header, { navigation } from './components/Header'
import Home from './sections/Home'
import { getMetadata } from './seo'
import Audience from './sections/Audience'
import Contact from './sections/Contact'
import Process from './sections/Process'
import { products, roadmap } from './data/products'

const services = [
 ['IT support', 'Approachable help with everyday hardware, software and technical questions.'],
 ['Computer setup & troubleshooting', 'Set up devices, diagnose problems and get back to work.'],
 ['Network setup', 'Connect your office with practical Wi-Fi and network configuration.'],
 ['Microsoft 365 & email setup', 'Set up accounts, email and collaboration tools for your team.'],
 ['Cloud support', 'Help with cloud setup, file access and day-to-day administration.'],
 ['Cybersecurity basics', 'Practical guidance on account protection, updates and safer working habits.'],
 ['IT consulting', 'Understand your options and plan technology around your needs.'],
 ['Device & system maintenance', 'Keep systems maintained with updates and ongoing care.'],
]
const webServices = [['Business & organisation websites', 'Clear, accessible websites that explain your work and help people contact you.'], ['Portals & business applications', 'Custom tools for your customers, staff and everyday workflows.'], ['Software development', 'Applications scoped around the problem you need to solve.'], ['Website care & integrations', 'Updates, maintenance and connections to the tools you use.']]
const businessServices = [['Managed IT services', 'Discuss ongoing support, maintenance and a service scope suited to your team.'], ['Small business systems', 'Bring customer records, bookings and administration into a more useful workflow.'], ['Community & NGO solutions', 'Plan tools for volunteers, referrals, programmes and reporting.'], ['Cloud & collaboration', 'Help your team share information and work together with a clearer setup.']]
function Intro({ eyebrow, title, children }) { return <section className="page-intro section"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-lead">{children}</p></section> }
function Cards({ items }) { return <div className="detail-grid">{items.map(([title,description],i) => <article className="detail-card" key={title}><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{description}</p></article>)}</div> }
function CTA({ title = 'Let’s find a practical next step.' }) { return <section className="section call-to-action"><h2>{title}</h2><a className="button primary" href="/contact">Start a conversation →</a></section> }
function Products() { return <><Intro eyebrow="GAP TECH products" title="Useful software starts with real needs.">Our planned product family brings everyday organisational tasks into simpler systems. These products are concepts for development; availability, features and pricing are yet to be confirmed.</Intro><section className="section product-section"><div className="detail-grid">{products.map(product => <article key={product.slug} className="detail-card product-card"><span className="status-badge">Planned product</span><h2>{product.name}</h2><p>{product.problem}</p><p className="product-audience">For {product.audience.toLowerCase()}</p><a className="text-link" href={`/products/${product.slug}`}>Explore product concept →</a></article>)}</div></section><section className="section services"><p className="eyebrow">Future possibilities</p><h2>Ideas with people at their centre.</h2><p className="page-lead">Additional ideas from our product roadmap. These are exploratory concepts, with no announced launch dates.</p><Cards items={roadmap} /></section><CTA title="Have a problem these tools could solve?" /></> }
function Product({ product }) { return <><Intro eyebrow="Planned software product" title={product.name}>{product.problem}</Intro><section className="section product-detail"><div><span className="status-badge">Concept · not yet available</span><h2>Who it’s for</h2><p>{product.audience}.</p><h2>Proposed features</h2><ul className="feature-list">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul>{product.slug === 'education' && <p>The brief names GAP Education without a detailed scope. These features are suggestions to discuss.</p>}<h2>Pricing & customisation</h2><p>Pricing has not been set. Request a quote discussion for your organisation’s needs, integrations and custom workflows.</p><a className="button dark" href={`/contact?interest=${encodeURIComponent(`${product.name} — quote / customisation`)}`}>Discuss a quote →</a></div><div><div className="concept-preview"><div className="preview-top">{product.name}<span>Illustrative preview</span></div><h3>Your workspace, simplified.</h3>{product.preview.map(row => <div className="preview-row" key={row}>{row}</div>)}</div><p className="preview-caption">Example interface only. This is not a screenshot of a working product.</p><h2>Preview & demo</h2><p>A live demo and real screenshots are not available yet. Register interest in a future demonstration.</p><a className="text-link" href={`/contact?interest=${encodeURIComponent(`${product.name} — future demo`)}`}>Request a future demo →</a></div></section><CTA /></> }
function ServicePage({ type }) { const info = type === 'it' ? ['IT services', 'Everyday IT, taken care of.', 'Practical support for individuals, businesses and organisations, from a single device to a team’s technology setup.', services] : type === 'web' ? ['Web & software development', 'Build the tools your work needs.', 'Websites, portals and custom applications with a clear purpose and a scope built around your organisation.', webServices] : ['Business solutions', 'Technology that fits the way you work.', 'Combine IT support, custom development and software planning into a practical approach for your organisation.', businessServices]; return <><Intro eyebrow={info[0]} title={info[1]}>{info[2]}</Intro><section className="section product-section"><Cards items={info[3]} /></section><Process /><CTA /></> }
export default function App({ initialRoute = '/' }) {
 const [route, setRoute] = useState(initialRoute)
 useEffect(() => { setRoute(location.pathname + location.search) }, [])
 const [menuOpen,setMenuOpen] = useState(false)
 const [rawPath,query = ''] = route.split('?')
 const path = rawPath.replace(/\/$/, '') || '/'

 const product = products.find(item => path === `/products/${item.slug}`)
 useEffect(() => { const metadata = getMetadata(path); document.title = metadata.title; document.querySelector('meta[name=description]')?.setAttribute('content', metadata.description); if (!metadata.known) { const tag = document.createElement('meta'); tag.name = 'robots'; tag.content = 'noindex'; document.head.append(tag) } },[path])
 let page
 if (path === '/') page = <Home />
 else if (path === '/it-services') page = <ServicePage type="it" />
 else if (path === '/web-development') page = <ServicePage type="web" />
 else if (path === '/business-solutions') page = <ServicePage type="business" />
 else if (path === '/products') page = <Products />
 else if (product) page = <Product product={product} />
 else if (path === '/about') page = <><Intro eyebrow="About GAP TECH" title="Practical technology. Personal service.">GAP TECH provides practical IT services, support and software solutions for individuals, businesses and organisations.</Intro><section className="section services"><h2>Support. Build. Innovate.</h2><p className="page-lead">Our approach brings managed IT services, custom development and planned software products together. We focus on understanding your needs, explaining the options clearly and choosing tools that make everyday work easier.</p><Cards items={[["People first", "Clear communication and practical help for people with different levels of technical confidence."], ["Built around your work", "Solutions shaped around small businesses, community organisations and growing teams."]]} /></section><Audience /><CTA /></>
 else if (path === '/contact') page = <Contact key={route} interest={new URLSearchParams(query).get('interest') || ''} />
 else page = <><Intro eyebrow="Page not found" title="Let’s get you back on track.">This page does not exist. Use the navigation to explore our services and products.</Intro><section className="section"><a className="button dark" href="/">Return home →</a></section></>
 return <><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content').focus(); document.getElementById('main-content').scrollIntoView() }}>Skip to content</a><Header path={path} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} /><main id="main-content" tabIndex="-1">{page}</main><Footer /></>
}
