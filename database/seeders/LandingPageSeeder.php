<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\ContactSetting;
use App\Models\HeroSetting;
use App\Models\Market;
use App\Models\MarqueeItem;
use App\Models\PortfolioCta;
use App\Models\PresenceLocation;
use App\Models\PresenceSetting;
use App\Models\ProcessStep;
use App\Models\Project;
use App\Models\ProjectTag;
use App\Models\Service;
use App\Models\Stat;
use App\Models\Testimonial;
use App\Models\WhyItem;
use Illuminate\Database\Seeder;

class LandingPageSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Hero Settings
        HeroSetting::create([
            'title' => 'Building the next generation of <span class="accent">digital excellence.</span>',
            'subtitle' => 'The Code Factory (TCF) is an elite engineering hub based in Egypt, serving the Gulf\'s most ambitious enterprises. We build high-performance mobile apps, web platforms, and custom software that drive real business impact.',
            'cta_text' => 'Start Your Project',
            'cta_url' => '#contact',
            'secondary_cta_text' => 'View Our Work',
            'secondary_cta_url' => '#projects',
        ]);

        // 2. Stats
        $stats = [
            ['value' => '120+', 'label' => 'COMPLETED PROJECTS'],
            ['value' => '98%', 'label' => 'CLIENT HAPPINESS'],
            ['value' => '8+', 'label' => 'YEARS EXPERIENCE'],
        ];
        foreach ($stats as $index => $stat) {
            Stat::create(array_merge($stat, ['sort_order' => $index]));
        }

        // 3. Marquee Items
        $marquee = ['Mobile Apps', 'Web Platforms', 'Custom Software', 'API Integration', 'UI/UX Design', 'System Architecture', 'Cloud Deployment', 'Tech Consulting'];
        foreach ($marquee as $index => $item) {
            MarqueeItem::create(['text' => $item, 'sort_order' => $index]);
        }

        // 4. Services
        $services = [
            [
                'title' => 'Custom Development',
                'description' => 'Tailor-made software built around your exact business workflows — mobile apps, web platforms, and internal systems designed from the ground up to fit how you operate.',
                'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22" opacity="0.4"/></svg>',
            ],
            [
                'title' => 'UX Services',
                'description' => 'User experience that converts. From research and wireframes to polished UI — we design interfaces grounded in usability and refined through every interaction detail.',
                'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><circle cx="12" cy="10" r="3"/></svg>',
            ],
            [
                'title' => 'Outsourcing Resources',
                'description' => 'Extend your team with senior engineers, designers, and PMs on demand. Flexible engagement models — dedicated resources or staff augmentation — that scale with your needs.',
                'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
            ],
            [
                'title' => 'Technical Audit',
                'description' => 'A deep review of your existing codebase, architecture, and infrastructure. We identify risks, performance bottlenecks, and technical debt — and give you a clear remediation roadmap.',
                'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
            ],
        ];
        foreach ($services as $index => $service) {
            Service::create(array_merge($service, ['sort_order' => $index]));
        }

        // 5. Process Steps
        $process = [
            [
                'title' => 'Discovery',
                'description' => 'We understand your business, users, and technical requirements before writing a single line of code.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
            ],
            [
                'title' => 'Architecture',
                'description' => 'We design the technical foundation — stack, data models, and system design — built to scale with your growth.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
            ],
            [
                'title' => 'Build & Iterate',
                'description' => 'Agile delivery with regular demos. You stay informed and in control throughout the development cycle.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>',
            ],
            [
                'title' => 'Launch & Support',
                'description' => 'Deployment, QA, and ongoing maintenance. We don\'t disappear after go-live — we stay as your tech partner.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
            ],
        ];
        foreach ($process as $index => $step) {
            ProcessStep::create(array_merge($step, ['sort_order' => $index]));
        }

        // 6. Projects
        $sala = Project::create([
            'title' => 'Sala App',
            'category' => 'Featured · Booking Platform',
            'description' => 'A full-featured booking and entertainment management platform for bowling alleys and karting tracks. Customers book online, operators manage capacity, and revenue flows seamlessly — all within one system built and maintained by TCF.',
            'is_featured' => true,
        ]);
        foreach (['React Native', 'Node.js', 'PostgreSQL', 'Payment Integration'] as $tag) {
            ProjectTag::create(['project_id' => $sala->id, 'name' => $tag]);
        }

        $carrefour = Project::create([
            'title' => 'Carrefour Inspector',
            'category' => 'Retail · Inspection Tool',
            'description' => 'An internal mobile tool for store inspection workflows — digitizing checklists, tracking issues, and generating reports for Carrefour retail operations.',
        ]);
        foreach (['Mobile App', 'Offline Support'] as $tag) {
            ProjectTag::create(['project_id' => $carrefour->id, 'name' => $tag]);
        }

        $dukkan = Project::create([
            'title' => 'Dukkan El Baba',
            'category' => 'E-commerce · Consumer App',
            'description' => 'A consumer-facing shopping app with curated product discovery, seamless checkout, and vendor management tools built from the ground up.',
        ]);
        foreach (['iOS & Android', 'Vendor Dashboard'] as $tag) {
            ProjectTag::create(['project_id' => $dukkan->id, 'name' => $tag]);
        }

        // 7. Why Items
        $why = [
            [
                'title' => 'We Act as Partners, Not Vendors',
                'description' => 'We take long-term ownership of your technology. Our relationship doesn\'t end at delivery — it deepens over time as your needs evolve.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
            ],
            [
                'title' => 'Always Available',
                'description' => 'We\'re reachable when it matters. Whether it\'s a critical bug at midnight or an urgent client demo, TCF stays on-call and responsive throughout the lifetime of your product.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M2 12h2M20 12h2M12 2v2M12 20v2"/></svg>',
            ],
            [
                'title' => 'AI-Powered Development',
                'description' => 'We integrate AI into the products we build — from intelligent automation and LLM-powered features to smart analytics — giving your business a genuine competitive edge.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><line x1="9" y1="7" x2="9" y2="4"/><line x1="12" y1="7" x2="12" y2="4"/><line x1="15" y1="7" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="17"/><line x1="12" y1="20" x2="12" y2="17"/><line x1="15" y1="20" x2="15" y2="17"/><line x1="7" y1="9" x2="4" y2="9"/><line x1="7" y1="12" x2="4" y2="12"/><line x1="7" y1="15" x2="4" y2="15"/><line x1="20" y1="9" x2="17" y2="9"/><line x1="20" y1="12" x2="17" y2="12"/><line x1="20" y1="15" x2="17" y2="15"/><circle cx="12" cy="12" r="1.5" fill="#00B4D8"/></svg>',
            ],
            [
                'title' => 'SME-Native Thinking',
                'description' => 'We understand the constraints and pace of growing businesses. Our solutions are right-sized — powerful where it matters, lean where it doesn\'t.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><line x1="6" y1="11" x2="6" y2="11.01"/><line x1="10" y1="11" x2="10" y2="11.01"/><line x1="14" y1="11" x2="14" y2="11.01"/><line x1="18" y1="11" x2="18" y2="11.01"/><line x1="6" y1="15" x2="6" y2="15.01"/><line x1="18" y1="15" x2="18" y2="15.01"/></svg>',
            ],
            [
                'title' => 'Gulf Market Experience',
                'description' => 'Proven delivery in Saudi Arabia and UAE. We understand local compliance, payment ecosystems, and user expectations in these markets.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
            ],
            [
                'title' => 'Transparent & Structured Process',
                'description' => 'No black boxes. You get clear timelines, consistent communication, and full visibility into progress at every stage of the project.',
                'icon_svg' => '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
            ],
        ];
        foreach ($why as $index => $item) {
            WhyItem::create(array_merge($item, ['sort_order' => $index]));
        }

        // 8. Markets
        $markets = [
            [
                'country_name' => 'Egypt',
                'description' => 'Our back office and engineering hub. Egypt powers TCF\'s delivery engine — housing our full development, design, and operations teams.',
                'badge_text' => 'Back Office',
                'flag_alt' => 'Egypt',
            ],
            [
                'country_name' => 'United Arab Emirates',
                'description' => 'Our representative office in UAE bridges us directly to Gulf clients — providing on-ground presence and regional account management.',
                'badge_text' => 'Representative Office',
                'flag_alt' => 'UAE',
            ],
            [
                'country_name' => 'Saudi Arabia',
                'description' => 'Our main market. We deliver end-to-end digital products for Saudi enterprises, aligned with Vision 2030 digital transformation goals.',
                'badge_text' => 'Main Market',
                'flag_alt' => 'Saudi Arabia',
            ],
        ];
        foreach ($markets as $index => $market) {
            Market::create(array_merge($market, ['sort_order' => $index]));
        }

        // 9. Brands
        $brands = [
            ['name' => 'Veda Holding', 'initials' => 'VH', 'accent_color' => '#00B4D8'],
            ['name' => 'Carrefour', 'initials' => 'CR', 'accent_color' => '#004A97'],
            ['name' => 'Dukkan El Baba', 'initials' => 'DB', 'accent_color' => '#E05C2A'],
            ['name' => 'Sala App', 'initials' => 'SL', 'accent_color' => '#00B4D8'],
        ];
        foreach ($brands as $index => $brand) {
            Brand::create(array_merge($brand, ['sort_order' => $index]));
        }

        // 10. Testimonials
        $testimonials = [
            [
                'author_name' => 'Veda Holding',
                'author_role' => 'Sala App — Entertainment Platform · KSA',
                'quote' => 'TCF didn\'t just deliver an app — they became a genuine technology partner. They understood our business deeply and built a system that our customers love and our team can actually manage.',
                'stars' => 5,
                'row_group' => 1,
            ],
            [
                'author_name' => 'Carrefour',
                'author_role' => 'Inspector App — Retail Operations · MENA',
                'quote' => 'The inspection tool they built transformed how our field teams work. It\'s fast, reliable, and works offline — exactly what we needed. Delivery was on time and communication was excellent throughout.',
                'stars' => 5,
                'row_group' => 1,
            ],
            [
                'author_name' => 'Hedeya',
                'author_role' => 'E-commerce Platform · KSA',
                'quote' => 'Working with TCF felt like having an in-house tech team — proactive, structured, and always thinking about what\'s next. They brought ideas to the table we hadn\'t even considered.',
                'stars' => 5,
                'row_group' => 1,
            ],
        ];
        foreach ($testimonials as $index => $testimonial) {
            Testimonial::create(array_merge($testimonial, ['sort_order' => $index]));
        }

        // 11. Portfolio CTA
        PortfolioCta::create([
            'label' => 'Company Portfolio',
            'heading' => 'See the full scope of <span style="color:var(--cyan)">our work.</span>',
            'description' => 'Download our company portfolio for a detailed overview of our services, past projects, technical capabilities, and client case studies.',
            'button_text' => '⬇ Download Portfolio',
        ]);

        // 12. Contact Setting
        ContactSetting::create([
            'email' => 'hello@thecodefactory.net',
            'address' => 'Top 90 Mall, Unit 309, New Cairo, Cairo, Egypt',
            'whatsapp_number' => '+21003636003',
            'whatsapp_url' => 'https://wa.me/21003636003',
        ]);

        // 13. Presence Settings
        PresenceSetting::create([
            'label' => 'Our Presence',
            'heading_count' => '6 Markets',
            'heading_standard' => 'One standard.',
            'subtitle' => 'From Cairo to San Francisco — delivering technology infrastructure across the Middle East, North Africa, Europe, and the Americas.',
        ]);

        // 14. Presence Locations
        $locations = [
            [
                'name' => 'Egypt',
                'code' => 'eg',
                'num_id' => '818',
                'lng' => 28.0,
                'lat' => 29.5,
                'pos' => 'center',
                'role' => 'Headquarters',
                'description' => 'Our engineering hub and home base. Egypt powers TCF\'s full delivery engine — housing our development, design, and operations teams since 2015.',
            ],
            [
                'name' => 'Saudi Arabia',
                'code' => 'sa',
                'num_id' => '682',
                'lng' => 43.0,
                'lat' => 21.5,
                'pos' => 'center',
                'role' => 'Primary Market',
                'description' => 'Our largest and most active market. We deliver end-to-end digital products for Saudi enterprises, fully aligned with Vision 2030 digital transformation goals.',
            ],
            [
                'name' => 'United Arab Emirates',
                'code' => 'ae',
                'num_id' => '784',
                'lng' => 57.0,
                'lat' => 24.5,
                'pos' => 'left center',
                'role' => 'Regional Office',
                'description' => 'Our representative office in the UAE bridges us directly to Gulf clients — providing on-ground presence, regional account management, and faster response times.',
            ],
            [
                'name' => 'Kuwait',
                'code' => 'kw',
                'num_id' => '414',
                'lng' => 50.0,
                'lat' => 32.5,
                'pos' => 'left center',
                'role' => 'Market Presence',
                'description' => 'Delivering custom software and digital transformation services to the Kuwaiti market.',
            ],
            [
                'name' => 'Turkey',
                'code' => 'tr',
                'num_id' => '792',
                'lng' => 33.0,
                'lat' => 41.0,
                'pos' => 'center',
                'role' => 'Regional Market',
                'description' => 'Technical partnerships and development support for regional startups and enterprises.',
            ],
            [
                'name' => 'United States',
                'code' => 'us',
                'num_id' => '840',
                'lng' => -98.0,
                'lat' => 39.5,
                'pos' => 'left center',
                'role' => 'Global Sales',
                'description' => 'Our presence in the US facilitates global technical partnerships and international software delivery.',
            ],
        ];
        foreach ($locations as $index => $location) {
            PresenceLocation::create(array_merge($location, ['sort_order' => $index]));
        }
    }
}
