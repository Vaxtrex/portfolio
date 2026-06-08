# Vaxtrex - Premium Creative Studio Portfolio

A luxury, cinematic portfolio website for Samar Singh, a professional video editor, graphic designer, cinematographer, and AI creator.

## 🎨 Features

### Premium Design Elements
- **Dark Luxury Aesthetic** - Premium dark theme with sophisticated color palette
- **Minimalist Layout** - Clean, editorial-style design inspired by Framer Apex
- **Smooth Scrolling** - Lenis smooth scroll for fluid page navigation
- **Film Grain Overlay** - Subtle cinematic texture throughout the site
- **Mouse Follow Glow** - Elegant light effect that follows cursor movement

### Advanced Animations & Effects
- **GSAP ScrollTrigger Animations** - Dynamic animations triggered by scroll position
- **Text Reveal Animations** - Staggered text animations for dramatic effect
- **Parallax Effects** - Subtle depth and motion parallax on hero section
- **Magnetic Buttons** - Buttons that respond to mouse movement
- **Hover Distortion Effects** - Project cards with interactive hover states
- **Smooth Transitions** - Elegant section transitions and page elements

### Fully Responsive
- **Desktop Experience** - Premium editorial layout with full animations
- **Tablet Optimization** - Reorganized layout for medium screens
- **Mobile Experience** - Maintains luxury feel on small screens
- **Lazy Loading** - Optimized image loading for performance

### Complete Sections
1. **Hero Section** - Full-screen introduction with animated text
2. **About Section** - Two-column layout with animated statistics
3. **Experience Timeline** - Professional timeline with subtle animations
4. **Featured Projects** - Interactive project cards with modal functionality
5. **Skills Section** - Creative expertise with progress indicators
6. **Creative Process** - 4-step process visualization with connecting lines
7. **Contact Section** - Email, social links, and contact form with glassmorphism
8. **Footer** - Minimal, clean footer with social links

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling, animations, and responsive design
- **JavaScript (Vanilla)** - No frameworks, pure JavaScript for interactivity
- **GSAP** - Advanced animations and ScrollTrigger plugin
- **Lenis** - Smooth scroll library for elegant scrolling
- **Google Fonts** - Space Grotesk and Inter typography

## 📋 File Structure

```
samar bhai/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript interactions and animations
└── README.md           # This file
```

## 🎯 Customization Guide

### Colors & Design System

Edit CSS variables in `styles.css` root section:

```css
:root {
    --bg-primary: #050505;          /* Main background */
    --bg-secondary: #0b0b0b;        /* Cards background */
    --bg-card: #0f0f0f;             /* Light card background */
    --border-color: rgba(255, 255, 255, 0.08);
    --text-primary: #ffffff;        /* Main text */
    --text-secondary: #9c9c9c;      /* Secondary text */
    --text-tertiary: #6c6c6c;       /* Tertiary text */
}
```

### Typography

Fonts are loaded from Google Fonts:
- **Space Grotesk** - Headlines and large text
- **Inter** - Body text and interface

To change fonts, update the Google Fonts link and CSS variable in `styles.css`:

```css
--font-grotesk: 'Space Grotesk', sans-serif;
--font-inter: 'Inter', sans-serif;
```

### Brand Information

Update the following in `index.html`:

**Navigation:**
```html
<div class="logo">
    <span class="logo-text">Vaxtrex</span>
</div>
```

**Hero Section:**
```html
<h1 class="hero-title">
    <span class="title-word">SAMAR</span>
    <span class="title-word">SINGH</span>
</h1>
```

**About Section:**
- Update statistics: `data-target` attribute
- Update highlights: modify `.highlight-tag` elements

**Projects:**
Edit project data in `script.js`:

```javascript
const projectData = {
    '1': {
        name: 'Project Name',
        category: 'Category',
        description: 'Description',
        services: ['Service 1', 'Service 2']
    },
    // ... more projects
};
```

**Skills Section:**
Add or remove skill cards in HTML, update tools and progress bar values.

**Contact Information:**
```html
<a href="mailto:vaxtrex.svp@gmail.com" class="info-value">vaxtrex.svp@gmail.com</a>
<a href="https://instagram.com/kaun.samar" target="_blank" class="info-value">@kaun.samar</a>
```

**Footer:**
Update copyright year and social links.

## 🚀 Performance Optimization

### Current Optimizations
- Lazy loading ready for images
- Minimal external dependencies
- Optimized CSS animations using GSAP
- Smooth scroll without janky behavior
- Film grain effect uses SVG for efficiency
- Intersection Observer for scroll-triggered animations

### Further Optimization Tips

1. **Image Optimization**
   - Use WebP format for images
   - Implement lazy loading: `<img data-src="path.jpg" />`
   - Optimize image sizes before upload

2. **Critical CSS**
   - Inline critical CSS for above-the-fold content
   - Defer non-critical CSS

3. **JavaScript**
   - Minify `script.js` for production
   - Consider code splitting for large implementations

4. **Fonts**
   - Use `font-display: swap` (already implemented)
   - Consider system fonts as fallback

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Note: Older browsers may not support all CSS and JS features. Consider adding polyfills for IE11 support if needed.

## 🎬 Animation Details

### Scroll Trigger Animations
- Section titles fade in and slide up as they come into view
- Project cards animate in sequence
- Skills progress bars animate on scroll

### Parallax Effects
- Hero background moves at different speed than scroll
- Creates depth and cinematic feel

### Mouse-Follow Glow
- Disabled on mobile devices for performance
- Follows cursor with smooth easing
- Uses Gaussian blur for elegant effect

### Magnetic Buttons
- Buttons follow cursor within bounds
- Returns to center on mouse leave
- Smooth elastic easing

## 🔒 Security Considerations

- No sensitive data stored locally
- Contact form submission needs backend integration
- Currently shows client-side success message
- Email link uses `mailto:` for direct email client

### To Add Backend Form Submission

1. Set up a backend service (Node.js, PHP, etc.)
2. Update form submission in `script.js`:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    
    // Handle response
});
```

## 📊 Lighthouse Performance Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

Current optimizations should achieve these targets on modern hardware.

## 🎓 Code Quality

### CSS Organization
- Root variables for design system
- Logical section grouping
- Mobile-first responsive design
- Utility classes for common patterns

### JavaScript Best Practices
- Vanilla JavaScript (no framework bloat)
- Modular function organization
- Event delegation where applicable
- Performance-conscious animations

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Respects `prefers-reduced-motion` setting
- Proper color contrast ratios

## 🔗 External Libraries

### GSAP (3.12.2)
- URL: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
- ScrollTrigger: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js

### Lenis
- URL: https://cdn.jsdelivr.net/gh/darkroomengineering/lenis@latest/bundled/lenis.js
- Custom smooth scrolling solution

### Google Fonts
- Space Grotesk
- Inter

## 📧 Contact & Support

**Website Owner**: Samar Singh (Vaxtrex)
- Email: vaxtrex.svp@gmail.com
- Instagram: @kaun.samar
- Position: Senior GFX Artist at AuraReach Media

## 📄 License

This website is a professional portfolio. All design and creative work is proprietary to Samar Singh.

## 🚀 Deployment

### Simple Hosting Options
1. **Netlify** - Drag and drop deployment
2. **Vercel** - Optimized for fast loading
3. **GitHub Pages** - Free static hosting
4. **AWS S3 + CloudFront** - Enterprise solution

### Quick Deployment (Netlify)
1. Push files to GitHub
2. Connect repo to Netlify
3. Auto-deploy on push

### Custom Domain
- Update DNS records to point to hosting service
- Set up HTTPS/SSL certificate
- Configure redirects if needed

## 🎨 Design Inspiration

This portfolio is inspired by premium creative agency designs with emphasis on:
- Luxury aesthetic
- Cinematic storytelling
- Editorial design principles
- Minimalist elegance
- Professional production quality

## 📝 Version History

**v1.0** - Initial release
- Complete portfolio website
- All animations and effects
- Fully responsive
- Production-ready

---

**Last Updated**: 2025
**Created for**: Samar Singh / Vaxtrex Brand
