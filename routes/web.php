<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/admin', [AdminController::class, 'panel'])
    ->middleware(['auth', 'verified'])
    ->name('admin.panel');

//Route::resource('admin/products', 'App\\Http\\Controllers\\Admin\ProductController');

Route::get('/admin/products', [ProductController::class, 'list'])
    ->middleware(['auth', 'verified'])
    ->name('product.list');

Route::get('/admin/product/add', [ProductController::class, 'add'])
    ->middleware(['auth', 'verified'])
    ->name('product.add');

Route::post('/admin/product/create', [ProductController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('product.create');

Route::get('/admin/product/{productId}/edit', [ProductController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('product.edit');

Route::post('/admin/product/{productId}/update', [ProductController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('product.update');

Route::post('/admin/product/{productId}/delete', [ProductController::class, 'delete'])
    ->middleware(['auth', 'verified'])
    ->name('product.delete');

Route::get('/admin/product/{productId}', [ProductController::class, 'view'])
    ->middleware(['auth', 'verified'])
    ->name('product.view');
