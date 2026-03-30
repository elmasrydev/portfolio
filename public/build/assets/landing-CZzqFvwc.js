document.addEventListener("DOMContentLoaded",()=>{_(),k(),b()});function b(){const e=document.getElementById("hamburger"),t=document.getElementById("mobileMenu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("open"),t.classList.toggle("open"),document.body.style.overflow=t.classList.contains("open")?"hidden":""}),globalThis.closeMobileMenu=()=>{e&&e.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}}async function _(){try{const t=await(await fetch("/api/page-data")).json();t.hero&&x(t.hero,t.stats),t.marquee_items&&S(t.marquee_items),t.services&&E(t.services),t.process_steps&&$(t.process_steps),t.projects&&q(t.projects),t.why_items&&L(t.why_items),t.markets&&T(t.markets),t.presence_setting&&M(t.presence_setting),t.presence_locations&&j(t.presence_locations),t.brands&&C(t.brands),t.testimonials&&H(t.testimonials),t.portfolio_cta&&B(t.portfolio_cta),t.contact&&I(t.contact),t.site&&(N(t.site),w(t.site.contact_email||(t.contact?t.contact.email:null))),globalThis.dispatchEvent(new Event("content-loaded"))}catch(e){console.error("Error fetching page data:",e)}}function w(e){if(!e)return;document.querySelectorAll(".dynamic-email").forEach(n=>{n.href=`mailto:${e}`;const o=n.querySelector(".ch-val")||n.querySelector(".email-text");if(o)o.textContent=e;else if(n.querySelector("svg")){let i=Array.from(n.childNodes).find(a=>a.nodeType===3&&a.textContent.trim().length>0);i?i.textContent=e:n.textContent.length>0}else n.textContent=e})}function x(e,t){if(!e)return;const n=document.querySelector(".hero-label"),o=document.querySelector(".hero-content h1"),s=document.querySelector(".hero-sub"),i=document.querySelector(".hero-actions .btn-primary"),a=document.querySelector(".hero-actions .btn-ghost");n&&(n.textContent=e.label),o&&(o.innerHTML=e.title_html||e.title),s&&(s.textContent=e.subtitle),i&&e.cta_text&&(i.textContent=e.cta_text,i.href=e.cta_url||"#contact"),a&&e.secondary_cta_text&&(a.textContent=e.secondary_cta_text,a.href=e.secondary_cta_url||"#projects");const c=document.getElementById("heroStats");c&&t.length>0&&(c.innerHTML=t.map(d=>`
            <div class="stat-item">
                <span class="stat-num">${d.value}</span>
                <span class="stat-label">${d.label}</span>
            </div>
        `).join(""))}function S(e){const t=document.getElementById("marqueeTrack");if(t&&e.length>0){const n=e.map(o=>`<span class="marquee-item">${o.text}</span>`).join("");t.innerHTML=n+n}}function E(e){const t=document.getElementById("servicesGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="service-card reveal">
                <div class="service-icon">
                    ${n.icon_svg}
                </div>
                <h3 class="service-title">${n.title}</h3>
                <p class="service-desc">${n.description}</p>
            </div>
        `).join(""))}function $(e){const t=document.getElementById("processGrid");t&&e.length>0&&(t.innerHTML=e.map((n,o)=>`
            <div class="step reveal">
                <div class="step-num">
                    ${n.icon_svg}
                </div>
                <h4>${n.title}</h4>
                <p>${n.description}</p>
            </div>
        `).join(""))}function q(e){const t=document.getElementById("projectsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="project-card ${n.is_featured===!0||n.is_featured===1||n.is_featured==="1"?"featured":""} reveal">
                <div class="project-content">
                    <span class="project-tag">${n.category||""}</span>
                    <h3 class="project-title">${n.title}</h3>
                    <p class="project-desc">${n.description}</p>
                    <div class="project-tech">
                        ${n.tags.map(s=>`<span class="tech-tag">${s.name}</span>`).join("")}
                    </div>
                </div>
                <div class="project-media">
                    ${n.image_url?`<img src="${n.image_url}" alt="${n.title}" class="project-img">`:n.icon_svg||""}
                </div>
            </div>
        `).join(""))}function L(e){const t=document.getElementById("whyGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="why-item reveal">
                <div class="why-num">
                    ${n.icon_svg}
                </div>
                <div class="why-body">
                    <h3>${n.title}</h3>
                    <p>${n.description}</p>
                </div>
            </div>
        `).join(""))}function M(e){const t=document.getElementById("presenceLabel"),n=document.getElementById("presenceTitle"),o=document.getElementById("presenceSubtitle");t&&e.label&&(t.textContent=e.label),n&&e.heading_count&&(n.innerHTML=`${e.heading_count}. <span class="accent">${e.heading_standard||"standard."}</span>`),o&&e.subtitle&&(o.textContent=e.subtitle)}function T(e){const t=document.getElementById("marketsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="market-chip" style="flex-direction:column; align-items:flex-start; border-radius:14px; padding:24px 24px 20px; gap:14px; flex:1; min-width:220px;">
                <div style="display:flex; align-items:center; gap:12px;">
                <img class="chip-flag" src="${n.flag_url||"https://flagcdn.com/w80/sa.png"}" alt="${n.flag_alt}" style="width:38px;height:26px;"/>
                <div>
                    <div class="chip-name">${n.country_name}</div>
                    <div class="chip-role">${n.badge_text}</div>
                </div>
                </div>
                <p style="font-family:'Lexend',sans-serif;font-size:13px;font-weight:300;color:var(--muted);line-height:1.7;margin:0;">${n.description}</p>
            </div>
        `).join(""))}async function j(e){const t=document.getElementById("worldMapWrap"),n=document.getElementById("worldMapSvg"),o=document.getElementById("mapPins");if(!t||!n||!o||!e||e.length===0)return;const s=t.offsetWidth,i=t.offsetHeight,a=new Set(e.map(r=>r.num_id.toString())),c=d3.geoNaturalEarth1().rotate([50,-5]).scale(s/5.5).translate([s/2,i/1.7]),d=d3.geoPath().projection(c),v=d3.geoGraticule().step([20,20]),m=d3.select("#worldMapSvg");m.append("path").datum({type:"Sphere"}).attr("class","map-sphere").attr("d",d).style("fill","#040c18").style("stroke","none"),m.append("path").datum(v()).attr("class","map-graticule").attr("d",d).style("fill","none").style("stroke","rgba(0,180,216,0.08)").style("stroke-width","0.5");try{const r=await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),h=topojson.feature(r,r.objects.countries).features;m.selectAll("path.country-path").data(h).join("path").attr("class",l=>l.id&&a.has(l.id.toString())?"country-path country-highlighted":"country-path").attr("d",d).style("fill",l=>l.id&&a.has(l.id.toString())?"rgba(0,180,216,0.2)":"#0f172a").style("stroke",l=>l.id&&a.has(l.id.toString())?"rgba(0,180,216,0.4)":"rgba(0,180,216,0.05)").style("stroke-width","0.5"),m.append("path").datum(topojson.mesh(r,r.objects.countries,(l,f)=>l!==f)).attr("fill","none").attr("stroke","rgba(0,180,216,0.15)").attr("stroke-width","0.4").attr("d",d)}catch(r){console.warn("Map data failed to load",r)}e.forEach(r=>{const[h,l]=c([Number.parseFloat(r.lng),Number.parseFloat(r.lat)]),f=h/s*100,g=l/i*100,u=document.createElement("div");u.className="flag-pin",u.style.left=f+"%",u.style.top=g+"%",u.style.position="absolute";const p=document.createElement("div");p.className="pin-glow",p.style.left=f+"%",p.style.top=g+"%",p.style.position="absolute",u.innerHTML=`
          <div class="pin-body">
            <img src="https://flagcdn.com/w160/${r.code}.png" alt="${r.name}" loading="lazy" style="object-position:${r.pos}; width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="pin-tip"></div>
          <div class="pin-dot"></div>
          <div class="flag-label">${r.name}</div>
        `,o.appendChild(p),o.appendChild(u)})}function C(e){const t=document.getElementById("brandsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="brand-logo-card">
                <div class="brand-logo-box" style="--ac:${n.accent_color||"#00B4D8"}">
                    ${n.logo_url?`<img src="${n.logo_url}" alt="${n.name}" style="max-width:80%;max-height:80%;object-fit:contain;">`:`<span class="bl-initials">${n.initials}</span>`}
                </div>
                <div class="brand-logo-name">${n.name}</div>
            </div>
        `).join(""))}function H(e){const t=document.getElementById("testimonialsRow1"),n=document.getElementById("testimonialsRow2");t&&e.row1.length>0&&(t.innerHTML=e.row1.map(o=>y(o)).join("")),n&&e.row2.length>0&&(n.innerHTML=e.row2.map(o=>y(o)).join(""))}function y(e){const t=Number.parseInt(e.stars)||5;return`
        <div class="testimonial-card">
            <img class="testimonial-photo" src="${e.photo_url||"https://i.pravatar.cc/200"}" alt="${e.author_name}" />
            <div class="testimonial-body">
                <div class="stars">${"★".repeat(t)}</div>
                <div class="quote-mark">"</div>
                <p class="testimonial-text">${e.quote}</p>
                <div class="testimonial-author">
                    <div class="author-name">${e.author_name}</div>
                    <div class="author-role">${e.author_role}</div>
                </div>
            </div>
        </div>
    `}function B(e){const t=document.querySelector(".portfolio-cta");if(t&&e){const n=t.querySelector(".section-label"),o=t.querySelector("h2"),s=t.querySelector(".portfolio-left p"),i=t.querySelector(".btn-download");n&&e.label&&(n.textContent=e.label),o&&e.heading&&(o.innerHTML=e.heading),s&&e.description&&(s.textContent=e.description),i&&(e.button_text&&(i.textContent=e.button_text),e.pdf_url&&(i.href=e.pdf_url,i.setAttribute("download","")))}}function I(e){const t=document.querySelector("#contact");if(t){const n=t.querySelector(".section-label");if(n&&e.label&&(n.textContent=e.label),e.heading){const s=t.querySelector("h2");s&&(s.innerHTML=e.heading)}if(e.sub_text){const s=t.querySelector(".contact-sub");s&&(s.textContent=e.sub_text)}const o=t.querySelectorAll(".contact-channel");if(o[0]&&e.email){const s=o[0].querySelector(".ch-val");s&&(s.textContent=e.email),o[0].href=`mailto:${e.email}`}if(o[1]&&e.address){const s=o[1].querySelector(".ch-val");s&&(s.innerHTML=e.address)}if(o[2]&&e.whatsapp_number){const s=o[2].querySelector(".ch-val");s&&(s.textContent=e.whatsapp_number),e.whatsapp_url&&(o[2].href=e.whatsapp_url)}}}function k(){const e=document.getElementById("contactForm");if(!e)return;const t=e.tagName==="FORM"?e:e.querySelector("form");t&&t.addEventListener("submit",async n=>{n.preventDefault();const o=t.querySelector("button"),s=o.innerHTML;o.innerHTML="Sending...",o.disabled=!0;const i={name:t.querySelector('[name="name"]').value,email:t.querySelector('[name="email"]').value,company:t.querySelector('[name="company"]').value,service:t.querySelector('[name="service"]').value,message:t.querySelector('[name="message"]').value};try{const a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(i)}),c=await a.json();if(a.ok)o.innerHTML="Success!",t.reset(),setTimeout(()=>{o.innerHTML=s,o.disabled=!1},3e3);else throw new Error(c.message||"Something went wrong")}catch(a){o.innerHTML="Error",alert(a.message),setTimeout(()=>{o.innerHTML=s,o.disabled=!1},3e3)}})}function N(e){if(!e)return;const t=document.querySelector(".footer-brand p");t&&e.footer_description&&(t.textContent=e.footer_description);const n=document.querySelector(".footer-secondary p");n&&e.copyright&&(n.textContent=e.copyright);const o={facebook:e.facebook_url,twitter:e.twitter_url,linkedin:e.linkedin_url,instagram:e.instagram_url};Object.entries(o).forEach(([s,i])=>{if(!i)return;const a=document.querySelector(`.social-btn.${s}`);a&&(a.href=i)})}
