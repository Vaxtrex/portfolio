# Vaxtrex Portfolio - Component Reference Guide

## 📑 Table of Contents

1. [HTML Structure Reference](#html-structure-reference)
2. [CSS Classes & Components](#css-classes--components)
3. [JavaScript Functions & Events](#javascript-functions--events)
4. [Animation Details](#animation-details)
5. [Color Palette](#color-palette)
6. [Typography Scale](#typography-scale)

---

## HTML Structure Reference

### Navigation Component

```html
<nav class="navbar">
    <div class="nav-container">
        <div class="logo">
            <span class="logo-text">Vaxtrex</span>
        </div>
        <div class="nav-menu">
            <a href="#section" class="nav-link">Link</a>
        </div>
        <a href="#contact" class="nav-cta">Get In Touch</a>
    </div>
</nav>
```

**Features:**
- Fixed positioning (z-index: 100)
- Backdrop blur effect
- Underline animation on hover
- Responsive: menu hidden on mobile

### Hero Section

```html
<section class="hero">
    <div class="hero-content">
        <div class="hero-text">
            <h1 class="hero-title">
                <span class="title-word">SAMAR</span>
                <span class="title-word">SINGH</span>
            </h1>
        </div>
        <div class="hero-subtitle">
            <span class="subtitle-line">Text</span>
        </div>
        <p class="hero-description">Description text</p>
        <div class="hero-buttons">
            <a href="#" class="btn btn-primary">Primary</a>
            <a href="#" class="btn btn-secondary">Secondary</a>
        </div>
    </div>
    <div class="hero-background">
        <div class="hero-texture"></div>
    </div>
</section>
```

**Animations:**
- Title word reveal (staggered 0.1s each)
- Subtitle lines fade in (0.35s-0.45s)
- Description fade up (0.5s delay)
- Buttons fade up (0.6s delay)

### Section Title

```html
<h2 class="section-title">Title Text</h2>
```

**Features:**
- Uses `--font-grotesk` (Space Grotesk)
- Font size: clamp(2rem, 8vw, 4rem)
- Letter spacing: -0.01em
- Opacity animation on scroll

### Two-Column Grid

```html
<div class="container">
    <div class="about-grid">
        <div class="about-left">
            <h2 class="section-title">Left Content</h2>
        </div>
        <div class="about-right">
            <!-- Content -->
        </div>
    </div>
</div>
```

**Responsive:**
- Grid: 1fr 1fr (desktop)
- Grid: 1fr (mobile)
- Gap: 4rem (desktop), 2rem (mobile)

### Project Card

```html
<div class="project-card" data-project="1">
    <div class="project-image">
        <div class="image-placeholder"></div>
    </div>
    <div class="project-info">
        <h3 class="project-name">Project Name</h3>
        <p class="project-category">Category</p>
        <p class="project-description">Description</p>
    </div>
</div>
```

**Features:**
- Hover: translateY(-8px), scale effect
- Click: Opens modal with project details
- Aspect ratio: 16/10
- Border: 1px solid var(--border-color)

### Skill Card

```html
<div class="skill-card">
    <h3 class="skill-title">Skill Name</h3>
    <p class="skill-desc">Description</p>
    <div class="skill-tools">
        <span class="skill-tool">Tool 1</span>
        <span class="skill-tool">Tool 2</span>
    </div>
    <div class="skill-progress">
        <div class="progress-bar" style="--progress: 90%"></div>
    </div>
</div>
```

**CSS Variables:**
- `--progress`: Percentage (0-100%)
- Auto-animates on scroll trigger

### Timeline Item

```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3 class="timeline-title">Title</h3>
            <p class="timeline-company">Company</p>
            <p class="timeline-date">Date</p>
            <p class="timeline-description">Description</p>
        </div>
    </div>
</div>
```

**Features:**
- Left border: 1px gradient
- Marker: 12px circle with halo
- Staggered fade-in animations

### Contact Form

```html
<form class="contact-form" id="contactForm">
    <div class="form-group">
        <input type="text" placeholder="Name" class="form-input">
    </div>
    <textarea placeholder="Message" class="form-input"></textarea>
    <button type="submit" class="btn btn-primary btn-submit">Send Message</button>
</form>
```

**Features:**
- Glassmorphic input styling
- Focus states with border color change
- Submit button shows success message

### Modal

```html
<div class="modal" id="projectModal">
    <div class="modal-close">&times;</div>
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title">Project Title</h2>
        </div>
        <div class="modal-body">
            <div class="modal-image"></div>
            <div class="modal-details">
                <p class="modal-description">Description</p>
                <div class="modal-services">
                    <h4>Services</h4>
                    <ul>
                        <li>Service</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Features:**
- Z-index: 200 (above navbar)
- Backdrop blur filter
- Click outside to close
- Smooth slide-up animation

---

## CSS Classes & Components

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.container` | Max-width 1400px wrapper |
| `.section-title` | Large heading styling |
| `.btn` | Base button style |
| `.btn-primary` | White background button |
| `.btn-secondary` | Transparent bordered button |
| `.scroll-trigger` | Element animation trigger |

### Layout Classes

| Class | Purpose |
|-------|---------|
| `.hero` | Full-screen hero section |
| `.about-grid` | Two-column grid |
| `.projects-grid` | Auto-fit project grid |
| `.skills-grid` | Auto-fit skills grid |
| `.process-grid` | Process card grid |
| `.contact-content` | Contact layout grid |

### State Classes

| Class | Purpose |
|-------|---------|
| `.active` | Active state (nav links, modal) |
| `.animated` | Has been animated (prevents repeat) |
| `.loaded` | Image loaded successfully |
| `.light-mode` | Dark/light mode toggle |

### Text Classes

| Class | Purpose |
|-------|---------|
| `.hero-title` | Large hero heading |
| `.hero-subtitle` | Subtitle lines |
| `.hero-description` | Intro paragraph |
| `.project-name` | Project title |
| `.project-category` | Project category tag |
| `.timeline-title` | Timeline heading |
| `.stat-label` | Statistic label |

---

## JavaScript Functions & Events

### Lenis Smooth Scroll

```javascript
const lenis = new Lenis({
    duration: 1.2,  // Scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2
});
```

**Usage:**
```javascript
lenis.scrollTo(element, {
    offset: -80,
    duration: 1.2
});
```

### GSAP Animations

**Scroll Trigger Setup:**
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.from(element, {
    scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
});
```

### Mouse Follow Glow

```javascript
document.addEventListener('mousemove', (e) => {
    gsap.to(mouseGlow, {
        x: e.clientX - 150,
        y: e.clientY - 150,
        duration: 0.5,
        overwrite: 'auto'
    });
});
```

**Disabled on:** Screens < 1024px width

### Magnetic Button Effect

```javascript
button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
    });
});
```

### Project Modal

**Open:**
```javascript
projectCard.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});
```

**Close:**
```javascript
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});
```

### Stat Counter

```javascript
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}
```

### Form Submission

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Visual feedback
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Message Sent!';
    
    // Reset after 2s
    setTimeout(() => {
        btn.textContent = 'Send Message';
        contactForm.reset();
    }, 2000);
});
```

### Intersection Observer

**Scroll-triggered animations:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-trigger').forEach(el => {
    observer.observe(el);
});
```

---

## Animation Details

### Text Reveal

| Element | Delay | Duration | Effect |
|---------|-------|----------|--------|
| `.title-word` 1 | 0.1s | 0.6s | fade + slideUp |
| `.title-word` 2 | 0.2s | 0.6s | fade + slideUp |
| `.subtitle-line` | 0.3-0.45s | 0.8s | fade + slideUp |
| `.hero-description` | 0.5s | 0.8s | fade + slideUp |

### Scroll Animations

| Element | Trigger | Effect |
|---------|---------|--------|
| `.section-title` | top 80% | opacity 0→1, y: 40→0 |
| `.project-card` | visible | staggered (0.05s each) |
| `.skill-card` | visible | staggered (0.05s each) |
| `.progress-bar` | scroll | width: 0→var(--progress) |

### Hover Effects

| Element | Effect |
|---------|--------|
| `.nav-link` | underline animation |
| `.btn-primary` | translateY(-2px), shadow |
| `.btn-secondary` | background fill, shadow |
| `.project-card` | translateY(-8px), brightness(1.1) |
| `.skill-card` | translateY(-4px), border change |

### Parallax

- `.hero-background`: Moves 100px as you scroll past hero
- Opacity transitions from 0.5→1→0.5

---

## Color Palette

### Primary Colors

```css
--bg-primary: #050505      /* Deep black */
--bg-secondary: #0b0b0b    /* Slightly lighter black */
--bg-card: #0f0f0f         /* Card background */
```

### Text Colors

```css
--text-primary: #ffffff         /* White */
--text-secondary: #9c9c9c       /* Light gray */
--text-tertiary: #6c6c6c        /* Medium gray */
```

### Borders

```css
--border-color: rgba(255, 255, 255, 0.08)
```

### Usage

```css
background-color: var(--bg-primary);
color: var(--text-secondary);
border: 1px solid var(--border-color);
```

---

## Typography Scale

### Font Families

```css
--font-grotesk: 'Space Grotesk', sans-serif     /* Headlines */
--font-inter: 'Inter', sans-serif               /* Body text */
```

### Font Sizes (Responsive)

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| `.hero-title` | 3rem | 6vw | 10rem |
| `.section-title` | 2rem | 5vw | 4rem |
| `.project-name` | 1.1rem | 1.2rem | 1.3rem |
| `.skill-title` | 1rem | 1.1rem | 1.2rem |
| Body text | 0.95rem | 1rem | 1rem |

### Font Weights

```css
300  /* Light - rarely used */
400  /* Regular - default */
500  /* Medium - secondary text */
600  /* Semibold - labels */
700  /* Bold - headings */
```

### Line Heights

```css
1.2  /* Headings */
1.6  /* Body text */
1.8  /* Large text blocks */
1.9  /* About section */
```

---

## Custom Animations

### `@keyframes titleReveal`

```css
from {
    opacity: 0;
    transform: translateY(30px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
```

### `@keyframes fadeInUp`

```css
from {
    opacity: 0;
    transform: translateY(20px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
```

### `@keyframes progressFill`

```css
from {
    width: 0;
}
to {
    width: var(--progress);
}
```

---

## Transition Timings

```css
--transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-slow: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
--transition-elastic: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px (mouse glow enabled)

---

## Z-Index Stack

```
210 - Modal close button
200 - Modal overlay
100 - Navigation bar
99  - Scroll progress bar
10  - Hero content
2   - Mouse glow
1   - Film grain overlay
0   - Background
```

---

## Performance Notes

### Critical CSS
- Film grain overlay (small)
- Navigation styling
- Hero section layout

### Non-Critical CSS
- Animation delays
- Hover effects
- Auxiliary components

### JavaScript Optimization
- RequestAnimationFrame for smooth animations
- Lazy loading for images
- Debounced scroll events
- Intersection Observer for efficiency

---

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 90+ | ✅ Full | All features supported |
| Firefox 88+ | ✅ Full | All features supported |
| Safari 14+ | ✅ Full | All features supported |
| Edge 90+ | ✅ Full | All features supported |
| IE 11 | ❌ None | Not supported |

---

## File Sizes

- `index.html`: ~15 KB
- `styles.css`: ~25 KB
- `script.js`: ~20 KB
- Total (uncompressed): ~60 KB
- Total (gzipped): ~15 KB

---

## CDN Dependencies

1. **GSAP** (63 KB)
   - gsap.min.js
   - ScrollTrigger.min.js

2. **Lenis** (40 KB)
   - lenis.js (bundled)

3. **Google Fonts** (Variable)
   - Space Grotesk
   - Inter

**Total Load**: ~150-200 KB (depends on fonts)

---

## Configuration Files Needed

### `.htaccess` (Apache)

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### `web.config` (IIS)

```xml
<rewrite>
    <rules>
        <rule name="ForceHTTPS" stopProcessing="true">
            <match url=".*" />
            <conditions>
                <add input="{HTTPS}" pattern="off" />
            </conditions>
            <action type="Redirect" url="https://{HTTP_HOST}{REQUEST_URI}" />
        </rule>
    </rules>
</rewrite>
```

---

**Version**: 1.0  
**Last Updated**: 2025  
**Created for**: Samar Singh / Vaxtrex
