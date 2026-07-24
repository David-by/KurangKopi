<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $table = 'settings';

    protected $fillable = [
        'shop_name',
        'tagline',
        'phone',
        'email',
        'address',
        'open_hours',
        'is_open',
    ];

    protected $casts = [
        'is_open' => 'boolean',
    ];
}
