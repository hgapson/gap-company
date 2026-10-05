import Brand from './Brand'
import { navigation } from './Header'
export default function Footer() {
 return <footer className="site-footer"><div className="footer-brand"><Brand /><p>Support. Build. Innovate.</p><p>Practical IT services and software for people and business.</p></div><div className="footer-links"><div><strong>Services & products</strong>{navigation.filter(([url]) => ['/it-services', '/products', '/web-development', '/business-solutions'].includes(url)).map(([url,label]) => <a key={url} href={`${url}`}>{label}</a>)}</div><div><strong>GAP TECH</strong><a href="/about">About us</a><a href="/contact">Start a conversation</a><a href="/">Home</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GAP TECH</span><span>Practical technology. Personal service.</span></div></footer>
}
