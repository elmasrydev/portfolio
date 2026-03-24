<?php

namespace App\Models;

use Database\Factories\HeroSettingFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSetting extends Model
{
    protected $guarded = [];
    /** @use HasFactory<HeroSettingFactory> */
}
