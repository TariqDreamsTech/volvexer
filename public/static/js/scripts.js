// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
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
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Create WhatsApp message
    const message = `Hello! I'm interested in your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message || 'No additional message'}

Please contact me for more information.`;

    // Open WhatsApp with pre-filled message
    openWhatsApp(message);

    // Reset form
    document.getElementById('contact-form').reset();
    showNotification('Form submitted successfully! Redirecting to WhatsApp...', 'success');
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
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
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

// Initialize lazy loading
initializeLazyLoading();

// Export functions for global access
window.openWhatsApp = openWhatsApp;
window.scrollToCalculator = scrollToCalculator;
window.calculateTax = calculateTax;
window.prevTestimonial = prevTestimonial;
window.nextTestimonial = nextTestimonial;

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