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
        Schema::create('ecommerce_settings', function (Blueprint $table) {
            $table->id();
            $table->string('label')->default('E-Commerce Expertise');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('partner_name')->default('Official Shopify Partner');
            $table->string('partner_sub')->nullable();
            $table->string('stat1_n')->nullable();
            $table->string('stat1_l')->nullable();
            $table->string('stat2_n')->nullable();
            $table->string('stat2_l')->nullable();
            $table->string('stat3_n')->nullable();
            $table->string('stat3_l')->nullable();
            $table->text('verticals')->nullable(); // Array of chips
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ecommerce_settings');
    }
};
