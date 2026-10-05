# GAP TECH website

## Homepage

The homepage prioritises services that customers can enquire about now: IT support, websites and business workflows. Each card opens Contact with the relevant interest selected. It also includes four owner-confirmed website projects (Waikato Refugee Forum, Waikato Navigate Trust, Ephata Initiatives Trust and DearEcho Project), audience groups, an introduction to the GAP TECH approach, the working process and a final enquiry action. The Contact page includes six accessible FAQ disclosures below the enquiry form. Planned products appear in a smaller section and remain clearly labelled unavailable.

The existing cream, green and dark-blue design is retained. Homepage content lives in `src/sections/Home.jsx`.

No testimonials, client logos, results, founder credentials or personal photos have been invented. The owner supplied the four project names; URLs, project details, imagery and permission-approved feedback can be added when available. Add a real personal introduction when supplied. Confirm the existing Hamilton and nationwide support claims on Contact before launch.

## Routing and search visibility

Pages now use real paths, such as `/it-services`, instead of hash routes. Navigation uses ordinary page links, so native back/forward, opening a new tab and rendered links work without a client-side router. Existing `#/...` bookmarks redirect to the equivalent path when JavaScript loads.

`npm run build` runs `scripts/build.mjs`. It creates full HTML for all 12 public pages, plus `404.html`, before React hydrates the page. The output includes unique page titles and descriptions, Open Graph metadata and working links. `src/seo.js` supplies shared route metadata. Product descriptions accurately identify concepts as planned.

Without `SITE_URL`, generated pages contain `noindex, follow`: development previews should not compete with the future public site. No fake domain, canonical URL or sitemap is generated. `robots.txt` permits crawling so a publicly accessible preview's noindex tag can be read. This is not access control for private content.

When ready to launch, set `SITE_URL` to the final HTTPS origin in `.env.production.local` or the deployment environment and rebuild. Example syntax (replace the example address):

```sh
SITE_URL=https://your-domain.example npm run build
```

This enables indexing on known pages and generates absolute canonical URLs, social page URLs, Organization structured data, and `sitemap.xml`. A stable public hosting address can also be used; purchasing a domain is not required to build or preview. Search engines cannot index a site that only runs locally, and technical readiness does not guarantee rankings.

Deploy `dist` as a static site, preserving its directory structure. Configure hosting to serve each directory's `index.html`, normalise page URLs to trailing slashes, and return the generated `404.html` with HTTP 404 for unknown paths. Do not use an all-paths-to-homepage SPA fallback: that would serve the wrong initial content and metadata. Hosting redirects and actual HTTP status codes must be verified with the chosen host. Submit the sitemap in Search Console after publication and ownership verification.

## Enquiries

The current form prepares an email to `hgapson@gmail.com` in the visitor's email app. It does not send or store messages automatically, and its labels explain that. Interest query parameters preselect the service after hydration. A direct email link remains available.

Direct form delivery still requires a configured backend or a form delivery service and receiving account. No service was available/configured during this change. Do not put private mail-service credentials into browser code. A business-domain address can replace the current address after the domain and mailbox exist.

## Development and verification

```sh
npm run dev
npm run build
node scripts/check-build.mjs
npm run preview
```

The production and development build modes were verified. Checks cover all 12 rendered pages, one primary heading per page, unique titles, internal page links, referenced assets, indexing settings, canonical URLs, sitemap entries and noindex on the 404 page. To check a launch build, pass the same `SITE_URL` to both build and check commands.

Local HTTP checks also passed for the homepage, IT services page and contact page with an interest query. No browser was connected for visual or interactive checks in this session. Before publication, review desktop and mobile layouts, keyboard interaction, the mobile menu, FAQ disclosures, legacy hash redirects, service interest preselection and the email handoff. Test direct page requests and 404 responses on the final host.

## Project portfolio assets

Project names, descriptions and owner-confirmed service roles live in `src/data/projects.js`. Website development and IT support are listed for WRF, WNT and Ephata; DearEcho lists website development only. Summaries reflect the screenshots supplied in chat, without claiming measured results or endorsements.

The four supplied screenshots are stored in `public/images/` and linked explicitly in the project data:

- `waikato-refugee-forum.png`
- `waikato-navigate-trust.png`
- `ephata-initiatives-trust.png`
- `dearecho.png`

Public assets use `/images/...` URLs. Rebuild with `npm run build` to update the production preview after changing images or project data. Public website URLs are still pending.

## About page

`src/sections/About.jsx` presents GAP TECH’s approach, confirmed website and IT support experience, and its service and planned-product direction. It links to the homepage portfolio. A founder biography, qualifications, photo remain pending owner-provided details. The owner confirmed GAP TECH started in 2024 and has helped more than 20 businesses and organisations. The About page includes these facts, illustrative service images, actual project screenshots and simple principle icons. No credentials or client endorsements are invented.
