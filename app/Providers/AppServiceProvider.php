<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (app()->environment('production')) {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }

        if ($url = config('app.url')) {
            \Illuminate\Support\Facades\URL::forceRootUrl($url);
        }

        // Livewire subfolder support
        \Livewire\Livewire::setScriptRoute(function ($handle) {
            return \Illuminate\Support\Facades\Route::get('/app/livewire/livewire.js', $handle);
        });

        \Livewire\Livewire::setUpdateRoute(function ($handle) {
            return \Illuminate\Support\Facades\Route::post('/app/livewire/update', $handle);
        });
    }
}
