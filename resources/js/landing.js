document.addEventListener('DOMContentLoaded', () => {
    fetchPageData();
    setupContactForm();
    setupMobileMenu();
});

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
    }

    window.closeMobileMenu = () => {
        if (hamburger) hamburger.classList.remove('open');
        if (mobileMenu) mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    };
}

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
        if (data.presence_setting) renderPresenceHeader(data.presence_setting);
        if (data.presence_locations) renderWorldMap(data.presence_locations);
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
            <div class="step reveal">
                <div class="step-num">
                    ${step.icon_svg}
                </div>
                <h4>${step.title}</h4>
                <p>${step.description}</p>
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
            <div class="why-item reveal">
                <div class="why-num">
                    ${item.icon_svg}
                </div>
                <div class="why-body">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }
}

function renderPresenceHeader(setting) {
    const label = document.getElementById('presenceLabel');
    const title = document.getElementById('presenceTitle');
    const subtitle = document.getElementById('presenceSubtitle');

    if (label && setting.label) label.textContent = setting.label;
    if (title && setting.heading_count) {
        title.innerHTML = `${setting.heading_count}. <span class="accent">${setting.heading_standard || 'standard.'}</span>`;
    }
    if (subtitle && setting.subtitle) subtitle.textContent = setting.subtitle;
}

function renderMarkets(markets) {
    // We already have presence_locations in the parent data object in fetchPageData
    // But fetchPageData passes data.markets here.
    // Let's actually use the markets data for the cards, and we'll handle the map separately.
    const row = document.getElementById('marketsGrid');
    if (row && markets.length > 0) {
        row.innerHTML = markets.map(market => `
            <div class="market-chip" style="flex-direction:column; align-items:flex-start; border-radius:14px; padding:24px 24px 20px; gap:14px; flex:1; min-width:220px;">
                <div style="display:flex; align-items:center; gap:12px;">
                <img class="chip-flag" src="${market.flag_url || 'https://flagcdn.com/w80/sa.png'}" alt="${market.flag_alt}" style="width:38px;height:26px;"/>
                <div>
                    <div class="chip-name">${market.country_name}</div>
                    <div class="chip-role">${market.badge_text}</div>
                </div>
                </div>
                <p style="font-family:'Lexend',sans-serif;font-size:13px;font-weight:300;color:var(--muted);line-height:1.7;margin:0;">${market.description}</p>
            </div>
        `).join('');
    }
}

async function renderWorldMap(locations) {
    const wrap = document.getElementById('worldMapWrap');
    const svgEl = document.getElementById('worldMapSvg');
    const pinsEl = document.getElementById('mapPins');

    if (!wrap || !svgEl || !pinsEl || !locations || locations.length === 0) return;

    const W = wrap.offsetWidth;
    const H = wrap.offsetHeight;

    const highlightedIds = new Set(locations.map(loc => loc.num_id.toString()));

    const projection = d3.geoNaturalEarth1()
        .rotate([-10, 0])
        .scale(W / 4.2)
        .translate([W / 2, H / 1.85]);

    const pathGen = d3.geoPath().projection(projection);

    const graticule = d3.geoGraticule().step([20, 20]);
    const svg = d3.select('#worldMapSvg');

    // Sphere & Graticule
    svg.append('path')
        .datum({ type: 'Sphere' })
        .attr('class', 'map-sphere')
        .attr('d', pathGen)
        .style('fill', '#040c18')
        .style('stroke', 'none');

    svg.append('path')
        .datum(graticule())
        .attr('class', 'map-graticule')
        .attr('d', pathGen)
        .style('fill', 'none')
        .style('stroke', 'rgba(0,180,216,0.08)')
        .style('stroke-width', '0.5');

    try {
        const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const features = topojson.feature(world, world.objects.countries).features;

        svg.selectAll('path.country-path')
            .data(features)
            .join('path')
            .attr('class', d =>
                d.id && highlightedIds.has(d.id.toString())
                    ? 'country-path country-highlighted'
                    : 'country-path'
            )
            .attr('d', pathGen)
            .style('fill', d => d.id && highlightedIds.has(d.id.toString()) ? 'rgba(0,180,216,0.2)' : '#0f172a')
            .style('stroke', d => d.id && highlightedIds.has(d.id.toString()) ? 'rgba(0,180,216,0.4)' : 'rgba(0,180,216,0.05)')
            .style('stroke-width', '0.5');

        // Add country border mesh
        svg.append('path')
            .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
            .attr('fill', 'none')
            .attr('stroke', 'rgba(0,180,216,0.15)')
            .attr('stroke-width', '0.4')
            .attr('d', pathGen);

    } catch (e) {
        console.warn('Map data failed to load', e);
    }

    // Place flag pins
    locations.forEach(loc => {
        const [px, py] = projection([parseFloat(loc.lng), parseFloat(loc.lat)]);
        const pct_x = (px / W) * 100;
        const pct_y = (py / H) * 100;

        const pin = document.createElement('div');
        pin.className = 'flag-pin';
        pin.style.left = pct_x + '%';
        pin.style.top = pct_y + '%';
        pin.style.position = 'absolute';

        const glow = document.createElement('div');
        glow.className = 'pin-glow';
        glow.style.left = pct_x + '%';
        glow.style.top = pct_y + '%';
        glow.style.position = 'absolute';

        pin.innerHTML = `
          <div class="pin-body">
            <img src="https://flagcdn.com/w160/${loc.code}.png" alt="${loc.name}" loading="lazy" style="object-position:${loc.pos}; width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="pin-tip"></div>
          <div class="pin-dot"></div>
          <div class="flag-label">${loc.name}</div>
        `;

        pinsEl.appendChild(glow);
        pinsEl.appendChild(pin);
    });
}

function renderBrands(brands) {
    const grid = document.getElementById('brandsGrid');
    if (grid && brands.length > 0) {
        grid.innerHTML = brands.map(brand => `
            <div class="brand-logo-card">
                <div class="brand-logo-box" style="--ac:${brand.accent_color || '#00B4D8'}">
                    ${brand.logo_url ? `<img src="${brand.logo_url}" alt="${brand.name}" style="max-width:80%;max-height:80%;object-fit:contain;">` : `<span class="bl-initials">${brand.initials}</span>`}
                </div>
                <div class="brand-logo-name">${brand.name}</div>
            </div>
        `).join('');
    }
}


function renderTestimonials(testimonials) {
    const row1 = document.getElementById('testimonialsRow1');
    const row2 = document.getElementById('testimonialsRow2');
    
    if (row1 && testimonials.row1.length > 0) {
        row1.innerHTML = testimonials.row1.map(t => renderTestimonialCard(t)).join('');
    }
    
    if (row2 && testimonials.row2.length > 0) {
        row2.innerHTML = testimonials.row2.map(t => renderTestimonialCard(t)).join('');
    }
}


function renderTestimonialCard(t) {
    const starCount = parseInt(t.stars) || 5;
    return `
        <div class="testimonial-card">
            <img class="testimonial-photo" src="${t.photo_url || 'https://i.pravatar.cc/200'}" alt="${t.author_name}" />
            <div class="testimonial-body">
                <div class="stars">${'★'.repeat(starCount)}</div>
                <div class="quote-mark">"</div>
                <p class="testimonial-text">${t.quote}</p>
                <div class="testimonial-author">
                    <div class="author-name">${t.author_name}</div>
                    <div class="author-role">${t.author_role}</div>
                </div>
            </div>
        </div>
    `;
}

function renderPortfolioCta(cta) {
    const section = document.querySelector('.portfolio-cta');
    if (section && cta) {
        const labelEl = section.querySelector('.section-label');
        const titleEl = section.querySelector('h2');
        const descEl = section.querySelector('.portfolio-left p');
        const btnEl = section.querySelector('.btn-download');

        if (labelEl && cta.label) labelEl.textContent = cta.label;
        if (titleEl && cta.heading) titleEl.innerHTML = cta.heading;
        if (descEl && cta.description) descEl.textContent = cta.description;
        if (btnEl) {
            if (cta.button_text) btnEl.textContent = cta.button_text;
            if (cta.pdf_url) {
                btnEl.href = cta.pdf_url;
                btnEl.setAttribute('download', '');
            }
        }
    }
}


function renderContact(contact) {
    const section = document.querySelector('#contact');
    if (section) {
        const labelEl = section.querySelector('.section-label');
        if (labelEl && contact.label) labelEl.textContent = contact.label;

        if (contact.heading) {
            const headingEl = section.querySelector('h2');
            if (headingEl) headingEl.innerHTML = contact.heading;
        }

        if (contact.sub_text) {
            const subEl = section.querySelector('.contact-sub');
            if (subEl) subEl.textContent = contact.sub_text;
        }
        
        // Channels
        const channels = section.querySelectorAll('.contact-channel');
        if (channels[0] && contact.email) {
            const valEl = channels[0].querySelector('.ch-val');
            if (valEl) valEl.textContent = contact.email;
            channels[0].href = `mailto:${contact.email}`;
        }
        if (channels[1] && contact.address) {
            const valEl = channels[1].querySelector('.ch-val');
            if (valEl) valEl.innerHTML = contact.address;
        }
        if (channels[2] && contact.whatsapp_number) {
            const valEl = channels[2].querySelector('.ch-val');
            if (valEl) valEl.textContent = contact.whatsapp_number;
            if (contact.whatsapp_url) channels[2].href = contact.whatsapp_url;
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
