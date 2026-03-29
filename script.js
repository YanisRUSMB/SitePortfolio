const d = new Date();
const pad = (n) => String(n).padStart(2, "0");

// Update Year in Footer
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = d.getFullYear();
}

// Update Last Modified Date in Footer
const updatedEl = document.getElementById("updated");
if (updatedEl) {
    const updated = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    updatedEl.textContent = updated;
}

// ==========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in-up class to specific elements for animation
    const elementsToAnimate = document.querySelectorAll(`
        .heroCopy, .heroCard,
        .sectionTitle, .skillCard,
        .experienceCard, .projectCard,
        .contact, .projectHeaderSection,
        .projectDescription, .projectMainMediaPlaceholder
    `);

    elementsToAnimate.forEach((el, index) => {
        el.classList.add("fade-in-up");
        // Add a slight stagger delay for grid items
        if(el.classList.contains("skillCard") || el.classList.contains("experienceCard") || el.classList.contains("projectCard")) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element comes fully into view
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// ==========================================
// PROJECT FILTERING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filterBtn');
    const projectCards = document.querySelectorAll('.projectCardLink');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === category) {
                        card.style.display = 'block';
                        // Add a small animation effect
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
