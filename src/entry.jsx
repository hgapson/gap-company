import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './main'
import './styles.css'
// Keep old bookmarks working while all new links use real page paths.
if (location.hash.startsWith('#/')) location.replace(location.hash.slice(1))
else {
 const root = document.getElementById('root')
 const app = <App initialRoute={location.pathname} />
 if (root.hasChildNodes()) hydrateRoot(root, app)
 else createRoot(root).render(app)
}
