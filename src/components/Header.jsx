import Brand from './Brand'
export const navigation = [['/', 'Home'], ['/about', 'About Us'], ['/it-services', 'IT Services'], ['/products', 'IT Products'], ['/web-development', 'Web Development'], ['/business-solutions', 'Business Solutions'], ['/contact', 'Contact']]
export default function Header({ menuOpen, onMenuToggle, onNavigate, path }) {
 return <header className={`site-header ${menuOpen ? 'open' : ''}`}><Brand /><button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-controls="nav">{menuOpen ? 'Close' : 'Menu'}</button><nav id="nav" aria-label="Main navigation">{navigation.map(([url,label]) => <a key={url} href={`${url}`} onClick={onNavigate} aria-current={path === url ? 'page' : undefined} className={url === '/contact' ? 'nav-cta' : ''}>{label}</a>)}</nav></header>
}
