/* ============================================
   SAMAR SINGH - VAXTREX PORTFOLIO
   JavaScript - Premium Cinematic Animations & Interactions
   ============================================ */

// ============================================
// LENIS SMOOTH SCROLL INITIALIZATION
// ============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ============================================
// GSAP REGISTRATION
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// OPTIMIZED EFFECTS - MINIMAL PERFORMANCE IMPACT
// ============================================
// Removed heavy particle animations for better performance
// The sunset theme glow effects are now handled via CSS

// ============================================
// HERO IMAGE PARALLAX EFFECT
// ============================================
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    document.addEventListener('mousemove', (e) => {
        const rect = heroImage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const moveX = (e.clientX - centerX) * 0.05;
        const moveY = (e.clientY - centerY) * 0.05;
        gsap.to(heroImage, { 
            x: moveX, 
            y: moveY, 
            duration: 0.6, 
            overwrite: 'auto' 
        });
    });
}

// ============================================
// MOUSE FOLLOW GLOW (Sunset Amber)
// ============================================
const mouseGlow = document.querySelector('.mouse-glow');

document.addEventListener('mousemove', (e) => {
    gsap.to(mouseGlow, {
        x: e.clientX - 50,
        y: e.clientY - 50,
        duration: 0.5,
        overwrite: 'auto'
    });
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SCROLL TRIGGER ANIMATIONS
// ============================================
gsap.utils.toArray('.section-title').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
    });
});

gsap.utils.toArray('.about-text').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
    });
});

// ============================================
// STAT COUNTER ANIMATION
// ============================================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.target === '100' ? '' : element.dataset.target === '50' ? '' : '');
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// PROJECT MODAL FUNCTIONALITY
// ============================================
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

const projectData = {
    '1': {
        name: 'Velocity & VFX',
        image: 'velocity and vfx.png',
        category: 'VFX | Motion Graphics',
        description: 'High-octane VFX sequences with seamless transitions and dynamic motion graphics. This commercial project showcased advanced video editing, intricate VFX work, and professional color grading to create an impactful visual narrative.',
        services: ['VFX Creation', 'Motion Graphics', 'Video Editing', 'Color Grading'],
        link: 'https://drive.google.com/file/d/1g8AntF5VrbhnUjOX8e94Afawhr5ETh8Q/view',
        linkText: 'View on Google Drive'
    },
    '2': {
        name: 'Gym Edits',
        image: 'gym edits.webp',
        category: 'Fitness | Reel Content',
        description: 'Dynamic fitness content with synchronized cuts, motivational music synchronization, and energetic pacing. Designed for viral engagement on social media platforms with punch-in cuts and professional color grading.',
        services: ['Video Editing', 'Color Grading', 'Motion Graphics', 'Audio Sync'],
        link: 'https://drive.google.com/file/d/1KGfgUgnNIyIovE_TS9x7wrngdRXJfFfd/view',
        linkText: 'View on Google Drive'
    },
    '3': {
        name: 'Reel Edits',
        image: 'reel edits.png',
        category: 'Social Media | Entertainment',
        description: 'Viral-worthy short-form content optimized for Instagram Reels and TikTok. Features quick cuts, trending transitions, and engaging visual effects designed to maximize audience engagement and shareability.',
        services: ['Reel Editing', 'Visual Effects', 'Trend Integration', 'Sound Design'],
        link: 'https://drive.google.com/file/d/1Hr29IxFlQ-Y8W9o-riWDMw-VHhCeHtq5/view',
        linkText: 'View on Google Drive'
    },
    '4': {
        name: 'Odisha Wheels',
        image: 'odisha wheels.webp',
        category: 'Brand | Commercial',
        description: 'Premium automotive brand showcase with cinematic production value. Includes product highlights, lifestyle shots, and professional color grading to position the brand as luxury and high-end.',
        services: ['Product Cinematography', 'Color Grading', 'Brand Editing', 'Graphic Design'],
        link: 'https://www.instagram.com/p/DMnBkJOxTuE/',
        linkText: 'View on Instagram'
    },
    '5': {
        name: 'Ontario Insurance',
        image: 'ontario insurance.webp',
        category: 'Corporate | Branding',
        description: 'Professional corporate video with comprehensive brand integration. Includes animated graphics, professional voiceover synchronization, and clean editing to communicate corporate values effectively.',
        services: ['Corporate Video Editing', 'Motion Graphics', 'Brand Integration', 'Graphic Design']
    },
    '6': {
        name: 'India-Canada Airlines',
        image: 'india canda airlines.png',
        category: 'Travel | Premium Brand',
        description: 'Luxury travel content capturing the essence of premium airline experience. Features cinematic shots, smooth transitions, and sophisticated color grading to communicate premium service and global reach.',
        services: ['Travel Cinematography', 'Cinematic Editing', 'Color Grading', 'Brand Storytelling']
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const data = projectData[projectId];
        
        document.querySelector('.modal-title').textContent = data.name;
        document.querySelector('.modal-description').textContent = data.description;
        
        // Update the modal image
        const modalImage = document.querySelector('.modal-image');
        modalImage.innerHTML = `<img src="${data.image}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
        
        const servicesList = document.querySelector('.modal-services ul');
        servicesList.innerHTML = '';
        data.services.forEach(service => {
            const li = document.createElement('li');
            li.textContent = service;
            servicesList.appendChild(li);
        });
        
        // Add link if available
        const modalLink = document.querySelector('.modal-link');
        if (data.link) {
            modalLink.innerHTML = `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="link-button">${data.linkText}</a>`;
            modalLink.style.display = 'block';
        } else {
            modalLink.style.display = 'none';
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
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
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3,
        });
    });
});

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    gsap.to(submitBtn, {
        opacity: 0.7,
        duration: 0.3,
    });
    
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            gsap.to(submitBtn, {
                opacity: 1,
                duration: 0.3,
            });
            contactForm.reset();
        }, 2000);
    }, 500);
});

// ============================================
// HOVER IMAGE DISTORTION
// ============================================
gsap.utils.toArray('.project-card').forEach((card) => {
    const image = card.querySelector('.image-placeholder');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        gsap.to(image, {
            backgroundPosition: `${x}% ${y}%`,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================
gsap.to('.hero-background', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    y: 100,
    opacity: 0.5,
});

// ============================================
// TEXT REVEAL ANIMATION
// ============================================
function revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    const words = text.split(' ');
    
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        element.appendChild(span);
        
        gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.05 * index,
        });
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight);
    
    if (document.querySelector('[data-scroll-progress]')) {
        document.querySelector('[data-scroll-progress]').style.width = (scrolled * 100) + '%';
    }
};

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .process-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// ============================================
// LAZY LOAD IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SMOOTH SCROLL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.2,
            });
        }
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    gsap.from('.navbar', {
        opacity: 0,
        y: -20,
        duration: 0.6,
    });
});

// ============================================
// SECTION ENTRANCE ANIMATIONS
// ============================================
gsap.utils.toArray('section').forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
        },
        opacity: 0,
        duration: 0.6,
    });
});

// ============================================
// RESIZE HANDLING
// ============================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ============================================
// ACCESSIBILITY - PREFERS REDUCED MOTION
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0.5);
    document.body.style.scrollBehavior = 'auto';
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%cVaxtrex - Premium Creative Studio', 'font-size: 20px; font-weight: bold; color: #ff8a3d;');
console.log('%cDesigned & Developed by Samar Singh', 'font-size: 12px; color: #ffb347;');
console.log('%cEmail: vaxtrex.svp@gmail.com | Instagram: @kaun.samar', 'font-size: 11px; color: #ffd27a;');
