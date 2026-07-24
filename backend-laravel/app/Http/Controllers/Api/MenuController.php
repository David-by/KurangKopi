<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::latest()->get();
        return response()->json([
            'status' => 'success',
            'data' => $menus
        ]);
    }

    public function show($id)
    {
        $menu = Menu::find($id);

        if (!$menu) {
            return response()->json([
                'status' => 'error',
                'message' => 'Item menu tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $menu
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'price' => 'required|string|max:100',
            'numeric_price' => 'nullable|integer',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'status' => 'nullable|string',
        ]);

        $menu = Menu::create([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'price' => $validated['price'],
            'numeric_price' => $validated['numeric_price'] ?? 0,
            'description' => $validated['description'] ?? null,
            'image' => $validated['image'] ?? '/images/kopi/kopi-susu.jpg',
            'status' => $validated['status'] ?? 'Available',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Menu berhasil ditambahkan',
            'data' => $menu
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);

        if (!$menu) {
            return response()->json([
                'status' => 'error',
                'message' => 'Menu tidak ditemukan'
            ], 404);
        }

        $menu->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Menu berhasil diperbarui',
            'data' => $menu
        ]);
    }

    public function destroy($id)
    {
        $menu = Menu::find($id);

        if (!$menu) {
            return response()->json([
                'status' => 'error',
                'message' => 'Menu tidak ditemukan'
            ], 404);
        }

        $menu->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Menu berhasil dihapus'
        ]);
    }
}
