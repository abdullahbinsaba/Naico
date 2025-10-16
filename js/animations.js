// Animations for Naico & Company Website

class NaicoAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupLoadingStates();
    }

    setupScrollAnimations() {
        // Add scroll-triggered animations
        const animatedElements = document.querySelectorAll('.product-card, .feature-item');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => scrollObserver.observe(el));
    }

    setupHoverEffects() {
        // Enhanced hover effects for product cards
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.animateCardHover(e.currentTarget);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.animateCardLeave(e.currentTarget);
            });
        });
    }

    animateCardHover(card) {
        card.style.transform = 'translateY(-8px)';
        const image = card.querySelector('img');
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    }

    animateCardLeave(card) {
        card.style.transform = 'translateY(0)';
        const image = card.querySelector('img');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    }

    setupLoadingStates() {
        // Handle image loading states
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            img.addEventListener('error', () => {
                // If image fails to load, show placeholder
                const parent = img.parentElement;
                if (parent.classList.contains('product-image')) {
                    parent.innerHTML = `
                        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; color: #6b7280;">
                            <i class="fas fa-tools" style="font-size: 3rem;"></i>
                        </div>
                    `;
                }
            });
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NaicoAnimations();
});