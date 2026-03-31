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

    globalThis.closeMobileMenu = () => {
        if (hamburger) hamburger.classList.remove('open');
        if (mobileMenu) mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    };
}

async function fetchPageData() {
    try {
        const response = await fetch('/app/api/page-data');
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
        if (data.ecom_setting) renderEcommerce(data.ecom_setting, data.ecom_capabilities);
        if (data.contact) renderContact(data.contact);
        if (data.site) {
            renderFooter(data.site);
        }
        if (data.contact && data.contact.email) {
            renderEmails(data.contact.email);
        }
        
        // Trigger reveal animations
        globalThis.dispatchEvent(new Event('content-loaded'));

    } catch (error) {
        console.error('Error fetching page data:', error);
    } finally {
        // Hide Page Loader
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(() => loader.remove(), 600);
        }
    }
}

function renderEmails(email) {
    if (!email) return;
    const emailLinks = document.querySelectorAll('.dynamic-email');
    emailLinks.forEach(link => {
        link.href = `mailto:${email}`;
        // Update either .ch-val or .email-text or just the textContent
        const valEl = link.querySelector('.ch-val') || link.querySelector('.email-text');
        if (valEl) {
            valEl.textContent = email;
        } else {
            // Fallback for simple links
            const svg = link.querySelector('svg');
            if (svg) {
                // If there's an SVG, we don't want to overwrite it
                // We'll append text or find a text node
                let textNode = Array.from(link.childNodes).find(node => node.nodeType === 3 && node.textContent.trim().length > 0);
                if (textNode) {
                    textNode.textContent = email;
                } else if (link.textContent.length > 0) {
                    // This might kill the SVG if not careful, but usually .email-text is used
                }
            } else {
                link.textContent = email;
            }
        }
    });
}

function renderHero(hero, stats) {
    if (!hero) return;
    const heroLabel = document.querySelector('.hero-label');
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSub = document.querySelector('.hero-sub');
    const ctaPrimary = document.querySelector('.hero-actions .btn-primary');
    const ctaSecondary = document.querySelector('.hero-actions .btn-ghost');

    if (heroLabel) heroLabel.textContent = hero.label;
    if (heroTitle) heroTitle.innerHTML = hero.title_html || hero.title;
    if (heroSub) heroSub.textContent = hero.subtitle;
    
    if (ctaPrimary && hero.cta_text) {
        ctaPrimary.textContent = hero.cta_text;
        ctaPrimary.href = hero.cta_url || '#contact';
    }
    if (ctaSecondary && hero.secondary_cta_text) {
        ctaSecondary.textContent = hero.secondary_cta_text;
        ctaSecondary.href = hero.secondary_cta_url || '#projects';
    }
    
    // Stats
    const statsContainer = document.getElementById('heroStats');
    if (statsContainer && stats.length > 0) {
        statsContainer.innerHTML = stats.map(stat => {
            let displayValue = stat.value;
            // Separate '+' if present to style it
            if (typeof displayValue === 'string' && displayValue.includes('+')) {
                displayValue = displayValue.replace('+', '<span>+</span>');
            }
            return `
                <div class="stat-item">
                    <div class="stat-num">${displayValue}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `;
        }).join('');
    }

    // Initialize Hero Animation
    initHeroAnimation();
}

function initHeroAnimation() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W = canvas.width = 660;
    let H = canvas.height = 660;

    const CYAN = '#00B4D8';
    const CYAN_DIM = 'rgba(0, 180, 216, ';

    /* ── NODES ── */
    const nodes = [
        { x: 330, y: 92, type: 'cloud', label: 'Cloud' },
        { x: 130, y: 210, type: 'server', label: 'Server A' },
        { x: 530, y: 210, type: 'server', label: 'Server B' },
        { x: 330, y: 225, type: 'ai', label: 'AI Engine' },
        { x: 55, y: 355, type: 'db', label: 'Database' },
        { x: 200, y: 355, type: 'api', label: 'API' },
        { x: 390, y: 355, type: 'api', label: 'API' },
        { x: 560, y: 340, type: 'db', label: 'Database' },
        { x: 295, y: 355, type: 'security', label: 'Security' },
        { x: 80, y: 495, type: 'client', label: 'Client' },
        { x: 210, y: 502, type: 'mobile', label: 'Mobile' },
        { x: 330, y: 495, type: 'analytics', label: 'Analytics' },
        { x: 460, y: 502, type: 'mobile', label: 'Mobile' },
        { x: 575, y: 485, type: 'client', label: 'Client' },
    ];

    const edges = [
        [0, 1], [0, 2], [0, 3],
        [1, 4], [1, 5], [3, 5], [3, 6], [3, 8],
        [2, 6], [2, 7], [2, 8],
        [4, 9], [5, 9], [5, 10],
        [6, 11], [8, 11], [8, 10],
        [6, 12], [7, 12], [7, 13],
        [9, 10], [12, 13],
    ];

    nodes.forEach(n => {
        n.pulse = Math.random() * Math.PI * 2;
        n.pulseSpeed = 0.01 + Math.random() * 0.008;
        n.ripples = [];
    });

    /* ── DATA STREAM PARTICLES ── */
    const particles = [];
    function spawnParticle() {
        const ei = Math.floor(Math.random() * edges.length);
        const [a, b] = edges[ei];
        const rev = Math.random() < 0.4;
        particles.push({
            from: rev ? b : a, to: rev ? a : b,
            t: 0,
            speed: 0.0018 + Math.random() * 0.003,
            size: 2 + Math.random() * 2.5,
            alpha: 0.7 + Math.random() * 0.3,
            color: Math.random() < 0.15 ? 'rgba(255,255,255,' : CYAN_DIM,
            tail: [],
        });
    }
    for (let i = 0; i < 22; i++) spawnParticle();

    /* ── BINARY RAIN COLUMNS ── */
    const COLS = 24;
    const colW = W / COLS;
    const rain = Array.from({ length: COLS }, (_, i) => ({
        x: i * colW + colW * 0.5,
        y: Math.random() * H,
        speed: 0.18 + Math.random() * 0.3,
        chars: Array.from({ length: 8 }, () => Math.random() < 0.5 ? '1' : '0'),
        timer: 0,
        interval: 8 + Math.floor(Math.random() * 12),
    }));

    /* ── NODE ICONS ── */
    const NODE_R = 30;

    function drawIcon(type, x, y) {
        const s = NODE_R * 0.58;
        ctx.strokeStyle = CYAN;
        ctx.fillStyle = CYAN;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (type === 'cloud') {
            const cy = y + s * 0.12;
            ctx.beginPath();
            ctx.arc(x - s * 0.52, cy + s * 0.1, s * 0.28, Math.PI, Math.PI * 2);
            ctx.arc(x + s * 0.52, cy + s * 0.1, s * 0.24, Math.PI, Math.PI * 2);
            ctx.arc(x + s * 0.22, cy - s * 0.20, s * 0.32, Math.PI, 0);
            ctx.arc(x - s * 0.18, cy - s * 0.30, s * 0.40, Math.PI, 0);
            ctx.closePath();
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.8; ctx.stroke();
            ctx.fillStyle = 'rgba(0,180,216,0.07)'; ctx.fill();
        } else if (type === 'server') {
            [-s * 0.5, 0, s * 0.5].forEach(oy => {
                ctx.beginPath();
                ctx.roundRect(x - s * 0.7, y + oy - s * 0.15, s * 1.4, s * 0.30, 2);
                ctx.strokeStyle = CYAN; ctx.lineWidth = 1.6; ctx.stroke();
                ctx.beginPath(); ctx.arc(x + s * 0.50, y + oy, s * 0.085, 0, Math.PI * 2);
                ctx.fillStyle = CYAN; ctx.fill();
                ctx.beginPath(); ctx.setLineDash([s * 0.09, s * 0.07]);
                ctx.moveTo(x - s * 0.50, y + oy); ctx.lineTo(x + s * 0.22, y + oy);
                ctx.globalAlpha = 0.28; ctx.stroke(); ctx.globalAlpha = 1; ctx.setLineDash([]);
            });
        } else if (type === 'db') {
            const ew = s * 0.58, eh = s * 0.18;
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.6;
            ctx.beginPath(); ctx.ellipse(x, y - s * 0.38, ew, eh, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - ew, y - s * 0.38); ctx.lineTo(x - ew, y + s * 0.38);
            ctx.moveTo(x + ew, y - s * 0.38); ctx.lineTo(x + ew, y + s * 0.38); ctx.stroke();
            ctx.beginPath(); ctx.ellipse(x, y + s * 0.38, ew, eh, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.ellipse(x, y, ew, eh, 0, 0, Math.PI * 2);
            ctx.globalAlpha = 0.28; ctx.stroke(); ctx.globalAlpha = 1;
        } else if (type === 'api') {
            ctx.strokeStyle = CYAN; ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x - s * 0.12, y - s * 0.46); ctx.lineTo(x - s * 0.56, y); ctx.lineTo(x - s * 0.12, y + s * 0.46); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + s * 0.12, y - s * 0.46); ctx.lineTo(x + s * 0.56, y); ctx.lineTo(x + s * 0.12, y + s * 0.46); ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + s * 0.12, y - s * 0.40); ctx.lineTo(x - s * 0.12, y + s * 0.40);
            ctx.globalAlpha = 0.55; ctx.stroke(); ctx.globalAlpha = 1;
        } else if (type === 'client') {
            ctx.beginPath();
            ctx.arc(x, y - s * 0.26, s * 0.28, 0, Math.PI * 2);
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.7; ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y + s * 0.62, s * 0.58, Math.PI + 0.38, -0.38);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - s * 0.22, y + s * 0.06);
            ctx.lineTo(x + Math.cos(Math.PI + 0.38) * s * 0.58, y + s * 0.62 + Math.sin(Math.PI + 0.38) * s * 0.58);
            ctx.stroke();
        } else if (type === 'ai') {
            ctx.beginPath();
            ctx.arc(x, y, s * 0.78, 0, Math.PI * 2);
            ctx.globalAlpha = 0.12; ctx.strokeStyle = CYAN; ctx.lineWidth = 4; ctx.stroke();
            ctx.globalAlpha = 1; ctx.lineWidth = 1.6;
            const spokeAngles = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
            spokeAngles.forEach(a => {
                const ox = x + Math.cos(a) * s * 0.78, oy = y + Math.sin(a) * s * 0.78;
                ctx.beginPath();
                ctx.moveTo(x + Math.cos(a) * s * 0.28, y + Math.sin(a) * s * 0.28);
                ctx.lineTo(ox, oy);
                ctx.globalAlpha = 0.5; ctx.stroke(); ctx.globalAlpha = 1;
                ctx.beginPath(); ctx.arc(ox, oy, s * 0.1, 0, Math.PI * 2);
                ctx.fillStyle = CYAN; ctx.fill();
            });
            ctx.beginPath(); ctx.arc(x, y, s * 0.28, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0,180,216,0.15)'; ctx.fill();
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.8; ctx.stroke();
            ctx.beginPath(); ctx.arc(x, y, s * 0.10, 0, Math.PI * 2);
            ctx.fillStyle = CYAN; ctx.fill();
        } else if (type === 'security') {
            ctx.beginPath();
            ctx.arc(x, y - s * 0.12, s * 0.32, Math.PI, 0);
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.9; ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - s * 0.32, y - s * 0.12); ctx.lineTo(x - s * 0.32, y + s * 0.05);
            ctx.moveTo(x + s * 0.32, y - s * 0.12); ctx.lineTo(x + s * 0.32, y + s * 0.05);
            ctx.stroke();
            ctx.beginPath();
            ctx.roundRect(x - s * 0.46, y + s * 0.02, s * 0.92, s * 0.62, 4);
            ctx.fillStyle = 'rgba(0,180,216,0.09)'; ctx.fill();
            ctx.strokeStyle = CYAN; ctx.stroke();
            ctx.beginPath(); ctx.arc(x, y + s * 0.24, s * 0.12, 0, Math.PI * 2);
            ctx.fillStyle = CYAN; ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x - s * 0.07, y + s * 0.34); ctx.lineTo(x + s * 0.07, y + s * 0.34);
            ctx.lineTo(x + s * 0.05, y + s * 0.50); ctx.lineTo(x - s * 0.05, y + s * 0.50);
            ctx.closePath(); ctx.fill();
        } else if (type === 'analytics') {
            const bars = [0.35, 0.55, 0.45, 0.72, 0.90];
            const bw = s * 0.22, gap = s * 0.07;
            const totalW = bars.length * (bw + gap) - gap;
            const bx0 = x - totalW / 2;
            const by0 = y + s * 0.52;
            const maxH = s * 1.05;
            bars.forEach((h, i) => {
                const bxs = bx0 + i * (bw + gap);
                const bh = h * maxH;
                ctx.beginPath();
                ctx.roundRect(bxs, by0 - bh, bw, bh, 2);
                ctx.fillStyle = `rgba(0,180,216,${0.12 + h * 0.22})`; ctx.fill();
                ctx.strokeStyle = CYAN; ctx.lineWidth = 1.2; ctx.stroke();
            });
            ctx.beginPath();
            bars.forEach((h, i) => {
                const tx = bx0 + i * (bw + gap) + bw / 2;
                const ty = by0 - h * maxH;
                i === 0 ? ctx.moveTo(tx, ty) : ctx.lineTo(tx, ty);
            });
            ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 1.6;
            ctx.setLineDash([3, 3]); ctx.stroke(); ctx.setLineDash([]);
            const lx = bx0 + 4 * (bw + gap) + bw / 2, ly = by0 - bars[4] * maxH;
            ctx.beginPath();
            ctx.moveTo(lx - s * 0.08, ly + s * 0.10);
            ctx.lineTo(lx, ly - s * 0.02);
            ctx.lineTo(lx + s * 0.08, ly + s * 0.10);
            ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 1.4;
            ctx.setLineDash([]); ctx.stroke();
        } else if (type === 'mobile') {
            const pw = s * 0.52, ph = s * 1.0;
            ctx.beginPath();
            ctx.roundRect(x - pw / 2, y - ph / 2, pw, ph, s * 0.14);
            ctx.strokeStyle = CYAN; ctx.lineWidth = 1.7; ctx.stroke();
            ctx.beginPath();
            ctx.roundRect(x - s * 0.11, y - ph / 2 + s * 0.07, s * 0.22, s * 0.075, 4);
            ctx.fillStyle = 'rgba(0,180,216,0.55)'; ctx.fill();
            ctx.beginPath();
            ctx.roundRect(x - s * 0.18, y + ph / 2 - s * 0.13, s * 0.36, s * 0.06, 3);
            ctx.fillStyle = 'rgba(0,180,216,0.45)'; ctx.fill();
            ctx.beginPath(); ctx.setLineDash([s * 0.07, s * 0.06]);
            ctx.moveTo(x - s * 0.16, y - s * 0.06); ctx.lineTo(x + s * 0.16, y - s * 0.06);
            ctx.moveTo(x - s * 0.12, y + s * 0.09); ctx.lineTo(x + s * 0.12, y + s * 0.09);
            ctx.globalAlpha = 0.3; ctx.lineWidth = 1; ctx.stroke();
            ctx.globalAlpha = 1; ctx.setLineDash([]);
        }
    }

    let tick = 0;

    function frame() {
        tick++;
        ctx.clearRect(0, 0, W, H);

        /* ── 1. BINARY RAIN ── */
        rain.forEach(col => {
            col.timer++;
            if (col.timer >= col.interval) {
                col.timer = 0;
                col.chars.shift();
                col.chars.push(Math.random() < 0.5 ? '1' : '0');
            }
            col.y += col.speed;
            if (col.y > H + col.chars.length * 14) col.y = -col.chars.length * 14;

            col.chars.forEach((ch, i) => {
                const cy = col.y + i * 14;
                if (cy < 0 || cy > H) return;
                const fade = 1 - i / col.chars.length;
                ctx.font = '10px monospace';
                ctx.fillStyle = i === 0
                    ? `rgba(200,255,255,${fade * 0.55})`
                    : CYAN_DIM + (fade * 0.13) + ')';
                ctx.textAlign = 'center';
                ctx.fillText(ch, col.x, cy);
            });
        });

        /* ── 2. EDGES ── */
        edges.forEach(([a, b]) => {
            const na = nodes[a], nb = nodes[b];
            const g = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
            g.addColorStop(0, CYAN_DIM + '0.15)');
            g.addColorStop(0.5, CYAN_DIM + '0.4)');
            g.addColorStop(1, CYAN_DIM + '0.15)');
            ctx.beginPath();
            ctx.moveTo(na.x, na.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.strokeStyle = g;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 7]);
            ctx.stroke();
            ctx.setLineDash([]);
        });

        /* ── 3. PARTICLES ── */
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.t += p.speed;
            const na = nodes[p.from], nb = nodes[p.to];
            const px = na.x + (nb.x - na.x) * p.t;
            const py = na.y + (nb.y - na.y) * p.t;

            p.tail.push({ x: px, y: py });
            if (p.tail.length > 18) p.tail.shift();

            for (let j = 0; j < p.tail.length - 1; j++) {
                const ratio = j / p.tail.length;
                ctx.beginPath();
                ctx.moveTo(p.tail[j].x, p.tail[j].y);
                ctx.lineTo(p.tail[j + 1].x, p.tail[j + 1].y);
                ctx.strokeStyle = p.color + (ratio * p.alpha * 0.6) + ')';
                ctx.lineWidth = p.size * ratio;
                ctx.stroke();
            }

            const grd = ctx.createRadialGradient(px, py, 0, px, py, p.size * 5);
            grd.addColorStop(0, p.color + (p.alpha * 0.8) + ')');
            grd.addColorStop(0.4, p.color + (p.alpha * 0.3) + ')');
            grd.addColorStop(1, p.color + '0)');
            ctx.beginPath();
            ctx.arc(px, py, p.size * 5, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, p.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.globalAlpha = p.alpha;
            ctx.fill();
            ctx.globalAlpha = 1;

            if (p.t >= 1) {
                nodes[p.to].ripples.push({ r: NODE_R, maxR: NODE_R + 28, alpha: 0.6 });
                particles.splice(i, 1);
                spawnParticle();
            }
        }

        /* ── 4. NODES ── */
        nodes.forEach(n => {
            n.pulse += n.pulseSpeed;
            n.ripples = n.ripples.filter(rp => rp.alpha > 0);
            n.ripples.forEach(rp => {
                rp.r += (rp.maxR - NODE_R) * 0.06;
                rp.alpha -= 0.025;
                ctx.beginPath();
                ctx.arc(n.x, n.y, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = CYAN_DIM + Math.max(0, rp.alpha) + ')';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            const pa = 0.1 + 0.08 * Math.sin(n.pulse);
            const pr = NODE_R + 8 + 6 * Math.sin(n.pulse);
            ctx.beginPath();
            ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
            ctx.fillStyle = CYAN_DIM + pa + ')';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
            ctx.fillStyle = '#1E2D45';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
            ctx.strokeStyle = CYAN_DIM + '0.55)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            drawIcon(n.type, n.x, n.y);

            ctx.font = '10px Lexend';
            ctx.fillStyle = 'rgba(148,163,184,0.85)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(n.label, n.x, n.y + NODE_R + 6);
        });

        requestAnimationFrame(frame);
    }

    frame();
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
        grid.innerHTML = projects.map(project => {
            const isFeatured = Boolean(project.is_featured);
            return `
            <div class="project-card ${isFeatured ? 'featured' : ''} reveal">
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
        `; }).join('');
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
        .scale(W / 4.8)
        .translate([W / 2, H / 1.35]);

    const pathGen = d3.geoPath().projection(projection);

    const graticule = d3.geoGraticule().step([20, 20]);
    const svg = d3.select('#worldMapSvg');

    // Sphere & Graticule
    svg.append('path')
        .datum({ type: 'Sphere' })
        .attr('class', 'map-sphere')
        .attr('d', pathGen);

    svg.append('path')
        .datum(graticule())
        .attr('class', 'map-graticule')
        .attr('d', pathGen);

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
            .attr('d', pathGen);

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
        const [px, py] = projection([Number.parseFloat(loc.lng), Number.parseFloat(loc.lat)]);
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
    const starCount = Number.parseInt(t.stars) || 5;
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
        const titleEl = document.getElementById('portfolio-heading') || section.querySelector('h2');
        const descEl = document.getElementById('portfolio-desc') || section.querySelector('.portfolio-left p');
        const btnEl = section.querySelector('.btn-download');

        if (labelEl && cta.label) labelEl.textContent = cta.label;
        if (titleEl && cta.heading) titleEl.innerHTML = cta.heading;
        if (descEl && cta.description) descEl.textContent = cta.description;
        
        if (btnEl) {
            if (cta.button_text) btnEl.textContent = cta.button_text;
            if (cta.pdf_url) {
                btnEl.href = cta.pdf_url;
                btnEl.style.display = 'inline-flex';
                btnEl.target = "_blank";
                if (cta.pdf_url.startsWith(window.location.origin) || cta.pdf_url.startsWith('/') || !cta.pdf_url.startsWith('http')) {
                    btnEl.setAttribute('download', 'Portfolio.pdf');
                }
            } else {
                btnEl.style.display = 'none';
            }
        }
        
        // Also update hero, nav and mobile download buttons
        const sidebarCta = document.querySelector('.nav-cta');
        const mobileCta = document.querySelector('.mobile-cta');
        const heroBtn = document.querySelector('.btn-download-hero');
        
        const updateBtn = (btn) => {
            if (!btn) return;
            if (cta.pdf_url) {
                btn.href = cta.pdf_url;
                if (cta.button_text && (btn.classList.contains('nav-cta') || btn.classList.contains('mobile-cta'))) {
                    btn.textContent = cta.button_text;
                }
                btn.setAttribute('download', 'Portfolio.pdf');
                btn.target = "_blank";
            }
        };

        updateBtn(sidebarCta);
        updateBtn(mobileCta);
        updateBtn(heroBtn);
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
function renderFooter(site) {
    if (!site) return;

    // Brand description
    const footerDesc = document.querySelector('.footer-brand p');
    if (footerDesc && site.footer_description) {
        footerDesc.textContent = site.footer_description;
    }

    // Copyright
    const copyright = document.querySelector('.footer-bottom p:first-child');
    if (copyright && site.copyright) {
        copyright.textContent = site.copyright;
    }

    // Social links
    const socialLinks = {
        'facebook': site.facebook_url,
        'twitter': site.twitter_url,
        'linkedin': site.linkedin_url,
        'instagram': site.instagram_url
    };

    Object.entries(socialLinks).forEach(([key, url]) => {
        const link = document.querySelector(`.footer-social .social-btn.${key}`);
        if (link) {
            console.log(`Setting ${key} link to ${url}`);
            if (url) {
                link.href = url;
                const item = link.closest('.social-item');
                if (item) item.style.display = 'block';
            } else {
                const item = link.closest('.social-item');
                if (item) item.style.display = 'none';
            }
        }
    });
}


function renderEcommerce(setting, capabilities) {
    const label = document.getElementById('ecomLabel');
    const title = document.getElementById('ecommerce-heading');
    const description = document.getElementById('ecomDescription');
    const partnerName = document.getElementById('ecomPartnerName');
    const partnerSub = document.getElementById('ecomPartnerSub');
    const statsContainer = document.getElementById('ecomStats');
    const verticalsContainer = document.getElementById('ecomVerticals');
    const capabilitiesContainer = document.getElementById('ecomCapabilities');

    if (label && setting.label) label.textContent = setting.label;
    
    if (title && setting.title) {
        // Apply accent span if not present and handle line break
        let titleHtml = setting.title;
        if (!titleHtml.includes('<span')) {
            titleHtml = titleHtml.replace('sell.', '<span class="accent">sell.</span>');
            titleHtml = titleHtml.replace('stores ', 'stores<br/>');
        }
        title.innerHTML = titleHtml;
    }

    if (description && setting.description) description.textContent = setting.description;
    if (partnerName && setting.partner_name) partnerName.textContent = setting.partner_name;
    if (partnerSub && setting.partner_sub) partnerSub.textContent = setting.partner_sub;

    if (statsContainer) {
        let statsHtml = '';
        if (setting.stat1_n) {
            statsHtml += `<div class="ec-stat-inline"><div class="n">${setting.stat1_n.replace('+', '<em>+</em>')}</div><div class="l">${setting.stat1_l}</div></div>`;
        }
        if (setting.stat2_n) {
            statsHtml += `<div class="ec-stat-inline"><div class="n">${setting.stat2_n}</div><div class="l">${setting.stat2_l}</div></div>`;
        }
        if (setting.stat3_n) {
            statsHtml += `<div class="ec-stat-inline"><div class="n">${setting.stat3_n.replace('+', '<em>+</em>')}</div><div class="l">${setting.stat3_l}</div></div>`;
        }
        statsContainer.innerHTML = statsHtml;
    }

    if (verticalsContainer && setting.verticals) {
        const labelEl = verticalsContainer.querySelector('.ec-verticals-label');
        verticalsContainer.innerHTML = '';
        if (labelEl) verticalsContainer.appendChild(labelEl);
        
        let verticalsList = setting.verticals;
        if (typeof verticalsList === 'string') {
            try {
                verticalsList = JSON.parse(verticalsList);
            } catch (e) {
                verticalsList = verticalsList.split(',').map(v => v.trim());
            }
        }
        
        if (Array.isArray(verticalsList)) {
            verticalsList.forEach(v => {
                const chip = document.createElement('span');
                chip.className = 'ec-chip';
                chip.textContent = v;
                verticalsContainer.appendChild(chip);
            });
        }
    }

    if (capabilitiesContainer && capabilities && capabilities.length > 0) {
        capabilitiesContainer.innerHTML = capabilities.map(cap => `
            <li class="ec-row">
                <span class="ec-row-num" aria-hidden="true">${cap.num}</span>
                <div class="ec-row-icon">
                    ${cap.icon_svg}
                </div>
                <div class="ec-row-body">
                    <h3>${cap.title}</h3>
                    <p>${cap.description}</p>
                </div>
                <span class="ec-row-arrow" aria-hidden="true">→</span>
            </li>
        `).join('');
    }
}
