# Deploying Sidestreet Technology (Rayo static site) to S3 + CloudFront

This folder is a static HTML/CSS/JS site (no build step). Upload its contents to an
S3 bucket configured for static website hosting, and serve through CloudFront.

## Steps
1. Create an S3 bucket (e.g. `sidestreet-tech-site`) and enable Static Website Hosting.
2. Set the index document to `index.html` and error document to `404.html`.
3. Upload everything in this folder (preserve the folder structure: css/, js/, img/, fonts/).
4. Make the objects publicly readable (bucket policy) or front with CloudFront + OAC.
5. Point your domain (sidestreet.tech) at the CloudFront distribution via Route 53.

## Notes
- index.html is the homepage. Pages: about-us, services, pricing, team, faq,
  blog-standard, blog-article, contact, project-details, 404.
- Contact form posts via mail.php on PHP hosts; on S3 you'll want to wire the form to a
  service (e.g. Formspree, HubSpot, or an API Gateway + Lambda). The HubSpot scheduler
  link and hello@sidestreet.tech are already in place as fallbacks.

## Image licensing
Photographs are from Unsplash, used under the Unsplash License (free for commercial use,
no attribution required — https://unsplash.com/license). They are stock placeholders chosen
to fit the brand; replace with real Sidestreet photography (office, team, local clients)
when available. The founder/team photo slots are stock stand-ins — swap for a real photo of
Joshua before launch.
