<?php

namespace App\Models;

use Database\Factories\ProjectTagFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTag extends Model
{
    protected $guarded = [];
    /** @use HasFactory<ProjectTagFactory> */


    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
