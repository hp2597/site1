// DOM Query 1: Select the header element
const header = document.querySelector('header');

// DOM Query 2: Select the main heading in the hero section
const heroHeading = document.querySelector('.hero h1, .hero h2');

// DOM Query 3: Select the body element for day-based styling
const bodyElement = document.querySelector('body');

// DOM Query 4: Select footer for interactivity
const footer = document.querySelector('footer');

// DOM Query 5: Select navigation for mobile menu
const mainNav = document.querySelector('#mainNav');

function updateFooterText() {
    const currentYear = new Date().getFullYear();
    const pageName = document.title.split('—')[1]?.trim() || 'Buda Castle';
    
    footer.innerHTML = `<p>🏰 &copy; ${currentYear} Helen Park — Thank you for exploring ${pageName}! (Click again to reset)</p>`;
    
    // Change footer styling
    footer.style.fontWeight = 'bold';
    footer.style.fontSize = '1.05rem';
    
    // Add a reset functionality on second click
    footer.removeEventListener('click', updateFooterText);
    footer.addEventListener('click', resetFooter, { once: true });
}

function resetFooter() {
    const pageName = document.title.split('—')[1]?.trim() || 'Buda Castle';
    footer.innerHTML = `<p>&copy; 2025 Helen Park — ${pageName}.</p>`;
    footer.style.fontWeight = '';
    footer.style.fontSize = '';
    
    // Re-add the update listener
    footer.addEventListener('click', updateFooterText);
}

// This function changes the header background and styling when hovering
function changeHeaderStyle() {
    if (!bodyElement.classList.contains('dark-mode')) {
        header.style.backgroundColor = '#8B4513';
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.backgroundColor = '#3a3a3a';
        header.style.boxShadow = '0 4px 8px rgba(96, 165, 250, 0.3)';
    }
    header.style.transition = 'all 0.5s ease';
}

function resetHeaderStyle() {
    header.style.backgroundColor = '';
    header.style.boxShadow = '';
}

// BONUS: Toggle theme function (double-click hero heading)
function toggleTheme() {
    bodyElement.classList.toggle('dark-mode');
    
    // Update heading with emoji indicator
    const currentText = heroHeading.textContent.replace('🌙 ', '').replace('☀️ ', '');
    
    if (bodyElement.classList.contains('dark-mode')) {
        heroHeading.textContent = '🌙 ' + currentText;
        console.log('🌙 Dark mode activated');
    } else {
        heroHeading.textContent = '☀️ ' + currentText;
        console.log('☀️ Light mode activated');
    }
}

// EXTRA CREDIT: Mobile Navigation Toggle Function
function toggleMobileMenu() {
    mainNav.classList.toggle('nav-open');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mainNav.classList.contains('nav-open')) {
        menuBtn.setAttribute('aria-expanded', 'true');
        console.log('📱 Mobile menu opened');
    } else {
        menuBtn.setAttribute('aria-expanded', 'false');
        console.log('📱 Mobile menu closed');
    }
}

// Create custom SVG hamburger icon button
function createMobileMenuButton() {
    // Check if button already exists
    if (document.querySelector('.mobile-menu-btn')) {
        return;
    }
    
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'mainNav');
    
    // Custom SVG icon (hamburger menu)
    menuButton.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 3 7 L 27 7 L 27 9 L 3 9 Z" fill="currentColor"/>
            <path d="M 3 14 L 27 14 L 27 16 L 3 16 Z" fill="currentColor"/>
            <path d="M 3 21 L 27 21 L 27 23 L 3 23 Z" fill="currentColor"/>
        </svg>
    `;
    
    // Add click event listener
    menuButton.addEventListener('click', toggleMobileMenu);
    
    // Insert button before the nav menu
    const menuHeading = header.querySelector('h2');
    if (menuHeading) {
        menuHeading.insertAdjacentElement('afterend', menuButton);
    } else {
        mainNav.insertAdjacentElement('beforebegin', menuButton);
    }
    
    console.log('✓ Mobile menu button created');
}

// Using JavaScript Date object with 7 variations
function applyDayOfWeekStyling() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    console.log(`📅 Today is ${dayNames[dayOfWeek]}`);
    
    // Create a day banner element
    const dayBanner = document.createElement('div');
    dayBanner.id = 'day-banner';
    dayBanner.style.padding = '1rem';
    dayBanner.style.textAlign = 'center';
    dayBanner.style.fontWeight = 'bold';
    dayBanner.style.marginBottom = '1rem';
    dayBanner.style.borderRadius = '0.75rem';
    
    // Apply different styles and content based on the day using if/else if statements
    if (dayOfWeek === 0) {
        // SUNDAY - Relaxing golden theme
        dayBanner.textContent = '☀️ Sunday: Perfect day to explore castle history at your own pace!';
        dayBanner.style.backgroundColor = '#FFD700';
        dayBanner.style.color = '#8B4513';
        dayBanner.style.border = '3px solid #FFA500';
        
    } else if (dayOfWeek === 1) {
        // MONDAY - Fresh start blue theme
        dayBanner.textContent = '🏰 Monday: Start your week with royal architecture and grand designs!';
        dayBanner.style.backgroundColor = '#4169E1';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #1E90FF';
        
    } else if (dayOfWeek === 2) {
        // TUESDAY - Discovery green theme
        dayBanner.textContent = '🔍 Tuesday: Uncover the secrets of post-war reconstruction!';
        dayBanner.style.backgroundColor = '#32CD32';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #228B22';
        
    } else if (dayOfWeek === 3) {
        // WEDNESDAY - Scholarly purple theme
        dayBanner.textContent = '📚 Wednesday: Midweek dive into medieval manuscripts and Renaissance art!';
        dayBanner.style.backgroundColor = '#9370DB';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #8B008B';
        
    } else if (dayOfWeek === 4) {
        // THURSDAY - Habsburg heritage red theme
        dayBanner.textContent = '👑 Thursday: Celebrate Habsburg heritage and Baroque grandeur!';
        dayBanner.style.backgroundColor = '#DC143C';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #8B0000';
        
    } else if (dayOfWeek === 5) {
        // FRIDAY - Weekend excitement orange theme
        dayBanner.textContent = '🎉 Friday: Weekend castle adventures and cultural exploration await!';
        dayBanner.style.backgroundColor = '#FF8C00';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #FF6347';
        
    } else if (dayOfWeek === 6) {
        // SATURDAY - Museum day teal theme
        dayBanner.textContent = '🎨 Saturday: Museum day at the palace - explore galleries and exhibitions!';
        dayBanner.style.backgroundColor = '#20B2AA';
        dayBanner.style.color = '#FFFFFF';
        dayBanner.style.border = '3px solid #008B8B';
    }
    
    // Add shadow effect to banner
    dayBanner.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    
    // Insert the banner at the top of main content
    const main = document.querySelector('main');
    if (main) {
        main.insertBefore(dayBanner, main.firstChild);
        console.log(`✅ Day banner added for ${dayNames[dayOfWeek]}`);
    }
}

// Add smooth scroll behavior for skip link
function initializeSmoothScroll() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.focus(); // Improve accessibility
            }
        });
    }
}

// Add keyboard accessibility for theme toggle
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Press 'T' to toggle theme
        if (e.key === 't' || e.key === 'T') {
            if (document.activeElement.tagName !== 'INPUT' && 
                document.activeElement.tagName !== 'TEXTAREA') {
                toggleTheme();
            }
        }
        
        // Press 'M' to toggle mobile menu
        if (e.key === 'm' || e.key === 'M') {
            if (document.activeElement.tagName !== 'INPUT' && 
                document.activeElement.tagName !== 'TEXTAREA') {
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (menuBtn && window.getComputedStyle(menuBtn).display !== 'none') {
                    toggleMobileMenu();
                }
            }
        }
    });
}

// EVENT LISTENERS - Connect functions to events
function initializeEventListeners() {
    console.log('🔧 Initializing event listeners...');
    
    // Event 1: Click on footer to update text (Content Update Function)
    if (footer) {
        footer.addEventListener('click', updateFooterText);
        footer.style.cursor = 'pointer';
        footer.title = 'Click to update footer message';
        console.log('✓ Footer click listener added');
    }
    
    // Event 2: Hover on header to change style (CSS Change Function)
    if (header) {
        header.addEventListener('mouseenter', changeHeaderStyle);
        header.addEventListener('mouseleave', resetHeaderStyle);
        console.log('✓ Header hover listeners added');
    }
    
    // Event 3: Double-click hero heading to toggle theme (Bonus Feature)
    if (heroHeading) {
        heroHeading.addEventListener('dblclick', toggleTheme);
        heroHeading.style.cursor = 'pointer';
        heroHeading.title = 'Double-click to toggle dark/light mode (or press T)';
        console.log('✓ Hero heading double-click listener added');
    }
    
    // Initialize additional features
    initializeSmoothScroll();
    initializeKeyboardShortcuts();
    
    console.log('✅ All event listeners initialized');
}

// INITIALIZE ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏰 Buda Castle Website - JavaScript Loaded Successfully');
    console.log('================================================');
    
    // Apply day-of-week feature (Requirement 3)
    applyDayOfWeekStyling();
    
    // Initialize all event listeners (Requirement 2)
    initializeEventListeners();
    
    // EXTRA CREDIT: Create mobile menu button
    createMobileMenuButton();
    
    // Log current date and day for debugging
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    console.log(`📅 Today is ${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`);
    console.log('================================================');
    console.log('💡 Try these interactions:');
    console.log('   - Click the footer');
    console.log('   - Hover over the header');
    console.log('   - Double-click the main heading (or press T)');
    console.log('   - Click the hamburger menu on mobile (or press M)');
    console.log('================================================');
});
