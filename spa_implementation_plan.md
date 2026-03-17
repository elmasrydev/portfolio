# TCF Portfolio — SPA + Filament Admin Dashboard: Implementation Plan

## Overview

Convert the static [landing.html](file:///Users/macintosh/Herd/portfolio/landing.html) into a **fully dynamic Single-Page Application (SPA)**
served by Laravel. All content sections are stored in the database and managed via a
**Filament v3** admin dashboard. The front-end renders data fetched from a JSON API,
preserving all animations and styles from [landing.html](file:///Users/macintosh/Herd/portfolio/landing.html).

---

## Architecture

```
Browser (Vanilla JS SPA)
      ↕  fetch()  JSON  API
Laravel Routes/Controller
      ↕  Eloquent ORM
MySQL / SQLite Database
      ↑  CRUD
Filament Admin Panel
```

---

## Phase 1 — Install Filament

```bash
composer require filament/filament:"^3.3" -W
php artisan filament:install --panels --no-interaction
php artisan make:filament-user --no-interaction
```

Filament panel URL will be `/admin`. Create a default admin user during seeding.

---

## Phase 2 — Content Sections & Database Models

### 2.1 Hero Section

**Table: `hero_settings`** (single-row settings table)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| label | string | "Technology Infrastructure Partner" |
| heading_line1 | string | "We Build the Tech" |
| heading_line2 | string | "That Runs Your" |
| heading_accent | string | "Business." |
| subtext | text | Company description paragraph |
| cta_primary_text | string | "Start a Project" |
| cta_primary_href | string | "#contact" |
| cta_ghost_text | string | "View Our Work" |
| cta_ghost_href | string | "#projects" |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\HeroSetting`

---

### 2.2 Stats (inside Hero)

**Table: `stats`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| number | string | "40" |
| suffix | string | "+" (optional) |
| label | string | "Projects Delivered" |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\Stat`

---

### 2.3 Marquee Strip

**Table: `marquee_items`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| text | string | "Mobile Apps" |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\MarqueeItem`

---

### 2.4 Services Section

**Table: `services`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| icon_svg | text | Raw SVG markup |
| title | string | "Custom Development" |
| description | text | |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\Service`

---

### 2.5 Process Steps

**Table: `process_steps`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| icon_svg | text | Raw SVG markup |
| title | string | "Discovery" |
| description | text | |
| step_number | integer | 1, 2, 3, 4 |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\ProcessStep`

---

### 2.6 Projects

**Table: `projects`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| tag | string | "Featured · Booking Platform" |
| title | string | "Sala App" |
| description | text | |
| is_featured | boolean | Shows large card |
| icon_svg | text | Optional SVG mockup |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Table: `project_tags`** (pivot for tech tags)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| project_id | FK | |
| label | string | "React Native", "Node.js" |
| sort_order | integer | |

**Models:** `App\Models\Project`, `App\Models\ProjectTag`

---

### 2.7 Why TCF (Differentiators)

**Table: `why_items`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| icon_svg | text | Raw SVG |
| title | string | "We Act as Partners, Not Vendors" |
| description | text | |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\WhyItem`

---

### 2.8 Markets

**Table: `markets`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| country_name | string | "Egypt" |
| flag_url | string | "https://flagcdn.com/w80/eg.png" |
| flag_alt | string | "Egypt" |
| description | text | |
| badge_text | string | "Back Office" |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\Market`

---

### 2.9 Brands / Clients

**Table: `brands`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| name | string | "Veda Holding" |
| initials | string | "VH" |
| accent_color | string | "#00B4D8" |
| logo_url | string | nullable (for future image upload) |
| sort_order | integer | |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\Brand`

---

### 2.10 Testimonials

**Table: `testimonials`**

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| photo_url | string | Avatar URL |
| stars | tinyint | 1–5 |
| quote | text | Testimonial text |
| author_name | string | "Veda Holding" |
| author_role | string | "Sala App — Entertainment Platform · KSA" |
| sort_order | integer | |
| row_group | tinyint | 1 = top row, 2 = bottom row |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\Testimonial`

---

### 2.11 Portfolio CTA Section

**Table: `portfolio_cta`** (single-row settings)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| label | string | "Company Portfolio" |
| heading | string | |
| description | text | |
| button_text | string | "⬇ Download Portfolio" |
| pdf_path | string | Storage path to portfolio PDF |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\PortfolioCta`

---

### 2.12 Contact Settings

**Table: `contact_settings`** (single-row)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| label | string | "Contact Us" |
| heading | string | |
| sub_text | text | |
| email | string | |
| address | text | |
| whatsapp_number | string | |
| whatsapp_href | string | "https://wa.me/..." |
| is_active | boolean | |
| timestamps | | |

**Model:** `App\Models\ContactSetting`

---

### 2.13 Contact Submissions

**Table: `contact_submissions`** (form submissions stored in DB)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| name | string | |
| email | string | |
| company | string | nullable |
| service | string | nullable |
| message | text | |
| is_read | boolean | default false |
| timestamps | | |

**Model:** `App\Models\ContactSubmission`

---

### 2.14 Navigation / Footer

**Table: `site_settings`** (key-value store for global config)

| Column | Type | Notes |
|--------|------|-------|
| id | bigint PK | |
| key | string unique | e.g. `nav_logo_text`, `footer_tagline` |
| value | text | |
| timestamps | | |

**Model:** `App\Models\SiteSetting`

---

## Phase 3 — Filament Admin Resources

Each model gets a **Filament Resource** with full CRUD.

| Resource | Features |
|----------|----------|
| `HeroSettingResource` | Single-record form (no list) |
| `StatResource` | Reorderable table |
| `MarqueeItemResource` | Reorderable table |
| `ServiceResource` | Reorderable table + SVG preview |
| `ProcessStepResource` | Reorderable table |
| `ProjectResource` | Table + inline tag management (HasMany repeater) |
| `WhyItemResource` | Reorderable table |
| `MarketResource` | Reorderable table + flag preview |
| `BrandResource` | Reorderable table + color picker |
| `TestimonialResource` | Table with row_group filter |
| `PortfolioCtaResource` | Single-record + file upload for PDF |
| `ContactSettingResource` | Single-record form |
| `ContactSubmissionResource` | Read-only table, mark as read, delete |
| `SiteSettingResource` | Key-value editor |

---

## Phase 4 — API Endpoints

All data is served as JSON for the front-end SPA.

```
GET  /api/page-data     → returns ALL sections in one payload (cached)
POST /api/contact       → stores ContactSubmission
```

### `/api/page-data` Response Shape

```json
{
  "hero": { ... },
  "stats": [ ... ],
  "marquee_items": [ ... ],
  "services": [ ... ],
  "process_steps": [ ... ],
  "projects": [ ... ],
  "why_items": [ ... ],
  "markets": [ ... ],
  "brands": [ ... ],
  "testimonials": { "row1": [...], "row2": [...] },
  "portfolio_cta": { ... },
  "contact": { ... },
  "site": { ... }
}
```

**Caching:** `Cache::remember('page_data', 300, fn() => ...)` — 5 min TTL.
Filament saves flush the cache via Observer.

---

## Phase 5 — Blade View (SPA Shell)

`resources/views/landing.blade.php` — serves the full HTML, CSS and JS from
[landing.html](file:///Users/macintosh/Herd/portfolio/landing.html), converted to Blade. The `<script>` block replaced with a `fetch`
call to `/api/page-data` that populates all dynamic sections on `DOMContentLoaded`.

**Route:**
```php
// routes/web.php
Route::get('/', fn() => view('landing'));
```

---

## Phase 6 — Dynamic Data Injection (JS)

A new `resources/js/landing.js` (or inline `<script>` in Blade):

```javascript
document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetch('/api/page-data').then(r => r.json());
  renderHero(data.hero, data.stats);
  renderMarquee(data.marquee_items);
  renderServices(data.services);
  renderProcess(data.process_steps);
  renderProjects(data.projects);
  renderWhy(data.why_items);
  renderMarkets(data.markets);
  renderBrands(data.brands);
  renderTestimonials(data.testimonials);
  renderPortfolioCta(data.portfolio_cta);
  renderContact(data.contact);
  // Re-init scroll animations after DOM update
  initRevealObserver();
});
```

---

## Phase 7 — Contact Form (real submission)

Replace the fake [handleContactSubmit](file:///Users/macintosh/Herd/portfolio/landing.html#2075-2088) with a real `fetch` POST to `/api/contact`.
Laravel validates the request via a `StoreContactSubmissionRequest` Form Request.
Submission is stored in `contact_submissions` table.
Filament shows all submissions in the admin panel (read-only, sortable, filterable).

---

## Phase 8 — Seeders (initial data from landing.html)

`DatabaseSeeder` calls:
- `HeroSettingSeeder` — seeds data from [landing.html](file:///Users/macintosh/Herd/portfolio/landing.html) hero section
- `StatSeeder` — seeds 3 stats (40+, 11+, 6)
- `MarqueeItemSeeder` — seeds 8 items
- `ServiceSeeder` — seeds 4 services
- `ProcessStepSeeder` — seeds 4 steps
- `ProjectSeeder` — seeds 5 projects with tags
- `WhyItemSeeder` — seeds 6 differentiators
- `MarketSeeder` — seeds 3 markets
- `BrandSeeder` — seeds 14 brands
- `TestimonialSeeder` — seeds 6 testimonials
- `ContactSettingSeeder` — seeds contact info
- `PortfolioCtaSeeder` — seeds CTA text
- `AdminUserSeeder` — creates Filament admin

---

## Phase 9 — Performance

| Strategy | Implementation |
|----------|----------------|
| Single API request | `/api/page-data` aggregates all sections |
| Server-side cache | 5-min `Cache::remember` |
| Cache invalidation | Model Observer flushes cache on save/delete |
| Eager loading | All relations eager-loaded in the controller |
| CDN-ready | Static assets served through Vite with hashing |

---

## Execution Order

1. `composer require filament/filament:"^3.3" -W`
2. `php artisan filament:install --panels --no-interaction`
3. Create all migrations
4. `php artisan migrate`
5. Create all Models (with factories)
6. Create all Filament Resources
7. Create `PageDataController` with `/api/page-data`
8. Create `ContactSubmissionController` with `/api/contact`
9. Convert [landing.html](file:///Users/macintosh/Herd/portfolio/landing.html) → `resources/views/landing.blade.php`
10. Write `resources/js/landing.js` (fetch + render functions)
11. Create all Seeders
12. `php artisan db:seed`
13. `npm run build`
14. Create `AdminUserSeeder` + run
15. Test admin panel at `/admin`
16. Test SPA at `/`

---

## Files to Create

```
database/migrations/
  ├── ..._create_hero_settings_table.php
  ├── ..._create_stats_table.php
  ├── ..._create_marquee_items_table.php
  ├── ..._create_services_table.php
  ├── ..._create_process_steps_table.php
  ├── ..._create_projects_table.php
  ├── ..._create_project_tags_table.php
  ├── ..._create_why_items_table.php
  ├── ..._create_markets_table.php
  ├── ..._create_brands_table.php
  ├── ..._create_testimonials_table.php
  ├── ..._create_portfolio_cta_table.php
  ├── ..._create_contact_settings_table.php
  ├── ..._create_contact_submissions_table.php
  └── ..._create_site_settings_table.php

app/Models/
  ├── HeroSetting.php
  ├── Stat.php
  ├── MarqueeItem.php
  ├── Service.php
  ├── ProcessStep.php
  ├── Project.php
  ├── ProjectTag.php
  ├── WhyItem.php
  ├── Market.php
  ├── Brand.php
  ├── Testimonial.php
  ├── PortfolioCta.php
  ├── ContactSetting.php
  ├── ContactSubmission.php
  └── SiteSetting.php

app/Filament/Resources/
  ├── HeroSettingResource.php (+ Pages/)
  ├── StatResource.php (+ Pages/)
  ├── MarqueeItemResource.php (+ Pages/)
  ├── ServiceResource.php (+ Pages/)
  ├── ProcessStepResource.php (+ Pages/)
  ├── ProjectResource.php (+ Pages/)
  ├── WhyItemResource.php (+ Pages/)
  ├── MarketResource.php (+ Pages/)
  ├── BrandResource.php (+ Pages/)
  ├── TestimonialResource.php (+ Pages/)
  ├── PortfolioCtaResource.php (+ Pages/)
  ├── ContactSettingResource.php (+ Pages/)
  ├── ContactSubmissionResource.php (+ Pages/)
  └── SiteSettingResource.php (+ Pages/)

app/Http/Controllers/
  ├── PageDataController.php
  └── ContactSubmissionController.php

app/Http/Requests/
  └── StoreContactSubmissionRequest.php

app/Observers/
  └── CacheFlushObserver.php

resources/views/
  └── landing.blade.php

resources/js/
  └── landing.js

database/seeders/
  ├── HeroSettingSeeder.php
  ├── StatSeeder.php
  ├── MarqueeItemSeeder.php
  ├── ServiceSeeder.php
  ├── ProcessStepSeeder.php
  ├── ProjectSeeder.php
  ├── WhyItemSeeder.php
  ├── MarketSeeder.php
  ├── BrandSeeder.php
  ├── TestimonialSeeder.php
  ├── ContactSettingSeeder.php
  ├── PortfolioCtaSeeder.php
  ├── SiteSettingSeeder.php
  └── AdminUserSeeder.php

routes/
  ├── web.php   (GET /)
  └── api.php   (GET /api/page-data, POST /api/contact)
```
