# London Doodles

A Next.js website for London Doodles, a family-run dog breeding business in North London. The site features a modern design and is fully content-managed through Decap CMS.

View the site at [londondoodles.netlify.app](https://londondoodledogs.com)

## Features

- Responsive design optimized for all devices
- Content management through Decap CMS
- Dynamic sections managed by content editors:
  - Hero banner
  - About panels with carousel
  - Feature grid with Material icons
  - Masonry image gallery
  - Upcoming litters section
  - Testimonials
  - Contact form from formspree
- Image optimization with Next.js Image component
- Smooth scrolling navigation
- Modern SCSS architecture with variables and mixins

## Technical Details

### Built With
- [Next.js](https://nextjs.org/)
- [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- SCSS Modules
- [Material Icons](https://fonts.google.com/icons)
- [Google Fonts](https://fonts.google.com/) (Mulish, Dawning of a New Day)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) for authentication

### Content Management
The site uses Decap CMS for content management, allowing non-technical users to:
- Update text content and images
- Manage testimonials
- Update upcoming litters information
- Modify feature sections
- Add/remove gallery images

All content is stored as Markdown files in the repository.

## Development

1. Clone the repository
```bash
git clone https://github.com/tascott/london-doodles-decap.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. For local CMS development:
   - Run `npx netlify-cms-proxy-server`
   - Add `local_backend: true` to `public/admin/config.yml`
   - Navigate to `http://localhost:3000/admin`

## Deployment
The site is deployed on Netlify with continuous deployment from the main branch. Any changes made through the CMS or direct commits will trigger a new build.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
