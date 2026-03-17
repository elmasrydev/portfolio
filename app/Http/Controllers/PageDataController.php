<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\ContactSetting;
use App\Models\HeroSetting;
use App\Models\Market;
use App\Models\MarqueeItem;
use App\Models\PortfolioCta;
use App\Models\ProcessStep;
use App\Models\Project;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\Stat;
use App\Models\Testimonial;
use App\Models\WhyItem;
use Illuminate\Http\JsonResponse;

class PageDataController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $data = [
            'hero' => HeroSetting::where('is_active', true)->first(),
            'stats' => Stat::where('is_active', true)->orderBy('sort_order')->get(),
            'marquee_items' => MarqueeItem::where('is_active', true)->orderBy('sort_order')->get(),
            'services' => Service::where('is_active', true)->orderBy('sort_order')->get(),
            'process_steps' => ProcessStep::where('is_active', true)->orderBy('sort_order')->get(),
            'projects' => Project::with('tags')->where('is_active', true)->orderBy('sort_order')->get()->map(function ($project) {
                $project->image_url = $project->getFirstMediaUrl('project_image');
                return $project;
            }),
            'why_items' => WhyItem::where('is_active', true)->orderBy('sort_order')->get(),
            'markets' => Market::where('is_active', true)->orderBy('sort_order')->get()->map(function ($market) {
                $market->flag_url = $market->getFirstMediaUrl('flag');
                return $market;
            }),
            'brands' => Brand::where('is_active', true)->orderBy('sort_order')->get()->map(function ($brand) {
                $brand->logo_url = $brand->getFirstMediaUrl('logo');
                return $brand;
            }),
            'testimonials' => [
                'row1' => Testimonial::where('is_active', true)->where('row_group', 1)->orderBy('sort_order')->get()->map(function ($t) {
                    $t->photo_url = $t->getFirstMediaUrl('photo');
                    return $t;
                }),
                'row2' => Testimonial::where('is_active', true)->where('row_group', 2)->orderBy('sort_order')->get()->map(function ($t) {
                    $t->photo_url = $t->getFirstMediaUrl('photo');
                    return $t;
                }),
            ],
            'portfolio_cta' => (function () {
                $cta = PortfolioCta::where('is_active', true)->first();
                if ($cta) {
                    $cta->pdf_url = $cta->getFirstMediaUrl('portfolio_pdf');
                }
                return $cta;
            })(),
            'contact' => ContactSetting::where('is_active', true)->first(),
            'site' => SiteSetting::all()->pluck('value', 'key'),
        ];

        return response()->json($data);
    }
}
