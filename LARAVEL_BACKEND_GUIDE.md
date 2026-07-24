# Panduan Integrasi Backend Laravel REST API - Kurang Kopi

Dokumen ini berisi panduan lengkap pembuatan **Laravel REST API** untuk menjadi backend kedai kopi **Kurang Kopi** (`kurangkopi.my.id`).

---

## 1. Struktur Database & Migration Laravel

### Migration: `create_menus_table.php`
```php
public function up()
{
    Schema::create('menus', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('category'); // Kopi, Non-Kopi, Mocktail, Camilan
        $table->string('price');    // e.g. Rp 22.000
        $table->integer('numeric_price')->default(0);
        $table->text('description')->nullable();
        $table->string('image')->default('/images/kopi/kopi-susu.jpg');
        $table->enum('status', ['Available', 'Out of Stock'])->default('Available');
        $table->timestamps();
    });
}
```

### Migration: `create_reviews_table.php`
```php
public function up()
{
    Schema::create('reviews', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->text('review');
        $table->integer('rating')->default(5);
        $table->date('date')->nullable();
        $table->timestamps();
    });
}
```

---

## 2. Model Laravel

### `app/Models/Menu.php`
```php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'price',
        'numeric_price',
        'description',
        'image',
        'status',
    ];
}
```

---

## 3. Controller Laravel

### `app/Http/Controllers/Api/MenuController.php`
```php
namespace App\Http/Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        return response()->json(Menu::latest()->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'category' => 'required|string',
            'price' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        $menu = Menu::create($validated);
        return response()->json(['message' => 'Menu berhasil dibuat', 'data' => $menu], 201);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::findOrFail($id);
        $menu->update($request->all());
        return response()->json(['message' => 'Menu berhasil diperbarui', 'data' => $menu]);
    }

    public function destroy($id)
    {
        Menu::destroy($id);
        return response()->json(['message' => 'Menu berhasil dihapus']);
    }
}
```

---

## 4. Route API (`routes/api.php`)

```php
use App\Http\Controllers\Api\MenuController;
use Illuminate\Support\Facades\Route;

// Public Endpoints
Route::get('/menus', [MenuController::class, 'index']);

// Protected Admin Endpoints (Laravel Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/menus', [MenuController::class, 'store']);
    Route::put('/menus/{id}', [MenuController::class, 'update']);
    Route::delete('/menus/{id}', [MenuController::class, 'destroy']);
});
```

---

## 5. Menghubungkan ke React Frontend

Di file `.env` proyek React ini (atau saat dipasang di hosting `.my.id`), set URL backend Laravel Anda:

```env
VITE_API_URL=https://api.kurangkopi.my.id/api
```

Helper service di [src/services/api.js](file:///d:/...1/kurangkopi/src/services/api.js) secara otomatis akan mengirim request ke endpoint Laravel tersebut!
