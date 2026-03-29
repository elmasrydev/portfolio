document.addEventListener("DOMContentLoaded",()=>{w(),I(),b()});function b(){const e=document.getElementById("hamburger"),t=document.getElementById("mobileMenu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("open"),t.classList.toggle("open"),document.body.style.overflow=t.classList.contains("open")?"hidden":""}),window.closeMobileMenu=()=>{e&&e.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}}async function w(){try{const t=await(await fetch("/api/page-data")).json();t.hero&&_(t.hero,t.stats),t.marquee_items&&x(t.marquee_items),t.services&&$(t.services),t.process_steps&&E(t.process_steps),t.projects&&S(t.projects),t.why_items&&M(t.why_items),t.markets&&T(t.markets),t.presence_setting&&L(t.presence_setting),t.presence_locations&&q(t.presence_locations),t.brands&&j(t.brands),t.testimonials&&H(t.testimonials),t.portfolio_cta&&C(t.portfolio_cta),t.contact&&B(t.contact),window.dispatchEvent(new Event("content-loaded"))}catch(e){console.error("Error fetching page data:",e)}}function _(e,t){const n=document.querySelector(".hero-title"),s=document.querySelector(".hero-subtext"),i=document.querySelector(".hero-content .btn-primary"),a=document.querySelector(".hero-content .btn-secondary");n&&(n.innerHTML=e.title),s&&(s.textContent=e.subtitle),i&&e.cta_text&&(i.textContent=e.cta_text,i.href=e.cta_url||"#"),a&&e.secondary_cta_text&&(a.textContent=e.secondary_cta_text,a.href=e.secondary_cta_url||"#");const l=document.getElementById("heroStats");l&&t.length>0&&(l.innerHTML=t.map(c=>`
            <div class="stat-item">
                <span class="stat-num">${c.value}</span>
                <span class="stat-label">${c.label}</span>
            </div>
        `).join(""))}function x(e){const t=document.getElementById("marqueeTrack");if(t&&e.length>0){const n=e.map(s=>`<span class="marquee-item">${s.text}</span>`).join("");t.innerHTML=n+n}}function $(e){const t=document.getElementById("servicesGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="service-card reveal">
                <div class="service-icon">
                    ${n.icon_svg}
                </div>
                <h3 class="service-title">${n.title}</h3>
                <p class="service-desc">${n.description}</p>
            </div>
        `).join(""))}function E(e){const t=document.getElementById("processGrid");t&&e.length>0&&(t.innerHTML=e.map((n,s)=>`
            <div class="step reveal">
                <div class="step-num">
                    ${n.icon_svg}
                </div>
                <h4>${n.title}</h4>
                <p>${n.description}</p>
            </div>
        `).join(""))}function S(e){const t=document.getElementById("projectsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="project-card ${n.is_featured?"featured":""} reveal">
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
        `).join(""))}function M(e){const t=document.getElementById("whyGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="why-item reveal">
                <div class="why-num">
                    ${n.icon_svg}
                </div>
                <div class="why-body">
                    <h3>${n.title}</h3>
                    <p>${n.description}</p>
                </div>
            </div>
        `).join(""))}function L(e){const t=document.getElementById("presenceLabel"),n=document.getElementById("presenceTitle"),s=document.getElementById("presenceSubtitle");t&&e.label&&(t.textContent=e.label),n&&e.heading_count&&(n.innerHTML=`${e.heading_count}. <span class="accent">${e.heading_standard||"standard."}</span>`),s&&e.subtitle&&(s.textContent=e.subtitle)}function T(e){const t=document.getElementById("marketsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
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
        `).join(""))}async function q(e){const t=document.getElementById("worldMapWrap"),n=document.getElementById("worldMapSvg"),s=document.getElementById("mapPins");if(!t||!n||!s||!e||e.length===0)return;const i=t.offsetWidth,a=t.offsetHeight,l=new Set(e.map(o=>o.num_id.toString())),c=d3.geoNaturalEarth1().rotate([-10,0]).scale(i/4.2).translate([i/2,a/1.85]),u=d3.geoPath().projection(c),y=d3.geoGraticule().step([20,20]),m=d3.select("#worldMapSvg");m.append("path").datum({type:"Sphere"}).attr("class","map-sphere").attr("d",u).style("fill","#040c18").style("stroke","none"),m.append("path").datum(y()).attr("class","map-graticule").attr("d",u).style("fill","none").style("stroke","rgba(0,180,216,0.08)").style("stroke-width","0.5");try{const o=await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),g=topojson.feature(o,o.objects.countries).features;m.selectAll("path.country-path").data(g).join("path").attr("class",r=>r.id&&l.has(r.id.toString())?"country-path country-highlighted":"country-path").attr("d",u).style("fill",r=>r.id&&l.has(r.id.toString())?"rgba(0,180,216,0.2)":"#0f172a").style("stroke",r=>r.id&&l.has(r.id.toString())?"rgba(0,180,216,0.4)":"rgba(0,180,216,0.05)").style("stroke-width","0.5"),m.append("path").datum(topojson.mesh(o,o.objects.countries,(r,f)=>r!==f)).attr("fill","none").attr("stroke","rgba(0,180,216,0.15)").attr("stroke-width","0.4").attr("d",u)}catch(o){console.warn("Map data failed to load",o)}e.forEach(o=>{const[g,r]=c([parseFloat(o.lng),parseFloat(o.lat)]),f=g/i*100,h=r/a*100,d=document.createElement("div");d.className="flag-pin",d.style.left=f+"%",d.style.top=h+"%",d.style.position="absolute";const p=document.createElement("div");p.className="pin-glow",p.style.left=f+"%",p.style.top=h+"%",p.style.position="absolute",d.innerHTML=`
          <div class="pin-body">
            <img src="https://flagcdn.com/w160/${o.code}.png" alt="${o.name}" loading="lazy" style="object-position:${o.pos}; width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="pin-tip"></div>
          <div class="pin-dot"></div>
          <div class="flag-label">${o.name}</div>
        `,s.appendChild(p),s.appendChild(d)})}function j(e){const t=document.getElementById("brandsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="brand-logo-card">
                <div class="brand-logo-box" style="--ac:${n.accent_color||"#00B4D8"}">
                    ${n.logo_url?`<img src="${n.logo_url}" alt="${n.name}" style="max-width:80%;max-height:80%;object-fit:contain;">`:`<span class="bl-initials">${n.initials}</span>`}
                </div>
                <div class="brand-logo-name">${n.name}</div>
            </div>
        `).join(""))}function H(e){const t=document.getElementById("testimonialsRow1"),n=document.getElementById("testimonialsRow2");t&&e.row1.length>0&&(t.innerHTML=e.row1.map(s=>v(s)).join("")),n&&e.row2.length>0&&(n.innerHTML=e.row2.map(s=>v(s)).join(""))}function v(e){const t=parseInt(e.stars)||5;return`
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
    `}function C(e){const t=document.querySelector(".portfolio-cta");if(t&&e){const n=t.querySelector(".section-label"),s=t.querySelector("h2"),i=t.querySelector(".portfolio-left p"),a=t.querySelector(".btn-download");n&&e.label&&(n.textContent=e.label),s&&e.heading&&(s.innerHTML=e.heading),i&&e.description&&(i.textContent=e.description),a&&(e.button_text&&(a.textContent=e.button_text),e.pdf_url&&(a.href=e.pdf_url,a.setAttribute("download","")))}}function B(e){const t=document.querySelector("#contact");if(t){const n=t.querySelector(".section-label");if(n&&e.label&&(n.textContent=e.label),e.heading){const i=t.querySelector("h2");i&&(i.innerHTML=e.heading)}if(e.sub_text){const i=t.querySelector(".contact-sub");i&&(i.textContent=e.sub_text)}const s=t.querySelectorAll(".contact-channel");if(s[0]&&e.email){const i=s[0].querySelector(".ch-val");i&&(i.textContent=e.email),s[0].href=`mailto:${e.email}`}if(s[1]&&e.address){const i=s[1].querySelector(".ch-val");i&&(i.innerHTML=e.address)}if(s[2]&&e.whatsapp_number){const i=s[2].querySelector(".ch-val");i&&(i.textContent=e.whatsapp_number),e.whatsapp_url&&(s[2].href=e.whatsapp_url)}}}function I(){const e=document.getElementById("contactForm");if(!e)return;const t=e.tagName==="FORM"?e:e.querySelector("form");t&&t.addEventListener("submit",async n=>{n.preventDefault();const s=t.querySelector("button"),i=s.innerHTML;s.innerHTML="Sending...",s.disabled=!0;const a={name:t.querySelector('[name="name"]').value,email:t.querySelector('[name="email"]').value,company:t.querySelector('[name="company"]').value,service:t.querySelector('[name="service"]').value,message:t.querySelector('[name="message"]').value};try{const l=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(a)}),c=await l.json();if(l.ok)s.innerHTML="Success!",t.reset(),setTimeout(()=>{s.innerHTML=i,s.disabled=!1},3e3);else throw new Error(c.message||"Something went wrong")}catch(l){s.innerHTML="Error",alert(l.message),setTimeout(()=>{s.innerHTML=i,s.disabled=!1},3e3)}})}
