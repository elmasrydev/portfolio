document.addEventListener('DOMContentLoaded', () => {
    fetchPageData();
    setupContactForm();
});

async function fetchPageData() {
    try {
        const response = await fetch('/api/page-data');
        const data = await response.json();
        
        if (data.hero) renderHero(data.hero, data.stats);
        if (data.marquee_items) renderMarquee(data.marquee_items);
        if (data.services) renderServices(data.services);
        if (data.process_steps) renderProcess(data.process_steps);
        if (data.projects) renderProjects(data.projects);
        if (data.why_items) renderWhy(data.why_items);
        if (data.markets) renderMarkets(data.markets);
        if (data.brands) renderBrands(data.brands);
        if (data.testimonials) renderTestimonials(data.testimonials);
        if (data.portfolio_cta) renderPortfolioCta(data.portfolio_cta);
        if (data.contact) renderContact(data.contact);
        
        // Trigger reveal animations
        window.dispatchEvent(new Event('content-loaded'));
    } catch (error) {
        console.error('Error fetching page data:', error);
    }
}

function renderHero(hero, stats) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtext = document.querySelector('.hero-subtext');
    const ctaPrimary = document.querySelector('.hero-content .btn-primary');
    const ctaSecondary = document.querySelector('.hero-content .btn-secondary');

    if (heroTitle) heroTitle.innerHTML = hero.title;
    if (heroSubtext) heroSubtext.textContent = hero.subtitle;
    if (ctaPrimary && hero.cta_text) {
        ctaPrimary.textContent = hero.cta_text;
        ctaPrimary.href = hero.cta_url || '#';
    }
    if (ctaSecondary && hero.secondary_cta_text) {
        ctaSecondary.textContent = hero.secondary_cta_text;
        ctaSecondary.href = hero.secondary_cta_url || '#';
    }
    
    // Stats
    const statsContainer = document.getElementById('heroStats');
    if (statsContainer && stats.length > 0) {
        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat-item">
                <span class="stat-num">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }
}

function renderMarquee(items) {
    const track = document.getElementById('marqueeTrack');
    if (track && items.length > 0) {
        const content = items.map(item => `<span class="marquee-item">${item.text}</span>`).join('');
        // Duplicate for infinite scroll
        track.innerHTML = content + content;
    }
}

function renderServices(services) {
    const grid = document.getElementById('servicesGrid');
    if (grid && services.length > 0) {
        grid.innerHTML = services.map(service => `
            <div class="service-card reveal">
                <div class="service-icon">
                    ${service.icon_svg}
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            </div>
        `).join('');
    }
}

function renderProcess(steps) {
    const grid = document.getElementById('processGrid');
    if (grid && steps.length > 0) {
        grid.innerHTML = steps.map((step, index) => `
            <div class="process-card reveal">
                <div class="process-icon">
                    ${step.icon_svg}
                </div>
                <div class="process-number">0${index + 1}</div>
                <h3 class="process-title">${step.title}</h3>
                <p class="process-desc">${step.description}</p>
            </div>
        `).join('');
    }
}

function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    if (grid && projects.length > 0) {
        grid.innerHTML = projects.map(project => `
            <div class="project-card ${project.is_featured ? 'featured' : ''} reveal">
                <div class="project-content">
                    <span class="project-tag">${project.category || ''}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${project.tags.map(t => `<span class="tech-tag">${t.name}</span>`).join('')}
                    </div>
                </div>
                <div class="project-media">
                    ${project.image_url ? `<img src="${project.image_url}" alt="${project.title}" class="project-img">` : (project.icon_svg || '')}
                </div>
            </div>
        `).join('');
    }
}

function renderWhy(items) {
    const grid = document.getElementById('whyGrid');
    if (grid && items.length > 0) {
        grid.innerHTML = items.map(item => `
            <div class="why-card reveal">
                <div class="why-icon">
                    ${item.icon_svg}
                </div>
                <h3 class="why-title">${item.title}</h3>
                <p class="why-desc">${item.description}</p>
            </div>
        `).join('');
    }
}

function renderMarkets(markets) {
    const row = document.getElementById('marketsGrid');
    if (row && markets.length > 0) {
        row.innerHTML = markets.map(market => `
            <div class="market-card reveal">
                <div class="market-header">
                    <img src="${market.flag_url || 'https://placehold.co/40x30'}" alt="${market.flag_alt}" class="market-flag">
                    <h3 class="market-name">${market.country_name}</h3>
                </div>
                <p class="market-desc">${market.description}</p>
                <div class="market-badges">
                    <span class="market-badge">${market.badge_text}</span>
                </div>
            </div>
        `).join('');
    }
}

function renderBrands(brands) {
    const grid = document.getElementById('brandsGrid');
    if (grid && brands.length > 0) {
        grid.innerHTML = brands.map(brand => `
            <div class="brand-item reveal" style="--brand-color: ${brand.accent_color}">
                ${brand.logo_url ? `<img src="${brand.logo_url}" alt="${brand.name}" class="brand-img">` : `<span class="brand-logo">${brand.initials}</span>`}
                <span class="brand-name">${brand.name}</span>
            </div>
        `).join('');
    }
}

function renderTestimonials(testimonials) {
    const row1 = document.getElementById('testimonialsRow1');
    const row2 = document.getElementById('testimonialsRow2');
    
    if (row1 && testimonials.row1.length > 0) {
        const content = testimonials.row1.map(t => renderTestimonialCard(t)).join('');
        row1.innerHTML = content + content;
    }
    
    if (row2 && testimonials.row2.length > 0) {
        const content = testimonials.row2.map(t => renderTestimonialCard(t)).join('');
        row2.innerHTML = content + content;
    }
}

function renderTestimonialCard(t) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${t.photo_url || 'https://placehold.co/100'}" alt="${t.author_name}" class="testimonial-photo">
                <div class="testimonial-stars">
                    ${Array(t.stars).fill('<span class="star">★</span>').join('')}
                </div>
            </div>
            <p class="testimonial-quote">"${t.quote}"</p>
            <div class="testimonial-author">
                <div class="author-name">${t.author_name}</div>
                <div class="author-role">${t.author_role}</div>
            </div>
        </div>
    `;
}

function renderPortfolioCta(cta) {
    const section = document.querySelector('.portfolio-cta');
    if (section) {
        if (cta.label) section.querySelector('.label-text').textContent = cta.label;
        if (cta.heading) section.querySelector('h2').innerHTML = cta.heading;
        if (cta.description) section.querySelector('p').textContent = cta.description;
        if (cta.button_text) {
            const btn = section.querySelector('.btn-primary');
            btn.innerHTML = `${cta.button_text} <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
            if (cta.pdf_url) btn.href = cta.pdf_url;
        }
    }
}

function renderContact(contact) {
    const section = document.querySelector('#contact');
    if (section) {
        if (contact.label) section.querySelector('.label-text').textContent = contact.label;
        if (contact.heading) section.querySelector('h2').textContent = contact.heading;
        if (contact.sub_text) {
            const subtext = section.querySelector('.contact-subtext');
            if (subtext) subtext.textContent = contact.sub_text;
        }
        
        // Channels
        const channels = section.querySelectorAll('.channel-card');
        if (channels[0] && contact.email) {
            channels[0].querySelector('.channel-value').textContent = contact.email;
            channels[0].href = `mailto:${contact.email}`;
        }
        if (channels[1] && contact.address) {
            channels[1].querySelector('.channel-value').textContent = contact.address;
        }
        if (channels[2] && contact.whatsapp_number) {
            channels[2].querySelector('.channel-value').textContent = contact.whatsapp_number;
            channels[2].href = contact.whatsapp_url;
        }
    }
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Use the inner form, not the container if needed
    const actualForm = form.tagName === 'FORM' ? form : form.querySelector('form');
    if (!actualForm) return;

    actualForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = actualForm.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
        
        const formData = {
            name: actualForm.querySelector('[name="name"]').value,
            email: actualForm.querySelector('[name="email"]').value,
            company: actualForm.querySelector('[name="company"]').value,
            service: actualForm.querySelector('[name="service"]').value,
            message: actualForm.querySelector('[name="message"]').value,
        };
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                btn.innerHTML = 'Success!';
                actualForm.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 3000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            btn.innerHTML = 'Error';
            alert(error.message);
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 3000);
        }
    });
}
