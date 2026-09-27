# GAP TECH website walkthrough

The supplied brief positions GAP TECH as a full IT solutions company, with services and products under one brand. This implementation retains the existing React, Vite, Tailwind and logo setup.

## 1. Establish the company positioning

The homepage introduces IT support, software and digital solutions for businesses and communities. Three equally prominent cards lead to IT services, web/software development and products. IT support remains the first card so the website does not appear to be only an app catalogue.

## 2. Organise the navigation

Seven main pages follow the brief: Home, IT Services, Software Products, Web Development, Business Solutions, About and Contact. Header and footer links share this structure. Mobile visitors use a collapsible menu. Hash routes work on static hosts without server rewrite configuration; browser back/forward and direct product links are supported.

The application and page layouts are in `src/main.jsx`. Navigation is in `src/components/Header.jsx` and the footer is in `src/components/Footer.jsx`.

## 3. Explain the services

IT Services covers all eight requested areas: support, computer setup/troubleshooting, networks, Microsoft 365/email, cloud support, cybersecurity basics, consulting and maintenance. Web Development covers websites, portals, custom applications and ongoing care. Business Solutions explains how services combine around business and community needs.

## 4. Present products honestly

`src/data/products.js` contains GAP ServiceDesk, GAP CRM, GAP Volunteer, GAP Property and GAP Education. Each has a dedicated page with its problem, audience, proposed features, illustrative interface, future demo enquiry and quote/customisation enquiry.

The source document describes systems to develop, so all five are labelled planned. Interface previews are explicitly illustrations, not real screenshots. No live demo, release date or price is invented. GAP Education features are proposed because the brief gives its name but no scope.

The roadmap also includes the remaining ideas. Volunteer management and property maintenance are represented by the named products; NGO CRM is represented by GAP CRM. Job readiness includes the application-manager concept. These entries describe possibilities rather than functioning software.

## 5. Handle enquiries

The enquiry form validates required name, email and message fields. Product links preselect the relevant demo or quotation interest. Submitting prepares an email addressed to hgapson@gmail.com using the visitor’s email app. The visitor reviews and sends the message there. Form values are retained, and a direct email link is available. This website does not send automatically or store enquiries.

For direct delivery without a visitor’s email app, a form delivery service or backend would need to be configured. A receiving email address alone does not create a server-side delivery service. Do not put private email-service credentials into frontend code.

## 6. Review the design and accessibility

The existing cream, green and dark-blue visual style and logo are retained. Added layouts adapt to smaller screens. Forms have labels, navigation exposes the current page, keyboard focus is visible, there is a skip link, and page changes update the browser title and focus the main content.

## 7. Run and check

Run `npm run dev` and open the URL shown by Vite. Run `npm run build` to produce the static site in `dist`; run `npm run preview` to preview that build.

The production build passed. Browser-based visual and interaction verification was unavailable in this session because no browser was connected. Before launch, check desktop and phone layouts, the mobile menu, all product links, back/forward navigation, required-field validation and the email enquiry handoff in a browser.

## Information still needed before publication

- Confirm the existing Hamilton location and nationwide service coverage.
- Enquiries use hgapson@gmail.com through the visitor’s email app. Direct server-side delivery is not configured.
- Confirm which products are genuinely planned, in development or available.
- Replace illustrative previews with real screenshots and demos when products exist.
- Confirm prices, actual product scope and launch dates before publishing those claims.
- Choose hosting and the domain. This local implementation has not been deployed.

## Design preference

Keep the existing visual design, colours and layout. Further changes should focus on the concept, content and necessary functionality.
