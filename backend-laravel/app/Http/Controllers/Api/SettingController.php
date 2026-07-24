<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $setting = Setting::first() ?? [
            'shop_name' => 'Kurang Kopi',
            'tagline' => 'Setiap Tegukan Punya Cerita',
            'phone' => '+62 812-3456-7890',
            'email' => 'info@kurangkopi.my.id',
            'address' => 'Jl. Kopi Harapan No. 45, Indonesia',
            'open_hours' => 'Senin - Minggu: 08.00 - 23.00 WIB',
            'is_open' => true
        ];

        return response()->json([
            'status' => 'success',
            'data' => $setting
        ]);
    }

    public function update(Request $request)
    {
        $setting = Setting::first();

        if (!$setting) {
            $setting = Setting::create($request->all());
        } else {
            $setting->update($request->all());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Pengaturan berhasil diperbarui',
            'data' => $setting
        ]);
    }
}
