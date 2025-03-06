<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Show the page of administration panel.
     */
    public function panel(Request $request)
    {
        return Inertia::render('Admin/Panel', []);
    }
}
