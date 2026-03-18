<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('presence_locations', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('name');
            $blueprint->string('code')->comment('ISO country code, e.g. eg, sa, us');
            $blueprint->string('num_id')->nullable()->comment('Numerical country ID for D3 world map highlighting');
            $blueprint->decimal('lng', 10, 7);
            $blueprint->decimal('lat', 10, 7);
            $blueprint->string('pos')->default('center')->comment('object-position for flag: center, left center, etc.');
            $blueprint->string('role')->nullable()->comment('e.g. Headquarters, Regional Office, Primary Market');
            $blueprint->text('description')->nullable();
            $blueprint->integer('sort_order')->default(0);
            $blueprint->boolean('is_active')->default(true);
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('presence_locations');
    }
};
