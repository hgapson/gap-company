import { useEffect, useRef } from 'react'
import Brand from './Brand'

// Full page list is also used by the footer. The header groups development under services.
export const navigation = [['/', 'Home'], ['/about', 'About Us'], ['/it-services', 'IT Services'], ['/products', 'IT Products'], ['/web-development', 'Web Development'], ['/business-solutions', 'Business Solutions'], ['/contact', 'Contact']]
const serviceLinks = [['/it-services', 'IT Support & Services'], ['/web-development', 'Web Development']]

export default function Header({ menuOpen, onMenuToggle, onNavigate, path }) {
 const servicesRef = useRef(null)
 useEffect(() => {
  const closeOutside = event => {
   if (!servicesRef.current?.contains(event.target)) servicesRef.current?.removeAttribute('open')
  }
  document.addEventListener('pointerdown', closeOutside)
  return () => document.removeEventListener('pointerdown', closeOutside)
 }, [])
 useEffect(() => { servicesRef.current?.removeAttribute('open') }, [menuOpen, path])
 function navigate() {
  servicesRef.current?.removeAttribute('open')
  onNavigate()
 }
 function dismiss(event) {
  if (event.key === 'Escape' && servicesRef.current?.open) {
   event.preventDefault()
   servicesRef.current.removeAttribute('open')
   servicesRef.current.querySelector('summary')?.focus()
  }
 }
 return <header className={`site-header ${menuOpen ? 'open' : ''}`}>
  <Brand />
  <button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-controls="nav">{menuOpen ? 'Close' : 'Menu'}</button>
  <nav id="nav" aria-label="Main navigation">
   {navigation.filter(([url]) => url !== '/web-development').map(([url, label]) => url === '/it-services' ?
    <details className={`nav-services ${serviceLinks.some(([href]) => href === path) ? 'is-current' : ''}`} key={url} ref={servicesRef} onKeyDown={dismiss} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.removeAttribute('open') }}>
     <summary>IT Services <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" /></svg></summary>
     <div className="nav-services-links">{serviceLinks.map(([href, title]) => <a key={href} href={href} onClick={navigate} aria-current={path === href ? 'page' : undefined}>{title}</a>)}</div>
    </details> :
    <a key={url} href={url} onClick={navigate} aria-current={path === url ? 'page' : undefined} className={url === '/contact' ? 'nav-cta' : ''}>{label}</a>
   )}
  </nav>
 </header>
}
