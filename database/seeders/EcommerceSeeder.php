<?php

namespace Database\Seeders;

use App\Models\EcommerceCapability;
use App\Models\EcommerceSetting;
use Illuminate\Database\Seeder;

class EcommerceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Ecommerce Settings
        EcommerceSetting::create([
            'label' => 'E-Commerce Expertise',
            'title' => 'Scale your business with <span class="accent">Shopify Plus.</span>',
            'description' => 'We help ambitious brands launch, migrate, and scale on Shopify. From custom theme development to complex app integrations and checkout extensibility, we deliver high-converting commerce experiences.',
            'partner_name' => 'Official Shopify Partner',
            'partner_sub' => 'Expertise in high-growth commerce',
            'stat1_n' => '100+',
            'stat1_l' => 'Stores Launched',
            'stat2_n' => '95%',
            'stat2_l' => 'Merchant Satisfaction',
            'stat3_n' => '30%',
            'stat3_l' => 'Avg. Conversion Lift',
            'verticals' => ['Fashion & Apparel', 'Health & Beauty', 'Home & Decor', 'Electronics', 'F&B'],
        ]);

        // 2. Ecommerce Capabilities
        $capabilities = [
            [
                'num' => '01',
                'title' => 'Custom Storefronts',
                'description' => 'Tailored Shopify themes and headless commerce solutions built for performance and brand identity.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
            ],
            [
                'num' => '02',
                'title' => 'App Development',
                'description' => 'Private and public Shopify apps to extend functionality, automate workflows, and connect to third-party APIs.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
            ],
            [
                'num' => '03',
                'title' => 'Migrations',
                'description' => 'Seamlessly moving your business from Magento, WooCommerce, or BigCommerce to Shopify with zero data loss.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
            ],
            [
                'num' => '04',
                'title' => 'Optimization',
                'description' => 'Conversion rate optimization (CRO) and speed performance audits to ensure your store scales efficiently.',
                'icon_svg' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
            ],
        ];

        foreach ($capabilities as $index => $capability) {
            EcommerceCapability::create(array_merge($capability, ['sort_order' => $index]));
        }
    }
}
