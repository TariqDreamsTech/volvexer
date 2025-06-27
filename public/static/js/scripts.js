// Advanced Volvexer Landing Page JavaScript
$(document).ready(function () {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Dark mode functionality
    const darkModeToggle = $('#dark-mode-toggle');
    const html = $('html');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.addClass('dark');
    }

    darkModeToggle.on('click', function () {
        html.toggleClass('dark');
        localStorage.setItem('darkMode', html.hasClass('dark'));

        // Add shake animation to toggle button
        $(this).addClass('animate-shake');
        setTimeout(() => {
            $(this).removeClass('animate-shake');
        }, 500);
    });

    // Loading screen
    setTimeout(() => {
        $('#loading-screen').fadeOut(1000, function () {
            $(this).remove();
            // Trigger initial animations
            $('.animate-fade-in-up').addClass('animate-fade-in-up');
        });
    }, 2000);

    // Mobile menu with enhanced animations
    $('#mobile-menu-btn').on('click', function () {
        const menu = $('#mobile-menu');
        const icon = $(this).find('i');

        if (menu.is(':visible')) {
            menu.slideUp(300);
            icon.removeClass('fa-times').addClass('fa-bars');
        } else {
            menu.slideDown(300);
            icon.removeClass('fa-bars').addClass('fa-times');
        }

        // Add shake animation
        $(this).addClass('animate-shake');
        setTimeout(() => {
            $(this).removeClass('animate-shake');
        }, 500);
    });

    // Close mobile menu when clicking on a link
    $('#mobile-menu a').on('click', function () {
        $('#mobile-menu').slideUp(300);
        $('#mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
    });

    // Ultra-fast smooth scrolling with enhanced effects
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));
        if (target.length) {
            // Add click animation
            $(this).addClass('animate-shake');
            setTimeout(() => {
                $(this).removeClass('animate-shake');
            }, 300);

            // Fast scroll with easing
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, {
                duration: 400,
                easing: 'easeInOutQuart',
                step: function (now, fx) {
                    if (fx.prop === 'scrollTop') {
                        // Add parallax effect during scroll
                        const scrolled = now;
                        $('.floating-shape').css('transform', `translateY(${scrolled * 0.1}px)`);
                    }
                }
            });
        }
    });

    // Enhanced active navigation highlighting
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop();

        $('section').each(function () {
            const top = $(this).offset().top - 100;
            const bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos < bottom) {
                const id = $(this).attr('id');
                $('nav a').removeClass('active');
                $(`nav a[href="#${id}"]`).addClass('active');
            }
        });

        // Navbar background effect
        if (scrollPos > 100) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    // Advanced scroll animations
    function animateOnScroll() {
        $('.service-card, .feature-card, .stat-item').each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                if (!$(this).hasClass('animated')) {
                    $(this).addClass('animated animate-fade-in-up');
                }
            }
        });
    }

    // Trigger animation on scroll
    $(window).on('scroll', animateOnScroll);
    animateOnScroll();

    // Enhanced contact form with advanced validation
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');
        const originalText = submitBtn.find('span').text();

        // Add loading state with animation
        submitBtn.addClass('loading').find('span').text('Sending...');

        // Simulate form submission with enhanced feedback
        setTimeout(function () {
            // Success animation
            submitBtn.removeClass('loading').addClass('success');
            submitBtn.find('span').html('<i class="fas fa-check mr-2"></i>Sent!');

            // Show success message with animation
            showNotification('Thank you for your message! We will get back to you soon.', 'success');

            // Reset form with animation
            form[0].reset();

            // Reset button after delay
            setTimeout(() => {
                submitBtn.removeClass('success').find('span').html(`<i class="fas fa-paper-plane mr-2"></i>${originalText}`);
            }, 3000);
        }, 2000);
    });

    // Enhanced service card interactions
    $('.service-card').on('mouseenter', function () {
        $(this).find('.service-icon').addClass('animate-pulse-fast');
        $(this).find('i').addClass('animate-bounce-in');
    }).on('mouseleave', function () {
        $(this).find('.service-icon').removeClass('animate-pulse-fast');
        $(this).find('i').removeClass('animate-bounce-in');
    });

    // Advanced stats counter animation
    function animateCounters() {
        $('.stat-number').each(function () {
            const $this = $(this);
            const target = parseInt($this.attr('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                $this.text(Math.floor(current));
            }, 16);
        });
    }

    // Trigger counter animation when stats section is visible
    $(window).on('scroll', function () {
        const statsSection = $('#about .bg-gradient-to-br');
        const sectionTop = statsSection.offset().top;
        const sectionBottom = sectionTop + statsSection.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
            if (!statsSection.hasClass('counted')) {
                statsSection.addClass('counted');
                animateCounters();
            }
        }
    });

    // Enhanced scroll to top button
    const scrollToTopBtn = $('<div class="scroll-to-top"><i class="fas fa-arrow-up"></i></div>');
    $('body').append(scrollToTopBtn);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            scrollToTopBtn.addClass('visible');
        } else {
            scrollToTopBtn.removeClass('visible');
        }
    });

    scrollToTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 600,
            easing: 'easeInOutQuart'
        });

        // Add click animation
        $(this).addClass('animate-shake');
        setTimeout(() => {
            $(this).removeClass('animate-shake');
        }, 500);
    });

    // Advanced parallax effect
    $(window).on('scroll', function () {
        const scrolled = $(window).scrollTop();
        const parallax = $('.floating-shape');
        const speed = scrolled * 0.1;

        parallax.css('transform', `translateY(${speed}px) rotate(${scrolled * 0.02}deg)`);
    });

    // Enhanced form input effects
    $('input, textarea').on('focus', function () {
        $(this).parent().addClass('focused');
        $(this).addClass('animate-pulse-fast');
    }).on('blur', function () {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
        $(this).removeClass('animate-pulse-fast');
    });

    // Add custom easing functions
    $.easing.easeInOutQuart = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };

    // Enhanced button interactions
    $('.cta-button, .secondary-button').on('click', function () {
        // Add ripple effect
        const ripple = $('<span class="ripple"></span>');
        $(this).append(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Add shake animation
        $(this).addClass('animate-shake');
        setTimeout(() => {
            $(this).removeClass('animate-shake');
        }, 500);
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="notification notification-${type}">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close"><i class="fas fa-times"></i></button>
            </div>
        `);

        $('body').append(notification);

        // Animate in
        notification.addClass('animate-slide-in');

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.fadeOut(300, function () {
                $(this).remove();
            });
        }, 5000);

        // Close button
        notification.find('.notification-close').on('click', function () {
            notification.fadeOut(300, function () {
                $(this).remove();
            });
        });
    }

    // Enhanced social link interactions
    $('.social-link').on('mouseenter', function () {
        $(this).addClass('animate-pulse-fast');
    }).on('mouseleave', function () {
        $(this).removeClass('animate-pulse-fast');
    });

    // Add CSS for advanced effects
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-left: 4px solid var(--primary);
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            
            .notification.success {
                border-left-color: #10b981;
            }
            
            .notification.animate-slide-in {
                transform: translateX(0);
            }
            
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #666;
                margin-left: auto;
            }
            
            .cta-button, .secondary-button {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            nav.scrolled {
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(20px);
            }
            
            .dark nav.scrolled {
                background: rgba(30, 41, 59, 0.95) !important;
            }
            
            .success {
                background: linear-gradient(135deg, #10b981, #059669) !important;
            }
        `)
        .appendTo('head');

    // Console welcome message with enhanced styling
    console.log(`
        %c🎉 Welcome to Volvexer! %c
        %c
        🚀 Advanced Features:
        - Ultra-fast smooth scrolling
        - Dark mode with persistence
        - Advanced animations (AOS)
        - Enhanced form interactions
        - Professional notification system
        - Parallax effects
        - Loading screen
        - Mobile-responsive design
        
        💡 Built with:
        - HTML5, CSS3, JavaScript
        - jQuery for interactions
        - TailwindCSS for styling
        - AOS for scroll animations
        - Flask for serving
        
        📧 Contact: info@volvexer.com
        %c
    `,
        'color: #1e40af; font-size: 20px; font-weight: bold;',
        'color: #3b82f6; font-size: 16px;',
        'color: #64748b; font-size: 14px; line-height: 1.5;',
        'color: #f59e0b; font-size: 12px;'
    );

    // Performance optimization
    let scrollTimeout;
    $(window).on('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Debounced scroll events for better performance
        }, 16);
    });

    // WhatsApp functionality
    function initWhatsAppFeatures() {
        // Add click tracking for WhatsApp buttons
        $('.whatsapp-btn, .whatsapp-nav-btn, .whatsapp-float').on('click', function () {
            const phoneNumber = $(this).attr('href').split('/').pop();
            console.log(`WhatsApp clicked: ${phoneNumber}`);

            // Add click animation
            $(this).addClass('animate-shake');
            setTimeout(() => {
                $(this).removeClass('animate-shake');
            }, 500);
        });

        // WhatsApp card hover effects
        $('.whatsapp-card').on('mouseenter', function () {
            $(this).find('.whatsapp-btn').addClass('animate-pulse-fast');
        }).on('mouseleave', function () {
            $(this).find('.whatsapp-btn').removeClass('animate-pulse-fast');
        });
    }

    // Enhanced user-friendly features
    function initUserFriendlyFeatures() {
        // Smooth scroll to top with progress indicator
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const docHeight = $(document).height() - $(window).height();
            const scrollPercent = (scrollTop / docHeight) * 100;

            // Update scroll progress (if you want to add a progress bar)
            $('.scroll-progress').css('width', scrollPercent + '%');
        });

        // Enhanced form interactions (if any forms are added later)
        $('input, textarea').on('focus', function () {
            $(this).parent().addClass('focused');
            $(this).addClass('animate-pulse-fast');
        }).on('blur', function () {
            if (!$(this).val()) {
                $(this).parent().removeClass('focused');
            }
            $(this).removeClass('animate-pulse-fast');
        });

        // Logo animation on hover
        $('.logo-container').on('mouseenter', function () {
            $(this).addClass('animate-pulse-fast');
        }).on('mouseleave', function () {
            $(this).removeClass('animate-pulse-fast');
        });
    }

    // Initialize all features
    initWhatsAppFeatures();
    initUserFriendlyFeatures();
}); 