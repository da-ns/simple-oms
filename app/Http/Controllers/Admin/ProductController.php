<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the product.
     */
    public function list(Request $request)
    {
        $perPage = 25;
        $products = Product::latest('id')->get();

        return Inertia::render('Admin/Product/List', [
            'products' => $products
        ]);
    }

    /**
     * Show the page for creation of new product.
     */
    public function add(Request $request)
    {
        $categories = Category::orderBy('id')
            ->get();

        return Inertia::render('Admin/Product/Add', [
            'categories' => $categories
        ]);
    }

    /**
     * Create product method.
     */
    public function create(Request $request)
    {
        $messages = [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Поле слишком короткое.',
            'max' => 'Поле слишком длинное.',
        ];

        $request->validate([
            'name' => 'required|min:1|max:255',
            'price' => 'required',
            'category_id' => 'required',
        ], $messages);

        $product = Product::create([
            "name" => $request->name,
            "price" => $request->price,
            "category_id" => $request->category_id,
            "description" => $request->description,
        ]);

        return redirect(route('product.view', [
            'productId' => $product->id
        ]));
    }

    /**
     * Show еру page for view of product.
     */
    public function view(Request $request)
    {
        $product = Product::findOrFail($request->productId);

        return Inertia::render('Admin/Product/View', [
            'product' => $product
        ]);
    }

    /**
     * Show the page for edit of product.
     */
    public function edit(Request $request)
    {
        $product = Product::findOrFail($request->productId);

        return Inertia::render('Admin/Product/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update product method.
     */
    public function update(Request $request)
    {
        $product = Product::findOrFail($request->productId);

        $messages = [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Поле слишком короткое.',
            'max' => 'Поле слишком длинное.',
        ];

        $request->validate([
            'name' => 'required|min:1|max:255',
            'price' => 'required',
            'category_id' => 'required',
        ], $messages);

        $lesson->update([
            'name' => $request->name,
            'price' => $request->price,
            'category_id' => $request->category_id,
        ]);

        return redirect(route('product.view', [
            'productId' => $product->id,
        ]));
    }

    /**
     * Delete product method.
     */
    public function delete(Request $request)
    {
        $product = Product::findOrFail($request->productId);
        $product->destroy();

        return redirect(route('product.list', []));
    }
}
