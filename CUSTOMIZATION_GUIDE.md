# Vaxtrex Portfolio - Customization & Enhancement Guide

## 🎯 Quick Start

1. **Open `index.html`** in any web browser
2. All animations and effects are enabled by default
3. No build process or dependencies needed

## 🎨 Design Customization

### Change Brand Colors

**Example: Make it more blue-tinted luxury**

In `styles.css`, change the root variables:

```css
:root {
    --bg-primary: #0a0a15;              /* Slightly blue */
    --bg-secondary: #0f0f1f;            /* Darker blue tone */
    --bg-card: #12121f;
    --border-color: rgba(100, 200, 255, 0.08);  /* Blue borders */
    --text-primary: #e8e8ff;            /* Slight blue-white */
    --text-secondary: #8899bb;          /* Blue-gray */
    --text-tertiary: #556688;
}
```

### Add Gradient Accents

Edit the `.logo-text` gradient in `styles.css`:

```css
.logo-text {
    background: linear-gradient(135deg, #ff006e, #8338ec, #3a86ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Modify Animation Speed

Change GSAP timing in `script.js`:

```javascript
// Faster animations (default: 1.2)
const lenis = new Lenis({
    duration: 0.8,  // Faster scroll
    // ...
});

// Slower animations
const lenis = new Lenis({
    duration: 1.6,  // Slower scroll
    // ...
});
```

## 📸 Adding Real Images

### Method 1: Direct Image Path

```html
<div class="image-placeholder">
    <img src="path/to/image.jpg" alt="Project image">
</div>
```

### Method 2: Background Image with CSS

```html
<div class="image-placeholder" style="background-image: url('path/to/image.jpg');"></div>
```

### Method 3: Lazy Loading (Recommended)

```html
<img data-src="path/to/image.jpg" alt="Project" class="lazy-image">
```

Then the JavaScript will handle lazy loading automatically.

## 🎬 Add Video Content

### Hero Background Video

Replace the texture with a video background:

```html
<div class="hero-background">
    <video autoplay muted loop playsinline>
        <source src="hero-bg.mp4" type="video/mp4">
    </video>
</div>
```

Add CSS:
```css
.hero-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}
```

### Project Video Preview

```html
<div class="project-image">
    <video autoplay muted loop playsinline>
        <source src="project.mp4" type="video/mp4">
    </video>
</div>
```

## 🚀 Advanced Customizations

### Create Custom Section

```html
<section class="custom-section" id="custom">
    <div class="container">
        <h2 class="section-title">Your Custom Section</h2>
        <!-- Content here -->
    </div>
</section>
```

Add styling in `styles.css`:

```css
.custom-section {
    padding: 100px 0;
}

.custom-section .container {
    /* Custom styles */
}
```

### Add Scroll Animation to Custom Section

In `script.js`:

```javascript
gsap.from('.custom-section .section-title', {
    scrollTrigger: {
        trigger: '.custom-section',
        start: 'top 80%',
        end: 'top 20%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
});
```

### Create Custom Button Hover Effect

```css
.btn-custom {
    position: relative;
    overflow: hidden;
}

.btn-custom::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-custom:hover::before {
    width: 300px;
    height: 300px;
}
```

## 📱 Mobile-Specific Customizations

### Adjust Font Sizes for Mobile

```css
@media (max-width: 640px) {
    .hero-title {
        font-size: 2.5rem;  /* Smaller on mobile */
    }
    
    .section-title {
        font-size: 1.5rem;
    }
}
```

### Hide Elements on Mobile

```css
@media (max-width: 640px) {
    .mouse-glow {
        display: none;  /* Hide glow on mobile */
    }
    
    .nav-menu {
        display: none;  /* Hide desktop menu */
    }
}
```

### Mobile Menu (Optional)

Add hamburger menu in HTML:

```html
<button class="hamburger" id="hamburger">☰</button>
<nav class="mobile-nav" id="mobileNav">
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
</nav>
```

Add JavaScript:

```javascript
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
```

## 🎨 Add Dark/Light Mode Toggle

Add HTML button:

```html
<button class="theme-toggle" id="themeToggle">🌙</button>
```

Add JavaScript:

```javascript
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Restore theme on page load
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}
```

Add CSS:

```css
body.light-mode {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #050505;
    --text-secondary: #6c6c6c;
}
```

## 🔗 Integration Examples

### Add Google Analytics

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### Connect Email Form to Formspree

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### Connect to Netlify Forms

```html
<form name="contact" method="POST" netlify class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

## 🎯 Performance Tuning

### Reduce Animation Frame Rate

In `script.js`, modify the RAF function:

```javascript
let frameCount = 0;

function raf(time) {
    frameCount++;
    
    // Only update every 2 frames (30fps instead of 60fps)
    if (frameCount % 2 === 0) {
        lenis.raf(time);
    }
    
    requestAnimationFrame(raf);
}
```

### Disable Animations on Low-End Devices

```javascript
// Detect device capabilities
const hasEnoughPerformance = !navigator.hardwareConcurrency || navigator.hardwareConcurrency > 2;

if (!hasEnoughPerformance) {
    // Disable GSAP animations
    gsap.timeline().pause();
    
    // Use simple CSS transitions instead
    document.body.classList.add('reduced-motion');
}
```

## 🎪 Interactive Elements

### Add Testimonials Slider

```html
<section class="testimonials">
    <div class="testimonial-container">
        <div class="testimonial-slide">
            <p class="testimonial-text">"Amazing portfolio!"</p>
            <p class="testimonial-author">- Client Name</p>
        </div>
    </div>
</section>
```

### Add Blog/Case Studies

```html
<section class="case-studies">
    <div class="case-study-card">
        <h3>Case Study Title</h3>
        <p>Challenge, Solution, Results</p>
        <a href="/case-studies/project.html">Read More →</a>
    </div>
</section>
```

### Add Social Media Feed

```html
<section class="social-feed">
    <div id="instagram-feed"></div>
</section>

<script src="https://cdn.jsdelivr.net/gh/jsco/instagram-feed@1.0.2/dist/index.min.js"></script>
<script>
    const feed = new InstagramFeed({
        accessToken: 'YOUR_INSTAGRAM_TOKEN',
        container: '#instagram-feed'
    });
</script>
```

## 📊 Analytics & Tracking

### Track Section Views

```javascript
gsap.utils.toArray('section').forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        onEnter: () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'section_view', {
                    'section_name': section.id
                });
            }
        }
    });
});
```

### Track Button Clicks

```javascript
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                'button_text': btn.textContent
            });
        }
    });
});
```

## 🔧 Troubleshooting

### Animations Not Playing
- Check if JavaScript is enabled
- Check browser console for errors (F12)
- Verify GSAP CDN is loading
- Check if `prefers-reduced-motion` is enabled

### Smooth Scroll Not Working
- Verify Lenis library is loaded
- Check `script.js` for errors
- Try refreshing page
- Clear browser cache

### Images Not Showing
- Verify correct file paths
- Check image file exists
- Ensure CORS headers if loading from external domain
- Check browser console for 404 errors

### Performance Issues
- Check DevTools Performance tab
- Disable unused animations
- Optimize image sizes
- Reduce number of animated elements

## 💡 Pro Tips

1. **Use CSS Custom Properties** for theme management
2. **Lazy load images** for better initial load time
3. **Minify CSS/JS** before production deployment
4. **Test across devices** to ensure responsive design
5. **Use WebP images** for smaller file sizes
6. **Monitor lighthouse score** regularly
7. **Keep animations smooth** (60fps target)
8. **Optimize font loading** with `font-display: swap`

## 📚 Resources

- **GSAP Docs**: https://gsap.com/docs/
- **Lenis**: https://lenis.darkroom.engineering/
- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/
- **Web.dev**: https://web.dev/

## ✨ Featured Enhancement Ideas

1. **Scroll-based text effects** - Text that changes as you scroll
2. **3D transforms** - CSS 3D perspective effects
3. **SVG animations** - Animate SVG paths
4. **Intersection Observer animations** - More granular control
5. **Keyboard shortcuts** - Keyboard navigation
6. **Voice control** - Accessibility enhancement
7. **AR/VR elements** - WebXR integration
8. **Real-time stats** - Live project counter

---

**Note**: This website is designed for modern browsers. Some features may require polyfills for older browser support.
