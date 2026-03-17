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
        Schema::create('portfolio_ctas', function (Blueprint $table) {
            $table->id();
            $table->string('label')->nullable();
            $table->string('heading')->nullable();
            $table->text('description')->nullable();
            $table->string('button_text')->nullable();
            $table->string('pdf_path')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolio_ctas');
    }
};
