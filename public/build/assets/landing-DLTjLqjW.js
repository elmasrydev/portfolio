document.addEventListener("DOMContentLoaded",()=>{_(),N(),b()});function b(){const e=document.getElementById("hamburger"),t=document.getElementById("mobileMenu");e&&t&&e.addEventListener("click",()=>{e.classList.toggle("open"),t.classList.toggle("open"),document.body.style.overflow=t.classList.contains("open")?"hidden":""}),globalThis.closeMobileMenu=()=>{e&&e.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}}async function _(){try{const t=await(await fetch("/api/page-data")).json();t.hero&&E(t.hero,t.stats),t.marquee_items&&x(t.marquee_items),t.services&&$(t.services),t.process_steps&&S(t.process_steps),t.projects&&L(t.projects),t.why_items&&q(t.why_items),t.markets&&M(t.markets),t.presence_setting&&C(t.presence_setting),t.presence_locations&&T(t.presence_locations),t.brands&&j(t.brands),t.testimonials&&B(t.testimonials),t.portfolio_cta&&H(t.portfolio_cta),t.ecom_setting&&P(t.ecom_setting,t.ecom_capabilities),t.contact&&I(t.contact),t.site&&k(t.site),t.contact&&t.contact.email&&w(t.contact.email),globalThis.dispatchEvent(new Event("content-loaded"));const n=document.getElementById("page-loader");n&&(n.classList.add("loaded"),setTimeout(()=>n.remove(),600))}catch(e){console.error("Error fetching page data:",e)}}function w(e){if(!e)return;document.querySelectorAll(".dynamic-email").forEach(n=>{n.href=`mailto:${e}`;const o=n.querySelector(".ch-val")||n.querySelector(".email-text");if(o)o.textContent=e;else if(n.querySelector("svg")){let a=Array.from(n.childNodes).find(s=>s.nodeType===3&&s.textContent.trim().length>0);a?a.textContent=e:n.textContent.length>0}else n.textContent=e})}function E(e,t){if(!e)return;const n=document.querySelector(".hero-label"),o=document.querySelector(".hero-content h1"),i=document.querySelector(".hero-sub"),a=document.querySelector(".hero-actions .btn-primary"),s=document.querySelector(".hero-actions .btn-ghost");n&&(n.textContent=e.label),o&&(o.innerHTML=e.title_html||e.title),i&&(i.textContent=e.subtitle),a&&e.cta_text&&(a.textContent=e.cta_text,a.href=e.cta_url||"#contact"),s&&e.secondary_cta_text&&(s.textContent=e.secondary_cta_text,s.href=e.secondary_cta_url||"#projects");const c=document.getElementById("heroStats");c&&t.length>0&&(c.innerHTML=t.map(d=>`
            <div class="stat-item">
                <span class="stat-num">${d.value}</span>
                <span class="stat-label">${d.label}</span>
            </div>
        `).join(""))}function x(e){const t=document.getElementById("marqueeTrack");if(t&&e.length>0){const n=e.map(o=>`<span class="marquee-item">${o.text}</span>`).join("");t.innerHTML=n+n}}function $(e){const t=document.getElementById("servicesGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="service-card reveal">
                <div class="service-icon">
                    ${n.icon_svg}
                </div>
                <h3 class="service-title">${n.title}</h3>
                <p class="service-desc">${n.description}</p>
            </div>
        `).join(""))}function S(e){const t=document.getElementById("processGrid");t&&e.length>0&&(t.innerHTML=e.map((n,o)=>`
            <div class="step reveal">
                <div class="step-num">
                    ${n.icon_svg}
                </div>
                <h4>${n.title}</h4>
                <p>${n.description}</p>
            </div>
        `).join(""))}function L(e){const t=document.getElementById("projectsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="project-card ${!!n.is_featured?"featured":""} reveal">
                <div class="project-content">
                    <span class="project-tag">${n.category||""}</span>
                    <h3 class="project-title">${n.title}</h3>
                    <p class="project-desc">${n.description}</p>
                    <div class="project-tech">
                        ${n.tags.map(i=>`<span class="tech-tag">${i.name}</span>`).join("")}
                    </div>
                </div>
                <div class="project-media">
                    ${n.image_url?`<img src="${n.image_url}" alt="${n.title}" class="project-img">`:n.icon_svg||""}
                </div>
            </div>
        `).join(""))}function q(e){const t=document.getElementById("whyGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="why-item reveal">
                <div class="why-num">
                    ${n.icon_svg}
                </div>
                <div class="why-body">
                    <h3>${n.title}</h3>
                    <p>${n.description}</p>
                </div>
            </div>
        `).join(""))}function C(e){const t=document.getElementById("presenceLabel"),n=document.getElementById("presenceTitle"),o=document.getElementById("presenceSubtitle");t&&e.label&&(t.textContent=e.label),n&&e.heading_count&&(n.innerHTML=`${e.heading_count}. <span class="accent">${e.heading_standard||"standard."}</span>`),o&&e.subtitle&&(o.textContent=e.subtitle)}function M(e){const t=document.getElementById("marketsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
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
        `).join(""))}async function T(e){const t=document.getElementById("worldMapWrap"),n=document.getElementById("worldMapSvg"),o=document.getElementById("mapPins");if(!t||!n||!o||!e||e.length===0)return;const i=t.offsetWidth,a=t.offsetHeight,s=new Set(e.map(l=>l.num_id.toString())),c=d3.geoNaturalEarth1().rotate([-10,0]).scale(i/4.8).translate([i/2,a/1.35]),d=d3.geoPath().projection(c),h=d3.geoGraticule().step([20,20]),r=d3.select("#worldMapSvg");r.append("path").datum({type:"Sphere"}).attr("class","map-sphere").attr("d",d),r.append("path").datum(h()).attr("class","map-graticule").attr("d",d);try{const l=await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),p=topojson.feature(l,l.objects.countries).features;r.selectAll("path.country-path").data(p).join("path").attr("class",m=>m.id&&s.has(m.id.toString())?"country-path country-highlighted":"country-path").attr("d",d),r.append("path").datum(topojson.mesh(l,l.objects.countries,(m,v)=>m!==v)).attr("fill","none").attr("stroke","rgba(0,180,216,0.15)").attr("stroke-width","0.4").attr("d",d)}catch(l){console.warn("Map data failed to load",l)}e.forEach(l=>{const[p,m]=c([Number.parseFloat(l.lng),Number.parseFloat(l.lat)]),v=p/i*100,g=m/a*100,u=document.createElement("div");u.className="flag-pin",u.style.left=v+"%",u.style.top=g+"%",u.style.position="absolute";const f=document.createElement("div");f.className="pin-glow",f.style.left=v+"%",f.style.top=g+"%",f.style.position="absolute",u.innerHTML=`
          <div class="pin-body">
            <img src="https://flagcdn.com/w160/${l.code}.png" alt="${l.name}" loading="lazy" style="object-position:${l.pos}; width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="pin-tip"></div>
          <div class="pin-dot"></div>
          <div class="flag-label">${l.name}</div>
        `,o.appendChild(f),o.appendChild(u)})}function j(e){const t=document.getElementById("brandsGrid");t&&e.length>0&&(t.innerHTML=e.map(n=>`
            <div class="brand-logo-card">
                <div class="brand-logo-box" style="--ac:${n.accent_color||"#00B4D8"}">
                    ${n.logo_url?`<img src="${n.logo_url}" alt="${n.name}" style="max-width:80%;max-height:80%;object-fit:contain;">`:`<span class="bl-initials">${n.initials}</span>`}
                </div>
                <div class="brand-logo-name">${n.name}</div>
            </div>
        `).join(""))}function B(e){const t=document.getElementById("testimonialsRow1"),n=document.getElementById("testimonialsRow2");t&&e.row1.length>0&&(t.innerHTML=e.row1.map(o=>y(o)).join("")),n&&e.row2.length>0&&(n.innerHTML=e.row2.map(o=>y(o)).join(""))}function y(e){const t=Number.parseInt(e.stars)||5;return`
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
    `}function H(e){const t=document.querySelector(".portfolio-cta");if(t&&e){const n=t.querySelector(".section-label"),o=document.getElementById("portfolio-heading")||t.querySelector("h2"),i=document.getElementById("portfolio-desc")||t.querySelector(".portfolio-left p"),a=t.querySelector(".btn-download");n&&e.label&&(n.textContent=e.label),o&&e.heading&&(o.innerHTML=e.heading),i&&e.description&&(i.textContent=e.description),a&&(e.button_text&&(a.textContent=e.button_text),e.pdf_url?(a.href=e.pdf_url,a.style.display="inline-flex",a.target="_blank",(e.pdf_url.startsWith(window.location.origin)||e.pdf_url.startsWith("/")||!e.pdf_url.startsWith("http"))&&a.setAttribute("download","Portfolio.pdf")):a.style.display="none");const s=document.querySelector(".btn-download-hero");s&&e.pdf_url&&(s.href=e.pdf_url,s.style.display="inline-flex",s.target="_blank",(e.pdf_url.startsWith(window.location.origin)||e.pdf_url.startsWith("/")||!e.pdf_url.startsWith("http"))&&s.setAttribute("download","Portfolio.pdf"))}}function I(e){const t=document.querySelector("#contact");if(t){const n=t.querySelector(".section-label");if(n&&e.label&&(n.textContent=e.label),e.heading){const i=t.querySelector("h2");i&&(i.innerHTML=e.heading)}if(e.sub_text){const i=t.querySelector(".contact-sub");i&&(i.textContent=e.sub_text)}const o=t.querySelectorAll(".contact-channel");if(o[0]&&e.email){const i=o[0].querySelector(".ch-val");i&&(i.textContent=e.email),o[0].href=`mailto:${e.email}`}if(o[1]&&e.address){const i=o[1].querySelector(".ch-val");i&&(i.innerHTML=e.address)}if(o[2]&&e.whatsapp_number){const i=o[2].querySelector(".ch-val");i&&(i.textContent=e.whatsapp_number),e.whatsapp_url&&(o[2].href=e.whatsapp_url)}}}function N(){const e=document.getElementById("contactForm");if(!e)return;const t=e.tagName==="FORM"?e:e.querySelector("form");t&&t.addEventListener("submit",async n=>{n.preventDefault();const o=t.querySelector("button"),i=o.innerHTML;o.innerHTML="Sending...",o.disabled=!0;const a={name:t.querySelector('[name="name"]').value,email:t.querySelector('[name="email"]').value,company:t.querySelector('[name="company"]').value,service:t.querySelector('[name="service"]').value,message:t.querySelector('[name="message"]').value};try{const s=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(a)}),c=await s.json();if(s.ok)o.innerHTML="Success!",t.reset(),setTimeout(()=>{o.innerHTML=i,o.disabled=!1},3e3);else throw new Error(c.message||"Something went wrong")}catch(s){o.innerHTML="Error",alert(s.message),setTimeout(()=>{o.innerHTML=i,o.disabled=!1},3e3)}})}function k(e){if(!e)return;const t=document.querySelector(".footer-brand p");t&&e.footer_description&&(t.textContent=e.footer_description);const n=document.querySelector(".footer-bottom p:first-child");n&&e.copyright&&(n.textContent=e.copyright);const o={facebook:e.facebook_url,twitter:e.twitter_url,linkedin:e.linkedin_url,instagram:e.instagram_url};Object.entries(o).forEach(([i,a])=>{const s=document.querySelector(`.footer-social .social-btn.${i}`);if(s)if(console.log(`Setting ${i} link to ${a}`),a){s.href=a;const c=s.closest(".social-item");c&&(c.style.display="block")}else{const c=s.closest(".social-item");c&&(c.style.display="none")}})}function P(e,t){const n=document.getElementById("ecomLabel"),o=document.getElementById("ecommerce-heading"),i=document.getElementById("ecomDescription"),a=document.getElementById("ecomPartnerName"),s=document.getElementById("ecomPartnerSub"),c=document.getElementById("ecomStats"),d=document.getElementById("ecomVerticals"),h=document.getElementById("ecomCapabilities");if(n&&e.label&&(n.textContent=e.label),o&&e.title){let r=e.title;r.includes("<span")||(r=r.replace("sell.",'<span class="accent">sell.</span>'),r=r.replace("stores ","stores<br/>")),o.innerHTML=r}if(i&&e.description&&(i.textContent=e.description),a&&e.partner_name&&(a.textContent=e.partner_name),s&&e.partner_sub&&(s.textContent=e.partner_sub),c){let r="";e.stat1_n&&(r+=`<div class="ec-stat-inline"><div class="n">${e.stat1_n.replace("+","<em>+</em>")}</div><div class="l">${e.stat1_l}</div></div>`),e.stat2_n&&(r+=`<div class="ec-stat-inline"><div class="n">${e.stat2_n}</div><div class="l">${e.stat2_l}</div></div>`),e.stat3_n&&(r+=`<div class="ec-stat-inline"><div class="n">${e.stat3_n.replace("+","<em>+</em>")}</div><div class="l">${e.stat3_l}</div></div>`),c.innerHTML=r}if(d&&e.verticals){const r=d.querySelector(".ec-verticals-label");d.innerHTML="",r&&d.appendChild(r);let l=e.verticals;if(typeof l=="string")try{l=JSON.parse(l)}catch{l=l.split(",").map(m=>m.trim())}Array.isArray(l)&&l.forEach(p=>{const m=document.createElement("span");m.className="ec-chip",m.textContent=p,d.appendChild(m)})}h&&t&&t.length>0&&(h.innerHTML=t.map(r=>`
            <li class="ec-row">
                <span class="ec-row-num" aria-hidden="true">${r.num}</span>
                <div class="ec-row-icon">
                    ${r.icon_svg}
                </div>
                <div class="ec-row-body">
                    <h3>${r.title}</h3>
                    <p>${r.description}</p>
                </div>
                <span class="ec-row-arrow" aria-hidden="true">→</span>
            </li>
        `).join(""))}
