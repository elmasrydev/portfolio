<?php

use App\Http\Controllers\ContactSubmissionController;
use App\Http\Controllers\PageDataController;
use Illuminate\Support\Facades\Route;

Route::get('/page-data', PageDataController::class);
Route::post('/contact', ContactSubmissionController::class);
