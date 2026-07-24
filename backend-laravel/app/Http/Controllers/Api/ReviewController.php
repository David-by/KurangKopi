<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::latest()->get();
        return response()->json([
            'status' => 'success',
            'data' => $reviews
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'review' => 'required|string',
            'rating' => 'nullable|integer|min:1|max:5',
        ]);

        $review = Review::create([
            'name' => $validated['name'],
            'review' => $validated['review'],
            'rating' => $validated['rating'] ?? 5,
            'date' => now()->toDateString(),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Ulasan berhasil ditambahkan',
            'data' => $review
        ], 201);
    }

    public function destroy($id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json([
                'status' => 'error',
                'message' => 'Ulasan tidak ditemukan'
            ], 404);
        }

        $review->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Ulasan berhasil dihapus'
        ]);
    }
}
