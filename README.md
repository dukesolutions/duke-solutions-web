# Duke Solutions - Professional Construction Website

A modern, responsive website for Duke Solutions built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with black and titanium color scheme
- **Easy to Edit**: All content is centralized in `app/data.ts` for easy updates
- **SEO Optimized**: Built-in SEO best practices
- **Fast Performance**: Optimized for speed and performance
- **Gallery**: Showcase completed projects with image gallery

## Pages

- **Home**: Landing page with featured services and call-to-action
- **Services**: Complete list of all services offered
- **About Us**: Company information and contact details
- **Gallery**: Portfolio of completed projects

## Getting Started

### Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```bash
npm run build
npm start
```

## Editing Content

All website content can be edited in `app/data.ts`:

- **Company Information**: Name, phone, email, address, hours
- **Services**: Add/edit/remove services
- **Service Areas**: Update service coverage areas
- **Gallery Images**: Add/edit gallery items

## Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

The site will be live in minutes!

## Adding Photos to Gallery

To add photos to the gallery:

1. Open `app/data.ts`
2. Find the `galleryImages` array
3. Add a new object with:
   - `id`: Unique number
   - `title`: Project title
   - `category`: Project category
   - `image`: URL to the image

Example:
```typescript
{
  id: 7,
  title: "Kitchen Renovation",
  category: "Kitchen",
  image: "https://example.com/image.jpg",
}
```

## Technology Stack

- **Next.js 16**: React framework
- **React 19**: UI library
- **Tailwind CSS 4**: Styling
- **TypeScript**: Type safety

## Support

For questions or issues, contact: psicoduke@gmail.com

---

© 2024 Duke Solutions. All rights reserved.
