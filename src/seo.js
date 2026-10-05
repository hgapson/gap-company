import { products } from './data/products'
const pages = {
 '/': ['IT Support & Website Development', 'Practical IT support, website development and custom software for small businesses, community organisations and growing teams. Discuss your needs with GAP TECH.'],
 '/it-services': ['IT Support, Networks & Microsoft 365', 'Get practical help with computers, networks, Microsoft 365, email, cloud systems and ongoing IT maintenance. Explore GAP TECH IT services.'],
 '/web-development': ['Websites & Custom Software Development', 'Plan a business website, customer portal or custom application with GAP TECH. Explore web development, integrations and ongoing website care.'],
 '/business-solutions': ['Technology Solutions for Business & Community', 'Explore IT support, collaboration tools and custom workflows for small businesses, NGOs and community organisations with GAP TECH.'],
 '/about': ['About GAP TECH', 'Established in 2024, GAP TECH has helped more than 20 businesses and organisations. Discover our approach to IT support, websites and digital solutions.'],
 '/contact': ['Contact GAP TECH', 'Discuss an IT problem, website or custom software project with GAP TECH. Tell us your goals, current setup and what you would like to improve.'],
 '/products': ['Planned Software Products', 'Explore GAP TECH’s planned software concepts for service desks, CRM, volunteers, property maintenance and education. Products are not yet available.'],
}
for (const product of products) pages[`/products/${product.slug}`] = [`${product.name} — Planned Software`, `${product.problem} Explore the ${product.name} concept for ${product.audience.toLowerCase()}. Not yet available; register interest.`]
export const routes = Object.keys(pages)
export function getMetadata(path) {
 const page = pages[path]
 return { title: `${page?.[0] || 'Page not found'} | GAP TECH`, description: page?.[1] || 'This page could not be found. Explore GAP TECH services or contact us.', known: !!page }
}
