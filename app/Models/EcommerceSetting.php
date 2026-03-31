<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EcommerceSetting extends Model
{
    protected $guarded = ['id'];

    public function casts(): array
    {
        return [
            'verticals' => 'array',
        ];
    }
}
