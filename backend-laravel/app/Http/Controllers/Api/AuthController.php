<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (($request->email === 'admin' || $request->email === 'admin@kurangkopi.id') && $request->password === 'admin123') {
            return response()->json([
                'status' => 'success',
                'message' => 'Login Admin Berhasil',
                'token' => 'laravel-sanctum-mock-token-secret-12345',
                'user' => [
                    'name' => 'Admin Kopi',
                    'email' => 'admin@kurangkopi.id',
                    'role' => 'Super Admin'
                ]
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Username atau Password salah!'
        ], 401);
    }

    public function logout(Request $request)
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Logout Berhasil'
        ]);
    }
}
