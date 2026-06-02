# Sidestreet Technology — Static Website (S3-ready)

This folder is a flat, fully static export of the Sidestreet Technology site. There is no
server, no Node.js, and no build step required to host it — just upload the contents and serve.

## What's here

- `index.html` — the home page
- One folder per page, each containing an `index.html` (e.g. `about-us/`, `contact/`,
  `our-service/`). This is why the site uses "trailing slash" URLs like `/about-us/`.
- `_next/` — compiled CSS and JavaScript
- `images/`, `css/`, `font/`, `icons/` — all static assets
- `404.html` — the not-found page

All asset links are root-absolute (e.g. `/images/...`, `/_next/...`), so the site must be
served from the root of a bucket or domain (not a sub-path like `example.com/site/`).

## Option A — Quick test locally

```bash
cd out
python3 -m http.server 8000
# then open http://localhost:8000
```

## Option B — S3 static website hosting (simplest)

1. Create an S3 bucket (e.g. `sidestreet-tech-site`).
2. Upload everything in this folder to the bucket root:
   ```bash
   aws s3 sync . s3://YOUR-BUCKET-NAME/ --delete
   ```
3. Enable static website hosting on the bucket:
   - Index document: `index.html`
   - Error document: `404.html`
4. Make the objects publicly readable (bucket policy below), or keep the bucket private
   and serve through CloudFront (Option C — recommended for a real domain + HTTPS).

Minimal public-read bucket policy (replace the bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
  }]
}
```

The site is then available at the bucket's website endpoint, e.g.
`http://YOUR-BUCKET-NAME.s3-website-us-east-1.amazonaws.com`.

## Option C — CloudFront + custom domain (recommended for production)

Use this for `sidestreet.tech` with HTTPS:

1. Keep the S3 bucket private; put CloudFront in front of it (Origin Access Control).
2. Set the CloudFront **Default root object** to `index.html`.
3. Because pages live at `/about-us/index.html` etc., add a CloudFront Function (or
   Lambda@Edge) on viewer-request to append `index.html` to directory paths, OR rely on
   S3 website-endpoint origin which resolves `index.html` automatically. The website-endpoint
   approach is simpler.
4. Point Route 53 (or your DNS) at the CloudFront distribution and attach an ACM certificate
   for `sidestreet.tech`.

## Content-type note

`aws s3 sync` sets content types automatically for common extensions. If you upload another
way and CSS/JS serve as `text/plain`, set types explicitly, e.g.:

```bash
aws s3 cp _next s3://YOUR-BUCKET/_next --recursive \
  --content-type "text/css" --exclude "*" --include "*.css"
```

## Re-generating this export

The source lives in the main repo under `website/`. To rebuild the static files:

```bash
# in the Next.js project, with this next.config.js:
#   output: 'export', images: { unoptimized: true }, trailingSlash: true
npm install
npm run build      # produces the ./out folder
```

## Still to do before launch

- Replace the hero/section placeholder stock images with real photos.
- Wire the contact and newsletter forms — static HTML can't process form posts on its own.
  Point them at a form service (Formspree, Basin, or an API Gateway + Lambda), or embed your
  HubSpot form, since the sister company already uses HubSpot.
- Swap the role-placeholder team cards for real hires (or trim to just Joshua).

## Image licensing

The photographs used as section/hero/blog/case imagery are sourced from Unsplash and are used
under the Unsplash License (free for commercial and non-commercial use, no attribution required).
See https://unsplash.com/license. They are stock placeholders chosen to fit the brand — replace
with real Sidestreet photography (office, team, local clients) when available. The founder photo
slot (images/avatar/team-member-1.jpg) is a stock stand-in and should be swapped for a real photo
of Joshua before launch.
