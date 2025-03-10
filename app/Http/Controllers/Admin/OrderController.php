<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatuses;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the order.
     */
    public function list(Request $request)
    {
        $perPage = 25;
        $orders = Order::
            latest('id')
            ->get();

        return Inertia::render('Admin/Order/List', [
            'orders' => $orders
        ]);
    }

    /**
     * Show the page for creation of new order.
     */
    public function add(Request $request)
    {
        $products = Product::orderBy('id')->get();

        return Inertia::render('Admin/Order/Add', [
            'products' => $products
        ]);
    }

    /**
     * Create order method.
     */
    public function create(Request $request)
    {
        $messages = [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Поле слишком короткое.',
            'max' => 'Поле слишком длинное.',
        ];

        $request->validate([
            'customer_full_name' => 'required|min:1|max:255',
            'product_id' => 'required',
            'product_count' => 'required',
        ], $messages);

        $product = Product::findOrFail($request->product_id);

        $total_sum = ceil($product->price * $request->product_count * 100) / 100;

        $order = Order::create([
            'customer_full_name' => $request->customer_full_name,
            'product_id' => $request->product_id,
            'product_count' => $request->product_count,
            'customer_comment' => $request->customer_comment,
            'total_sum' => $total_sum,
        ]);

        return redirect(route('order.view', [
            'orderId' => $order->id
        ]));
    }

    /**
     * Show еру page for view of order.
     */
    public function view(Request $request)
    {
        $order = Order::with(['product'])->findOrFail($request->orderId);

        return Inertia::render('Admin/Order/View', [
            'order' => $order
        ]);
    }

    /**
     * Complete order method.
     */
    public function complete(Request $request)
    {
        $order = Order::findOrFail($request->orderId);

        $order->update([
            'status' => OrderStatuses::COMPLETED,
        ]);

        return redirect(route('order.view', [
            'orderId' => $order->id,
        ]));
    }

    /**
     * Delete order method.
     */
    public function delete(Request $request)
    {
        $order = Order::findOrFail($request->orderId);
        Order::destroy($order->id);
        return redirect(route('order.list', []));
    }
}
