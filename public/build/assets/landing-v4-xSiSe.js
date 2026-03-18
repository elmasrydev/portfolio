document.addEventListener("DOMContentLoaded",()=>{b(),I(),q(),C()});async function b(){try{const t=await(await fetch("/api/page-data")).json();t.hero&&w(t.hero),t.marquee_items&&$(t.marquee_items),t.services&&_(t.services),t.process_steps&&x(t.process_steps),t.projects&&E(t.projects),t.why_items&&L(t.why_items),t.presence_locations&&T(t.presence_locations,t.presence_setting),t.markets&&M(t.markets),t.brands&&S(t.brands),t.testimonials&&B(t.testimonials),t.portfolio_cta&&H(t.portfolio_cta),t.contact&&k(t.contact)}catch(e){console.error("Error fetching page data:",e)}}function w(e){const t=document.querySelector(".hero");if(t&&e){const n=t.querySelector(".hero-label"),i=t.querySelector("h1"),s=t.querySelector(".hero-sub"),a=t.querySelector(".btn-primary"),c=t.querySelector(".btn-ghost");if(n&&(n.textContent=e.label||"Digital Excellence"),i&&(i.innerHTML=e.title||'Innovative solutions for the <span class="accent">modern web.</span>'),s&&(s.textContent=e.subtitle||""),a&&(a.textContent=e.button_primary_text||"Start a Project",a.href=e.button_primary_url||"#contact"),c&&(c.textContent=e.button_secondary_text||"View Work",c.href=e.button_secondary_url||"#projects"),e.stats){const p=t.querySelector(".hero-stats");p&&(p.innerHTML=e.stats.map(r=>`
                    <div class="stat-item">
                        <div class="stat-num">${r.number}<span>${r.suffix||"+"}</span></div>
                        <div class="stat-label">${r.label}</div>
                    </div>
                `).join(""))}}}function $(e){const t=document.getElementById("marqueeTrack");if(t&&e.length>0){const n=e.map(i=>`
            <span>${i.text}</span><span class="dot">·</span>
        `).join("");t.innerHTML=n+n}}function _(e){const t=document.getElementById("servicesGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="service-card reveal">
                <div class="service-icon">
                    ${n.icon_svg}
                </div>
                <h3>${n.title}</h3>
                <p>${n.description}</p>
            </div>
        `).join(""))}function x(e){const t=document.getElementById("processGrid");t&&e.length>0&&(t.innerHTML=e.map((n,i)=>`
            <div class="step reveal">
                <div class="step-num">
                    ${n.icon_svg||`0${i+1}`}
                </div>
                <h4>${n.title}</h4>
                <p>${n.description}</p>
            </div>
        `).join(""))}function E(e){const t=document.getElementById("projectsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="project-card ${n.is_featured?"featured":""} reveal">
                <div class="project-info">
                    <span class="project-tag">${n.category||""}</span>
                    <h3>${n.title}</h3>
                    <p>${n.description}</p>
                    <div class="project-meta">
                        ${n.tags&&n.tags.length>0?n.tags.map(i=>`<span class="meta-tag">${i.name}</span>`).join(""):""}
                    </div>
                </div>
                <div class="project-mockup">
                    ${n.image_url?`<img src="${n.image_url}" alt="${n.title}" style="max-height:100%; max-width:100%; object-fit:contain;">`:n.icon_svg||""}
                </div>
            </div>
        `).join(""))}function L(e){const t=document.getElementById("whyGrid");t&&e.length>0&&(t.innerHTML=e.map((n,i)=>`
            <div class="why-item reveal">
                <div class="why-num">
                    ${n.icon_svg||`0${i+1}`}
                </div>
                <h3>${n.title}</h3>
                <p>${n.description}</p>
            </div>
        `).join(""))}function M(e){const t=document.getElementById("marketsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="market-card reveal">
                <div class="market-flag">
                    <img src="${n.flag_url||"https://flagcdn.com/w80/"+(n.country_code?n.country_code.toLowerCase():"us")+".png"}" alt="${n.country_name}" style="width:48px;height:auto;border-radius:4px;">
                </div>
                <h3>${n.country_name}</h3>
                <p>${n.description}</p>
                <div class="market-badge badge-secondary">${n.badge_text||""}</div>
            </div>
        `).join(""))}function T(e,t){const n=document.getElementById("presenceHeader");n&&t&&(n.innerHTML=`
            <div class="map-section-inner reveal" style="text-align:center; margin-bottom:0;">
                <div class="section-label" style="justify-content:center;">${t.label||"Our Presence"}</div>
                <h2 class="section-title" style="text-align:center; max-width:none;">
                    ${t.title||'6 Markets. One <span class="accent">standard.</span>'}
                </h2>
                <p class="map-subtitle">${t.subtitle||""}</p>
            </div>
        `);const i=document.getElementById("presenceLocations");i&&e.length>0&&(i.innerHTML=e.map(s=>`
            <div class="market-chip" style="flex-direction:column; align-items:flex-start; border-radius:14px; padding:24px 24px 20px; gap:14px; flex:1; min-width:220px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <img class="chip-flag" src="${s.flag_url||"https://flagcdn.com/w160/"+(s.country_code?s.country_code.toLowerCase():"us")+".png"}" alt="${s.name}" style="width:38px;height:26px;"/>
                    <div>
                        <div class="chip-name">${s.name}</div>
                        <div class="chip-role">${s.role}</div>
                    </div>
                </div>
                <p style="font-family:'Lexend',sans-serif;font-size:13px;font-weight:300;color:var(--muted);line-height:1.7;margin:0;">${s.description}</p>
            </div>
        `).join("")),j(e)}async function j(e){const t=document.getElementById("worldMapWrap");if(!t)return;const n=document.getElementById("worldMapSvg"),i=document.getElementById("mapPins");if(!n||!i)return;n.innerHTML="",i.innerHTML="";const s=t.offsetWidth,a=t.offsetHeight;if(s===0||a===0)return;const c=new Set(e.map(o=>o.num_id?o.num_id.toString():"")),p=d3.geoNaturalEarth1().rotate([-10,0]).scale(s/4.2).translate([s/2,a/1.85]),r=d3.geoPath().projection(p),g=d3.geoGraticule().step([20,20]),u=d3.select("#worldMapSvg");u.append("path").datum({type:"Sphere"}).attr("class","map-sphere").attr("d",r),u.append("path").datum(g()).attr("class","map-graticule").attr("d",r);try{const o=await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),m=topojson.feature(o,o.objects.countries).features;u.selectAll("path.country-path").data(m).join("path").attr("class",l=>l.id&&c.has(l.id.toString())?"country-path country-highlighted":"country-path").attr("d",r),u.append("path").datum(topojson.mesh(o,o.objects.countries,(l,v)=>l!==v)).attr("fill","none").attr("stroke","rgba(0,180,216,0.15)").attr("stroke-width","0.4").attr("d",r)}catch(o){console.warn("Map data failed to load",o)}e.forEach((o,m)=>{if(!o.lng||!o.lat)return;const[l,v]=p([o.lng,o.lat]),f=l/s*100,y=v/a*100,d=document.createElement("div");d.className="flag-pin",d.style.left=f+"%",d.style.top=y+"%",d.style.animationDelay=`${.1*(m+1)}s`,d.innerHTML=`
            <div class="pin-body">
                <img src="${o.flag_url||"https://flagcdn.com/w160/"+(o.country_code?o.country_code.toLowerCase():"us")+".png"}" alt="${o.name}" loading="lazy"/>
            </div>
            <div class="pin-tip"></div>
            <div class="pin-dot"></div>
            <div class="flag-label">${o.name}</div>
        `,i.appendChild(d)})}function S(e){const t=document.getElementById("brandsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="brand-logo-card">
                <div class="brand-logo-box" style="--ac:${n.accent_color||"#00B4D8"}">
                    ${n.logo_url?`<img src="${n.logo_url}" alt="${n.name}" style="max-width:80%; max-height:80%; object-fit:contain;">`:`<span class="bl-initials">${n.initials||n.name.substring(0,2).toUpperCase()}</span>`}
                </div>
                <div class="brand-logo-name">${n.name}</div>
            </div>
        `).join(""))}function B(e){const t=document.getElementById("testimonialsRow1"),n=document.getElementById("testimonialsRow2");t&&e.row1&&e.row1.length>0&&(t.innerHTML=e.row1.map(i=>h(i)).join("")),n&&e.row2&&e.row2.length>0&&(n.innerHTML=e.row2.map(i=>h(i)).join(""))}function h(e){return`
        <div class="testimonial-card">
            ${e.photo_url?`<img class="testimonial-photo" src="${e.photo_url}" alt="${e.author_name}"/>`:""}
            <div class="testimonial-body">
                <div class="stars">${"★".repeat(e.stars||5)}${"☆".repeat(5-(e.stars||5))}</div>
                <div class="quote-mark">"</div>
                <p class="testimonial-text">${e.quote}</p>
                <div class="testimonial-author">
                    <div class="author-avatar" style="display:none;">
                        <img src="${e.photo_url}" alt="${e.author_name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>
                    </div>
                    <div>
                        <div class="author-name">${e.author_name}</div>
                        <div class="author-role">${e.author_role||""}</div>
                    </div>
                </div>
            </div>
        </div>
    `}function H(e){const t=document.getElementById("portfolio");if(t&&e){const n=t.querySelector(".section-label"),i=t.querySelector("h2"),s=t.querySelector("p"),a=t.querySelector(".btn-download");n&&(n.textContent=e.label||"Company Portfolio"),i&&(i.innerHTML=e.heading||'See the full scope of <span style="color:var(--cyan)">our work.</span>'),s&&(s.textContent=e.description||""),a&&(a.innerHTML=`${e.button_text||"Download Portfolio"} <span>→</span>`,e.pdf_url&&(a.href=e.pdf_url))}}function k(e){const t=document.querySelector(".contact-section");if(t&&e){const n=t.querySelector(".contact-left h2"),i=t.querySelector(".contact-sub"),s=document.getElementById("contactChannels");if(n&&(n.textContent=e.heading||"Let’s build something together."),i&&(i.textContent=e.sub_text||""),s){let a="";e.email&&(a+=`
                    <a href="mailto:${e.email}" class="contact-channel">
                        <div class="ch-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <div>
                            <div class="ch-lbl">Email Us</div>
                            <div class="ch-val">${e.email}</div>
                        </div>
                    </a>
                `),e.whatsapp_number&&(a+=`
                    <a href="${e.whatsapp_url}" target="_blank" class="contact-channel wa">
                        <div class="ch-icon wa-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
                        </div>
                        <div>
                            <div class="ch-lbl">WhatsApp</div>
                            <div class="ch-val">${e.whatsapp_number}</div>
                        </div>
                    </a>
                `),e.address&&(a+=`
                    <div class="contact-channel">
                        <div class="ch-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <div class="ch-lbl">Headquarters</div>
                            <div class="ch-val addr">${e.address}</div>
                        </div>
                    </div>
                `),s.innerHTML=a}}}function I(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.querySelector(".form-submit");if(!n)return;const i=n.innerHTML;n.innerHTML="Sending...",n.disabled=!0;const s={name:document.getElementById("name").value,email:document.getElementById("email").value,company:document.getElementById("company").value,service:document.getElementById("service").value,message:document.getElementById("message").value};try{const a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(s)}),c=await a.json();if(a.ok)n.innerHTML="Sent Successfully",e.reset(),setTimeout(()=>{n.innerHTML=i,n.disabled=!1},3e3);else throw new Error(c.message||"Error occurred")}catch{n.innerHTML="Error",setTimeout(()=>{n.innerHTML=i,n.disabled=!1},3e3)}})}function q(){const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("reveal-active")})},{threshold:.1});document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}function C(){const e=document.getElementById("hamburger"),t=document.getElementById("navLinks");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("active")})}
