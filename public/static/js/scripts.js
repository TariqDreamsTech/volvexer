// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    }

    // Initialize all functionality
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeTaxCalculator();
    initializeTestimonialsSlider();
    initializeContactForm();
    initializeWhatsAppIntegration();
    initializeScrollEffects();
    // Hero animation logic
    const noticeIcon = document.getElementById('notice-icon');
    const weepText = document.getElementById('weep-text');
    const noticeAnim = document.getElementById('notice-anim');
    const reliefAnim = document.getElementById('relief-anim');
    if (noticeIcon && weepText && noticeAnim && reliefAnim) {
        const sadMessages = [
            'Please save me! Help me!',
            'I got a tax notice!',
            'I am so worried!',
            'What should I do now?',
            'I don\'t understand tax laws!',
            'I am scared of penalties!',
            'How do I file my taxes?',
            'I need urgent help!',
            'I can\'t sleep at night!',
            'I feel lost!',
            'Who will help me?',
            'I am confused!',
            'I am stressed about FBR!',
            'I don\'t want to pay a fine!',
            'I am afraid of making mistakes!',
            'I need a tax expert!',
            'I want to be safe!',
            'I am getting reminders!',
            'I want peace of mind!',
            'I am tired of paperwork!',
            'I want to avoid trouble!',
            'I am not a tax expert!',
            'I need someone to guide me!',
            'I want to be a filer!',
            'I want to avoid legal issues!'
        ];
        let count = 0;
        const maxCycles = sadMessages.length;
        function cycleHero() {
            if (count >= maxCycles) return;
            // Show sad with new message
            noticeAnim.style.display = 'flex';
            reliefAnim.style.display = 'none';
            noticeIcon.style.opacity = 1;
            weepText.textContent = sadMessages[count];
            weepText.style.opacity = 1;
            setTimeout(() => {
                // Show happy
                noticeAnim.style.display = 'none';
                reliefAnim.style.display = 'flex';
                setTimeout(() => {
                    count++;
                    cycleHero();
                }, 700);
            }, 700);
        }
        cycleHero();
    }
    // Hero background bubbles animation
    const bubbleMessages = [
        'Notice!', 'Penalty!', 'FBR Alert!', 'Tax Due!', 'Late Fee!', 'Audit!', 'Warning!', 'Overdue!',
        'Reminder!', 'Tax Bill!', 'Filing Required!', 'Deadline!', 'Fine!', 'Legal Action!', 'Unpaid Tax!',
        'Submit Now!', 'Attention!', 'Important!', 'Act Fast!', 'Tax Alert!'
    ];
    const heroBubbles = document.querySelector('.hero-bubbles');
    if (heroBubbles) {
        const bubbleCount = 8;
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble-message';
            heroBubbles.appendChild(bubble);
        }
        const bubbles = Array.from(heroBubbles.children);
        function animateBubble(bubble, delay = 0) {
            setTimeout(() => {
                // Pick a random message and position
                const msg = bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)];
                bubble.textContent = msg;
                const left = Math.random() * 80 + 5; // 5% to 85%
                bubble.style.left = left + '%';
                bubble.style.bottom = (Math.random() * 20 + 5) + '%';
                bubble.classList.remove('show');
                // Animate in
                setTimeout(() => {
                    bubble.classList.add('show');
                    // Animate out after 2.5s
                    setTimeout(() => {
                        bubble.classList.remove('show');
                        // Repeat after a short random delay
                        animateBubble(bubble, Math.random() * 1200 + 400);
                    }, 2500);
                }, 50);
            }, delay);
        }
        bubbles.forEach((bubble, idx) => animateBubble(bubble, idx * 400));
    }

    // Initialize network visualization
    initializeNetworkVisualization();
});

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Animate hamburger to X
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (mobileToggle.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    });

    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .team-member, .result-card');
    animateElements.forEach(el => observer.observe(el));
}

// Tax Calculator
function initializeTaxCalculator() {
    const calculateBtn = document.querySelector('.calculate-btn');
    const grossIncomeInput = document.getElementById('gross-income');

    // Calculate on input change
    grossIncomeInput.addEventListener('input', function () {
        if (this.value > 0) {
            calculateTax();
        }
    });

    // Calculate on year change
    const taxYearSelect = document.getElementById('tax-year');
    taxYearSelect.addEventListener('change', function () {
        updateTaxSlabsDisplay(this.value);
        if (grossIncomeInput.value > 0) {
            calculateTax();
        }
    });

    // Initialize tax slabs display
    updateTaxSlabsDisplay('2026');
}

function calculateTax() {
    const grossIncome = parseFloat(document.getElementById('gross-income').value) || 0;
    const taxYear = document.getElementById('tax-year').value;

    if (grossIncome <= 0) {
        resetCalculator();
        return;
    }

    const annualIncome = grossIncome * 12;
    let totalTax = 0;

    // Calculate tax based on selected year
    switch (taxYear) {
        case '2026':
            totalTax = calculateTax2026(annualIncome);
            break;
        case '2025':
            totalTax = calculateTax2025(annualIncome);
            break;
        case '2024':
            totalTax = calculateTax2024(annualIncome);
            break;
        case '2023':
            totalTax = calculateTax2023(annualIncome);
            break;
        case '2022':
            totalTax = calculateTax2022(annualIncome);
            break;
        case '2021':
            totalTax = calculateTax2021(annualIncome);
            break;
        case '2020':
            totalTax = calculateTax2020(annualIncome);
            break;
        default:
            totalTax = calculateTax2026(annualIncome);
    }

    const monthlyTax = totalTax / 12;
    const salaryAfterTax = grossIncome - monthlyTax;
    const annualSalary = grossIncome * 12;

    // Update results with animation
    animateNumber('monthly-tax', monthlyTax);
    animateNumber('salary-after-tax', salaryAfterTax);
    animateNumber('annual-tax', totalTax);
    animateNumber('annual-salary', annualSalary);
}

// Tax calculation functions for each year
function calculateTax2026(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.01;
    } else if (annualIncome <= 2200000) {
        return 6000 + (annualIncome - 1200000) * 0.11;
    } else if (annualIncome <= 3200000) {
        return 116000 + (annualIncome - 2200000) * 0.23;
    } else if (annualIncome <= 4100000) {
        return 346000 + (annualIncome - 3200000) * 0.30;
    } else {
        return 616000 + (annualIncome - 4100000) * 0.35;
    }
}

function calculateTax2025(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.05;
    } else if (annualIncome <= 2200000) {
        return 30000 + (annualIncome - 1200000) * 0.15;
    } else if (annualIncome <= 3200000) {
        return 180000 + (annualIncome - 2200000) * 0.25;
    } else if (annualIncome <= 4100000) {
        return 430000 + (annualIncome - 3200000) * 0.30;
    } else {
        return 700000 + (annualIncome - 4100000) * 0.35;
    }
}

function calculateTax2024(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.025;
    } else if (annualIncome <= 2400000) {
        return 15000 + (annualIncome - 1200000) * 0.125;
    } else if (annualIncome <= 3600000) {
        return 165000 + (annualIncome - 2400000) * 0.225;
    } else if (annualIncome <= 6000000) {
        return 435000 + (annualIncome - 3600000) * 0.275;
    } else {
        return 1095000 + (annualIncome - 6000000) * 0.35;
    }
}

function calculateTax2023(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.025;
    } else if (annualIncome <= 2400000) {
        return 15000 + (annualIncome - 1200000) * 0.125;
    } else if (annualIncome <= 3600000) {
        return 165000 + (annualIncome - 2400000) * 0.20;
    } else if (annualIncome <= 6000000) {
        return 405000 + (annualIncome - 3600000) * 0.25;
    } else if (annualIncome <= 12000000) {
        return 1005000 + (annualIncome - 6000000) * 0.325;
    } else {
        return 2955000 + (annualIncome - 12000000) * 0.35;
    }
}

function calculateTax2022(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.05;
    } else if (annualIncome <= 1800000) {
        return 30000 + (annualIncome - 1200000) * 0.10;
    } else if (annualIncome <= 2500000) {
        return 90000 + (annualIncome - 1800000) * 0.15;
    } else if (annualIncome <= 3500000) {
        return 195000 + (annualIncome - 2500000) * 0.175;
    } else if (annualIncome <= 5000000) {
        return 370000 + (annualIncome - 3500000) * 0.20;
    } else if (annualIncome <= 8000000) {
        return 670000 + (annualIncome - 5000000) * 0.225;
    } else if (annualIncome <= 12000000) {
        return 1345000 + (annualIncome - 8000000) * 0.25;
    } else if (annualIncome <= 30000000) {
        return 2345000 + (annualIncome - 12000000) * 0.275;
    } else if (annualIncome <= 50000000) {
        return 7295000 + (annualIncome - 30000000) * 0.30;
    } else if (annualIncome <= 75000000) {
        return 13295000 + (annualIncome - 50000000) * 0.325;
    } else {
        return 21420000 + (annualIncome - 75000000) * 0.35;
    }
}

function calculateTax2021(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.05;
    } else if (annualIncome <= 1800000) {
        return 30000 + (annualIncome - 1200000) * 0.10;
    } else if (annualIncome <= 2500000) {
        return 90000 + (annualIncome - 1800000) * 0.15;
    } else if (annualIncome <= 3500000) {
        return 195000 + (annualIncome - 2500000) * 0.175;
    } else if (annualIncome <= 5000000) {
        return 370000 + (annualIncome - 3500000) * 0.20;
    } else if (annualIncome <= 8000000) {
        return 670000 + (annualIncome - 5000000) * 0.225;
    } else if (annualIncome <= 12000000) {
        return 1345000 + (annualIncome - 8000000) * 0.25;
    } else if (annualIncome <= 30000000) {
        return 2345000 + (annualIncome - 12000000) * 0.275;
    } else if (annualIncome <= 50000000) {
        return 7295000 + (annualIncome - 30000000) * 0.30;
    } else if (annualIncome <= 75000000) {
        return 13295000 + (annualIncome - 50000000) * 0.325;
    } else {
        return 21420000 + (annualIncome - 75000000) * 0.35;
    }
}

function calculateTax2020(annualIncome) {
    if (annualIncome <= 600000) {
        return 0;
    } else if (annualIncome <= 1200000) {
        return (annualIncome - 600000) * 0.05;
    } else if (annualIncome <= 1800000) {
        return 30000 + (annualIncome - 1200000) * 0.10;
    } else if (annualIncome <= 2500000) {
        return 90000 + (annualIncome - 1800000) * 0.15;
    } else if (annualIncome <= 3500000) {
        return 195000 + (annualIncome - 2500000) * 0.175;
    } else if (annualIncome <= 5000000) {
        return 370000 + (annualIncome - 3500000) * 0.20;
    } else if (annualIncome <= 8000000) {
        return 670000 + (annualIncome - 5000000) * 0.225;
    } else if (annualIncome <= 12000000) {
        return 1345000 + (annualIncome - 8000000) * 0.25;
    } else if (annualIncome <= 30000000) {
        return 2345000 + (annualIncome - 12000000) * 0.275;
    } else if (annualIncome <= 50000000) {
        return 7295000 + (annualIncome - 30000000) * 0.30;
    } else if (annualIncome <= 75000000) {
        return 13295000 + (annualIncome - 50000000) * 0.325;
    } else {
        return 21420000 + (annualIncome - 75000000) * 0.35;
    }
}

function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const startValue = parseFloat(element.textContent) || 0;
    const duration = 1000;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (targetValue - startValue) * easeOutQuart;

        element.textContent = formatCurrency(currentValue);

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function resetCalculator() {
    const resultElements = ['monthly-tax', 'salary-after-tax', 'annual-tax', 'annual-salary'];
    resultElements.forEach(id => {
        document.getElementById(id).textContent = '0';
    });
}

function updateTaxSlabsDisplay(year) {
    const yearDisplay = document.getElementById('tax-year-display');
    const slabsDisplay = document.getElementById('tax-slabs-display');

    const taxSlabsInfo = {
        '2026': '0% (up to 600K), 1% (600K-1.2M), 11% (1.2M-2.2M), 23% (2.2M-3.2M), 30% (3.2M-4.1M), 35% (above 4.1M)',
        '2025': '0% (up to 600K), 5% (600K-1.2M), 15% (1.2M-2.2M), 25% (2.2M-3.2M), 30% (3.2M-4.1M), 35% (above 4.1M)',
        '2024': '0% (up to 600K), 2.5% (600K-1.2M), 12.5% (1.2M-2.4M), 22.5% (2.4M-3.6M), 27.5% (3.6M-6M), 35% (above 6M)',
        '2023': '0% (up to 600K), 2.5% (600K-1.2M), 12.5% (1.2M-2.4M), 20% (2.4M-3.6M), 25% (3.6M-6M), 32.5% (6M-12M), 35% (above 12M)',
        '2022': '0% (up to 600K), 5% (600K-1.2M), 10% (1.2M-1.8M), 15% (1.8M-2.5M), 17.5% (2.5M-3.5M), 20% (3.5M-5M), 22.5% (5M-8M), 25% (8M-12M), 27.5% (12M-30M), 30% (30M-50M), 32.5% (50M-75M), 35% (above 75M)',
        '2021': '0% (up to 600K), 5% (600K-1.2M), 10% (1.2M-1.8M), 15% (1.8M-2.5M), 17.5% (2.5M-3.5M), 20% (3.5M-5M), 22.5% (5M-8M), 25% (8M-12M), 27.5% (12M-30M), 30% (30M-50M), 32.5% (50M-75M), 35% (above 75M)',
        '2020': '0% (up to 600K), 5% (600K-1.2M), 10% (1.2M-1.8M), 15% (1.8M-2.5M), 17.5% (2.5M-3.5M), 20% (3.5M-5M), 22.5% (5M-8M), 25% (8M-12M), 27.5% (12M-30M), 30% (30M-50M), 32.5% (50M-75M), 35% (above 75M)'
    };

    if (yearDisplay && slabsDisplay) {
        yearDisplay.textContent = `${year} Tax Slabs:`;
        slabsDisplay.textContent = taxSlabsInfo[year] || taxSlabsInfo['2026'];
    }
}

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function initializeTestimonialsSlider() {
    if (testimonials.length === 0) return;

    // Show first testimonial
    showTestimonial(0);

    // Auto-rotate testimonials
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
        testimonial.style.opacity = i === index ? '1' : '0';
        testimonial.style.transform = i === index ? 'translateY(0)' : 'translateY(20px)';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleContactForm();
        });
    }
}

function handleContactForm() {
    if (!validateContactForm()) {
        return;
    }

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Show success notification
    showNotification('Thank you! We\'ll contact you soon via WhatsApp.', 'success', 'Message Sent!');

    // Open WhatsApp with pre-filled message
    const whatsappMessage = `Hello! I'm interested in ${formData.service} services. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}${formData.message ? `, Message: ${formData.message}` : ''}`;
    openWhatsApp(whatsappMessage);

    // Reset form
    document.getElementById('contact-form').reset();
}

// WhatsApp Integration
function initializeWhatsAppIntegration() {
    // Add click handlers for all WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('[onclick*="openWhatsApp"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const service = this.getAttribute('data-service') || '';
            openWhatsApp(service);
        });
    });
}

function openWhatsApp(message = '') {
    const phoneNumber = '93390625000';
    let url = `https://wa.me/${phoneNumber}`;
    if (message) {
        url += `?text=${encodeURIComponent(message)}`;
    }
    window.open(url, '_blank');
}

function trackWhatsAppClick(service = '') {
    // Analytics tracking (if needed)
    console.log('WhatsApp clicked:', service);

    // You can add Google Analytics or other tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': service || 'general'
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class for navbar styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Utility Functions
function showNotification(message, type = 'info', title = '', duration = 5000) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'success' ? 'fas fa-check-circle' :
        type === 'error' ? 'fas fa-exclamation-circle' :
            type === 'warning' ? 'fas fa-exclamation-triangle' : 'fas fa-info-circle';

    notification.innerHTML = `
        <i class="${icon} notification-icon"></i>
        <div class="notification-content">
            ${title ? `<div class="notification-title">${title}</div>` : ''}
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto remove
    if (duration > 0) {
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, duration);
    }
}

function scrollToCalculator() {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
        const offsetTop = calculatorSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle scroll events
const throttledScroll = debounce(function () {
    // Scroll event handling
}, 16);

window.addEventListener('scroll', throttledScroll);

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function (registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Notification System
function showNotification(message, type = 'info', title = '', duration = 5000) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'success' ? 'fas fa-check-circle' :
        type === 'error' ? 'fas fa-exclamation-circle' :
            type === 'warning' ? 'fas fa-exclamation-triangle' : 'fas fa-info-circle';

    notification.innerHTML = `
        <i class="${icon} notification-icon"></i>
        <div class="notification-content">
            ${title ? `<div class="notification-title">${title}</div>` : ''}
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto remove
    if (duration > 0) {
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, duration);
    }
}

// Live Chat Widget
let chatWidget = null;
let chatMessages = null;
let chatInput = null;
let isChatCollapsed = true;

function initializeChat() {
    chatWidget = document.getElementById('live-chat-widget');
    chatMessages = document.getElementById('chat-messages');
    chatInput = document.getElementById('chat-input-field');

    if (chatWidget) {
        // Start collapsed
        chatWidget.classList.add('collapsed');

        // Auto expand after 3 seconds
        setTimeout(() => {
            if (isChatCollapsed) {
                toggleChat();
            }
        }, 3000);
    }
}

function toggleChat() {
    if (!chatWidget) return;

    isChatCollapsed = !isChatCollapsed;
    chatWidget.classList.toggle('collapsed', isChatCollapsed);

    if (!isChatCollapsed && chatInput) {
        chatInput.focus();
    }
}

function sendChatMessage() {
    if (!chatInput || !chatMessages) return;

    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "Thank you for your message! Our tax experts will get back to you shortly. In the meantime, you can also reach us on WhatsApp for immediate assistance.",
            "I understand your concern. Let me connect you with our tax specialist who can help you with this specific issue.",
            "That's a great question! Our team of qualified tax professionals can guide you through the entire process.",
            "I'll forward your inquiry to our tax experts. They'll provide you with the most accurate and up-to-date information.",
            "Thank you for reaching out! Our team is here to help you with all your tax filing needs."
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
        <div class="message-time">${time}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // ... existing initialization code ...

    // Initialize chat
    setTimeout(() => {
        initializeChat();
    }, 2000);

    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to Volvexer! Get professional tax filing assistance.', 'success', 'Welcome!', 4000);
    }, 3000);
});

// Enhanced contact form validation
function validateContactForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const service = document.getElementById('service');

    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
        showNotification('Please enter your name', 'error', 'Validation Error');
        name.focus();
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        showNotification('Please enter a valid email address', 'error', 'Validation Error');
        email.focus();
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        showNotification('Please enter a valid phone number', 'error', 'Validation Error');
        phone.focus();
        isValid = false;
    }

    // Service validation
    if (!service.value) {
        showNotification('Please select a service', 'error', 'Validation Error');
        service.focus();
        isValid = false;
    }

    return isValid;
}

// Override the existing contact form handler
function handleContactForm() {
    if (!validateContactForm()) {
        return;
    }

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Show success notification
    showNotification('Thank you! We\'ll contact you soon via WhatsApp.', 'success', 'Message Sent!');

    // Open WhatsApp with pre-filled message
    const whatsappMessage = `Hello! I'm interested in ${formData.service} services. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}${formData.message ? `, Message: ${formData.message}` : ''}`;
    openWhatsApp(whatsappMessage);

    // Reset form
    document.getElementById('contact-form').reset();
}

// Add CSS for notifications
const notificationStyles = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification i {
        font-size: 1.25rem;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    
    [data-theme="dark"] .navbar.scrolled {
        background: rgba(17, 24, 39, 0.98) !important;
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Network Visualization
function initializeNetworkVisualization() {
    const networkCanvas = document.querySelector('.network-canvas');
    const connectionLines = document.querySelector('.connection-lines');
    const floatingStars = document.querySelector('.floating-stars');

    if (!networkCanvas || !connectionLines || !floatingStars) return;

    // Create connection lines between nodes
    createConnectionLines();

    // Create floating stars
    createFloatingStars();

    // Add hover effects for nodes
    addNodeHoverEffects();
}

function createConnectionLines() {
    const connectionLines = document.querySelector('.connection-lines');
    const upperNodes = document.querySelectorAll('.upper-node');
    const lowerNodes = document.querySelectorAll('.lower-node');

    if (!connectionLines || upperNodes.length === 0 || lowerNodes.length === 0) return;

    // Clear existing lines
    const existingLines = connectionLines.querySelectorAll('line');
    existingLines.forEach(line => line.remove());

    // Create connections from upper to lower nodes
    upperNodes.forEach((upperNode, upperIndex) => {
        lowerNodes.forEach((lowerNode, lowerIndex) => {
            // Create some strategic connections (not all to all)
            if (shouldConnect(upperIndex, lowerIndex)) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

                // Get positions
                const upperRect = upperNode.getBoundingClientRect();
                const lowerRect = lowerNode.getBoundingClientRect();
                const canvasRect = connectionLines.getBoundingClientRect();

                const x1 = upperRect.left + upperRect.width / 2 - canvasRect.left;
                const y1 = upperRect.top + upperRect.height - canvasRect.top;
                const x2 = lowerRect.left + lowerRect.width / 2 - canvasRect.left;
                const y2 = lowerRect.top - canvasRect.top;

                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', 'url(#lineGradient)');
                line.setAttribute('stroke-width', '2');
                line.setAttribute('stroke-dasharray', '10');
                line.setAttribute('stroke-dashoffset', '0');

                // Add animation delay based on position
                const delay = (upperIndex + lowerIndex) * 0.2;
                line.style.animationDelay = `${delay}s`;

                connectionLines.appendChild(line);
            }
        });
    });
}

function shouldConnect(upperIndex, lowerIndex) {
    // Create strategic connections - not all nodes connected to all
    const connections = [
        [0, 0], [0, 1], // Tax Calculator -> Validation, Submission
        [1, 1], [1, 2], // Accounting & Bookkeeping -> Submission, Confirmation
        [2, 0], [2, 3], // Security Check -> Validation, Support
        [3, 1], [3, 4], // AI Engineer -> Submission, Analytics
        [4, 2], [4, 3], // Expert Review -> Confirmation, Support
        [0, 4], [1, 4], [2, 4], [3, 4], [4, 4] // All to Analytics
    ];

    return connections.some(([u, l]) => u === upperIndex && l === lowerIndex);
}

function createFloatingStars() {
    const floatingStars = document.querySelector('.floating-stars');
    if (!floatingStars) return;

    // Clear existing stars
    floatingStars.innerHTML = '';

    // Create multiple stars
    const starCount = 15;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'floating-star';
        star.innerHTML = '★';

        // Random position and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 6 + Math.random() * 4; // 6-10 seconds

        star.style.left = `${left}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        floatingStars.appendChild(star);
    }
}

function addNodeHoverEffects() {
    const nodes = document.querySelectorAll('.node');

    nodes.forEach(node => {
        node.addEventListener('mouseenter', function () {
            // Highlight connected lines
            const nodeIndex = parseInt(this.getAttribute('data-node'));
            highlightConnectedLines(nodeIndex);

            // Add glow effect
            this.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
        });

        node.addEventListener('mouseleave', function () {
            // Remove line highlights
            const lines = document.querySelectorAll('.connection-lines line');
            lines.forEach(line => {
                line.style.opacity = '0.6';
                line.style.strokeWidth = '2';
            });

            // Remove glow effect
            this.style.filter = '';
        });
    });
}

function highlightConnectedLines(nodeIndex) {
    const lines = document.querySelectorAll('.connection-lines line');

    // Define which lines should be highlighted for each node
    const nodeConnections = {
        1: [0, 1], // Tax Calculator
        2: [2, 3], // Accounting & Bookkeeping
        3: [4, 5], // Security Check
        4: [6, 7], // AI Engineer
        5: [8, 9], // Expert Review
        6: [0, 4, 8], // Validation
        7: [1, 2, 6], // Submission
        8: [3, 8], // Confirmation
        9: [5, 9], // Support
        10: [4, 6, 7, 8, 9] // Analytics
    };

    const connectedLineIndices = nodeConnections[nodeIndex] || [];

    lines.forEach((line, index) => {
        if (connectedLineIndices.includes(index)) {
            line.style.opacity = '1';
            line.style.strokeWidth = '3';
        } else {
            line.style.opacity = '0.3';
            line.style.strokeWidth = '1';
        }
    });
}

// Update connection lines on window resize
window.addEventListener('resize', debounce(() => {
    createConnectionLines();
}, 250));

// Recreate floating stars periodically
setInterval(() => {
    createFloatingStars();
}, 10000); // Every 10 seconds 