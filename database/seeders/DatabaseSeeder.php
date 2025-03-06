<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Category;
use \App\Enums\Categories;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' // password
        ]);

        \App\Models\Category::create(['name' => Categories::SOFT]);
        \App\Models\Category::create(['name' => Categories::BRITTLE]);
        \App\Models\Category::create(['name' => Categories::HEAVY]);
    }
}
