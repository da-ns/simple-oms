<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\OrderStatuses;

class Order extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'orders';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['customer_full_name', 'status', 'customer_comment', 'product_id', 'product_count', 'total_sum'];

    protected $casts = [
        'created_at' => 'datetime:d.m.Y H:m:s',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getStatusAttribute($value)
    {
        return OrderStatuses::from($value)->label();
    }
}
