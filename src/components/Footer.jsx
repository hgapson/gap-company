import Brand from './Brand'

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-brand"><Brand /><p>Practical technology. Personal service.</p></div>
    <div className="footer-links" aria-label="Footer navigation">
      <div><strong>Explore</strong><a href="#services">Services</a><a href="#why-us">Why us</a><a href="#process">How it works</a></div>
      <div><strong>Get in touch</strong><a href="#contact">Start a conversation</a><a href="#contact">Request IT support</a><a href="#contact">Website enquiries</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} GAP Tech Solutions</span><a href="#top">Back to top ↑</a></div>
  </footer>
}
