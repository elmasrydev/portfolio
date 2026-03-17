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
        Schema::create('presence_settings', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('label')->default('Our Presence');
            $blueprint->string('heading_count')->default('6 Markets');
            $blueprint->string('heading_standard')->default('One standard.');
            $blueprint->text('subtitle')->nullable();
            $blueprint->boolean('is_active')->default(true);
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('presence_settings');
    }
};
