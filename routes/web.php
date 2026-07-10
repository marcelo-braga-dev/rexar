<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/sobre', [PageController::class, 'sobre'])->name('sobre');
Route::get('/produtos', [PageController::class, 'produtos'])->name('produtos');
Route::get('/produtos/{slug}', [PageController::class, 'produto'])->name('produto');
Route::get('/contato', [PageController::class, 'contato'])->name('contato');
