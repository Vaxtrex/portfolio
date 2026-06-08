// =====================================================
// PREMIUM 3D PHOTO BOOK - ADVANCED CONFIGURATION
// =====================================================

/**
 * This file contains advanced customization options.
 * Copy any configuration object to script.js to customize your book.
 */

// =====================================================
// THEME CONFIGURATIONS
// =====================================================

// DARK ELEGANT (Default)
const THEME_DARK_ELEGANT = {
    name: 'Dark Elegant',
    colors: {
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
        pageBackground: 'linear-gradient(135deg, #f5f5f0 0%, #e8e8e0 100%)',
        coverBackground: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
        coverText: '#ffffff',
        accent: 'rgba(138, 43, 226, 0.2)',
    },
    shadows: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.15)',
        deep: '0 20px 60px rgba(0, 0, 0, 0.7)',
        inner: 'inset 0 0 30px rgba(0, 0, 0, 0.08)',
    }
};

// WARM LUXURY
const THEME_WARM_LUXURY = {
    name: 'Warm Luxury',
    colors: {
        background: 'linear-gradient(135deg, #3d2817 0%, #5c3d2e 50%, #4a3728 100%)',
        pageBackground: 'linear-gradient(135deg, #faf5f0 0%, #f5ebe0 100%)',
        coverBackground: 'linear-gradient(135deg, #8b6f47 0%, #6b5344 100%)',
        coverText: '#ffffff',
        accent: 'rgba(212, 165, 116, 0.3)',
    }
};

// MINIMALIST LIGHT
const THEME_MINIMALIST_LIGHT = {
    name: 'Minimalist Light',
    colors: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
        pageBackground: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        coverBackground: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
        coverText: '#333333',
        accent: 'rgba(100, 100, 100, 0.1)',
    }
};

// OCEAN BLUE
const THEME_OCEAN_BLUE = {
    name: 'Ocean Blue',
    colors: {
        background: 'linear-gradient(135deg, #001a4d 0%, #003d99 50%, #0052cc 100%)',
        pageBackground: 'linear-gradient(135deg, #f0f5ff 0%, #e6f0ff 100%)',
        coverBackground: 'linear-gradient(135deg, #003d99 0%, #0052cc 100%)',
        coverText: '#ffffff',
        accent: 'rgba(0, 82, 204, 0.2)',
    }
};

// ROSE GOLD
const THEME_ROSE_GOLD = {
    name: 'Rose Gold',
    colors: {
        background: 'linear-gradient(135deg, #2d1b17 0%, #4a2c26 50%, #3d2a24 100%)',
        pageBackground: 'linear-gradient(135deg, #fef8f5 0%, #fdf0eb 100%)',
        coverBackground: 'linear-gradient(135deg, #c9a67b 0%, #a68570 100%)',
        coverText: '#ffffff',
        accent: 'rgba(201, 166, 123, 0.2)',
    }
};

// =====================================================
// ANIMATION PRESETS
// ===================================================

// SLOW & SMOOTH (Cinematic)
const ANIMATION_CINEMATIC = {
    dragThreshold: 40,
    swipeThreshold: 40,
    turnDuration: 800,
    easingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    description: 'Slow, smooth page turns for premium feel'
};

// FAST & SNAPPY (Modern)
const ANIMATION_MODERN = {
    dragThreshold: 60,
    swipeThreshold: 60,
    turnDuration: 350,
    easingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    description: 'Fast and responsive page turns'
};

// BALANCED (Default)
const ANIMATION_BALANCED = {
    dragThreshold: 50,
    swipeThreshold: 50,
    turnDuration: 600,
    easingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    description: 'Perfect balance of speed and elegance'
};

// =====================================================
// PHOTO GRID LAYOUTS
// ===================================================

const GRID_LAYOUTS = {
    // Classic 2x2 grid
    CLASSIC: {
        columns: 2,
        rows: 2,
        gap: '20px',
        photosPerPage: 4,
        description: '2x2 grid (4 photos per page)'
    },

    // Wide gallery
    GALLERY: {
        columns: 3,
        rows: 2,
        gap: '15px',
        photosPerPage: 6,
        description: '3x2 grid (6 photos per page)'
    },

    // Focused single
    SPOTLIGHT: {
        columns: 1,
        rows: 1,
        gap: '20px',
        photosPerPage: 1,
        description: '1 large photo per page'
    },

    // Asymmetric
    MAGAZINE: {
        columns: 'auto',
        rows: 'auto',
        gap: '25px',
        photosPerPage: 3,
        description: 'Asymmetric magazine-style layout'
    }
};

// =====================================================
// TEXT CONFIGURATIONS
// ===================================================

const COVER_TEXTS = {
    ELEGANT: {
        title: 'Memories',
        subtitle: 'A Digital Photo Album',
        endTitle: 'The End',
        endSubtitle: 'Thank you for visiting'
    },

    MINIMAL: {
        title: 'Photos',
        subtitle: '',
        endTitle: 'Fin',
        endSubtitle: ''
    },

    ROMANTIC: {
        title: 'Our Story',
        subtitle: 'In photographs',
        endTitle: 'Forever',
        endSubtitle: 'And beyond'
    },

    PROFESSIONAL: {
        title: 'Portfolio',
        subtitle: 'Professional Work',
        endTitle: 'Contact',
        endSubtitle: 'Let\'s create together'
    }
};

// =====================================================
// RESPONSIVE BREAKPOINTS
// ===================================================

const RESPONSIVE_BREAKPOINTS = {
    DESKTOP: {
        breakpoint: 1024,
        pageWidth: 'auto',
        scale: 1,
        description: 'Full 3D experience'
    },
    TABLET: {
        breakpoint: 768,
        pageWidth: '95vw',
        scale: 0.9,
        description: 'Optimized for tablets'
    },
    MOBILE: {
        breakpoint: 480,
        pageWidth: '100vw',
        scale: 0.8,
        description: 'Mobile-optimized layout'
    }
};

// =====================================================
// SAMPLE IMAGE COLLECTIONS
// ===================================================

const SAMPLE_PHOTOS = {
    NATURE: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop',
    ],
    PEOPLE: [
        'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=400&h=400&fit=crop',
    ],
    ARCHITECTURE: [
        'https://images.unsplash.com/photo-1479839672679-a46482290d4d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1512207736139-c3dc2d4801aa?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1479839672679-a46482290d4d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1512207736139-c3dc2d4801aa?w=400&h=400&fit=crop',
    ],
    ABSTRACT: [
        'https://images.unsplash.com/photo-1555097462-c2dfc97620a5?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1557672172-298e090d0f80?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1549887534-f3bda7d5acf8?w=400&h=400&fit=crop',
    ]
};

// =====================================================
// KEYBOARD SHORTCUTS CONFIGURATION
// ===================================================

const KEYBOARD_SHORTCUTS = {
    NEXT_PAGE: 'ArrowRight',
    PREV_PAGE: 'ArrowLeft',
    FULLSCREEN: 'F',
    UPLOAD: 'U',
    PLAY_AUDIO: 'Space'
};

// =====================================================
// USAGE EXAMPLES
// ===================================================

/**
 * EXAMPLE 1: Apply a custom theme
 * 
 * In script.js, add this after creating the PhotoBook instance:
 * 
 * function applyTheme(theme) {
 *     const root = document.documentElement;
 *     root.style.setProperty('--bg-primary', theme.colors.background);
 *     root.style.setProperty('--page-bg', theme.colors.pageBackground);
 * }
 * 
 * applyTheme(THEME_WARM_LUXURY);
 */

/**
 * EXAMPLE 2: Change animation style
 * 
 * In PhotoBook constructor, replace config with:
 * 
 * this.config = ANIMATION_CINEMATIC;
 */

/**
 * EXAMPLE 3: Use different photo collections
 * 
 * In PhotoBook constructor:
 * 
 * this.photos = SAMPLE_PHOTOS.NATURE;
 */

/**
 * EXAMPLE 4: Custom cover text
 * 
 * Modify createCoverPage() to use COVER_TEXTS.ROMANTIC
 */

// =====================================================
// PERFORMANCE OPTIMIZATION SETTINGS
// ===================================================

const PERFORMANCE_SETTINGS = {
    // Preload all images before showing book
    PRELOAD_ALL: true,
    
    // Enable hardware acceleration
    ENABLE_GPU: true,
    
    // Use request animation frame for smooth animation
    USE_RAF: true,
    
    // Debounce resize events
    RESIZE_DEBOUNCE: 250,
    
    // Maximum concurrent image loads
    MAX_CONCURRENT_LOADS: 4,
    
    // Cache DOM queries
    USE_CACHED_QUERIES: true
};

// =====================================================
// EXPORT FOR USE IN SCRIPT.JS
// ===================================================

// Uncomment and use as needed:
// export {
//     THEME_DARK_ELEGANT,
//     ANIMATION_BALANCED,
//     SAMPLE_PHOTOS,
//     COVER_TEXTS,
// };
