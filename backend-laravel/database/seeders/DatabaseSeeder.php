<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Menu;
use App\Models\Review;
use App\Models\Setting;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Menu::truncate();
        Review::truncate();
        Setting::truncate();

        $menus = [
            // Kopi
            ['name' => 'Kopi Susu', 'price' => 'Rp 22.000', 'numeric_price' => 22000, 'category' => 'Kopi', 'image' => '/images/kopi/kopi-susu.jpg', 'status' => 'Available', 'description' => 'Perpaduan seimbang espresso premium dengan susu segar manis yang lembut.'],
            ['name' => 'Cappucino Hot', 'price' => 'Rp 28.000', 'numeric_price' => 28000, 'category' => 'Kopi', 'image' => '/images/kopi/cappucino-hot.jpg', 'status' => 'Available', 'description' => 'Espresso pekat dengan foam susu tebal dan taburan bubuk cokelat.'],
            ['name' => 'Kopi Tubruk', 'price' => 'Rp 32.000', 'numeric_price' => 32000, 'category' => 'Kopi', 'image' => '/images/kopi/kopi-tubruk.jpg', 'status' => 'Available', 'description' => 'Kopi hitam tradisional Nusantara yang diseduh langsung bersama ampasnya.'],
            ['name' => 'Americano Ice', 'price' => 'Rp 30.000', 'numeric_price' => 30000, 'category' => 'Kopi', 'image' => '/images/kopi/americano-ice.jpg', 'status' => 'Available', 'description' => 'Espresso dingin yang segar dan ringan, cocok untuk menemani hari yang panas.'],
            ['name' => 'Americano Hot', 'price' => 'Rp 25.000', 'numeric_price' => 25000, 'category' => 'Kopi', 'image' => '/images/kopi/americano-hot.jpg', 'status' => 'Available', 'description' => 'Espresso panas murni dengan tambahan air untuk cita rasa kopi hitam yang bersih.'],
            ['name' => 'Dirty Latte', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Kopi', 'image' => '/images/kopi/dirty-latte.jpg', 'status' => 'Available', 'description' => 'Espresso yang dituang perlahan di atas susu dingin berlemak untuk sensasi rasa unik.'],
            ['name' => 'Moccachino Ice', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Kopi', 'image' => '/images/kopi/moccachino-ice.jpg', 'status' => 'Available', 'description' => 'Kopi susu dingin dengan sentuhan rasa cokelat premium yang manis.'],
            ['name' => 'Cappucino Ice', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Kopi', 'image' => '/images/kopi/cappucino-ice.jpg', 'status' => 'Available', 'description' => 'Espresso dingin dengan foam susu lembut yang menyegarkan.'],

            // Non-Kopi
            ['name' => 'Chocolate Ice', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Non-Kopi', 'image' => '/images/nonkopi/chocolate-ice.jpg', 'status' => 'Available', 'description' => 'Minuman cokelat dingin yang kental, manis, dan kaya rasa.'],
            ['name' => 'Matcha Ice', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Non-Kopi', 'image' => '/images/nonkopi/matcha-ice.jpg', 'status' => 'Available', 'description' => 'Teh hijau matcha khas Jepang yang dipadu dengan susu segar dingin.'],
            ['name' => 'Redvelvet', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Non-Kopi', 'image' => '/images/nonkopi/redvelvet.jpg', 'status' => 'Available', 'description' => 'Minuman red velvet manis lembut dengan rasa khas kue yang gurih.'],
            ['name' => 'Matchaberry', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Non-Kopi', 'image' => '/images/nonkopi/matchaberry.jpg', 'status' => 'Available', 'description' => 'Perpaduan unik teh hijau matcha dengan rasa segar buah stroberi.'],

            // Mocktail
            ['name' => 'Sruni', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Mocktail', 'image' => '/images/mocktail/sruni.jpg', 'status' => 'Available', 'description' => 'Mocktail segar khas Kurang Kopi dengan cita rasa asam manis yang unik.'],
            ['name' => 'Lychee Tea', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Mocktail', 'image' => '/images/mocktail/lychee-tea.jpg', 'status' => 'Available', 'description' => 'Teh manis dingin yang dipadu dengan buah leci segar.'],
            ['name' => 'Samiran', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Mocktail', 'image' => '/images/mocktail/samiran.jpg', 'status' => 'Available', 'description' => 'Mocktail kopi dengan rasa buah segar yang mendinginkan dahaga.'],
            ['name' => 'Kurko Skyblue', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Mocktail', 'image' => '/images/mocktail/kurko-skyblue.jpg', 'status' => 'Available', 'description' => 'Mocktail berwarna biru langit yang segar dengan sensasi soda manis.'],
            ['name' => 'Pressoberry', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Mocktail', 'image' => '/images/mocktail/pressoberry.jpg', 'status' => 'Available', 'description' => 'Kombinasi unik espresso dengan kesegaran sirup buah beri yang asam manis.'],

            // Camilan
            ['name' => 'French Fries', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Camilan', 'image' => '/images/camilan/french-fries.jpg', 'status' => 'Available', 'description' => 'Kentang goreng gurih dan renyah, disajikan hangat dengan saus pilihan.'],
            ['name' => 'Mix Platter', 'price' => 'Rp 18.000', 'numeric_price' => 18000, 'category' => 'Camilan', 'image' => '/images/camilan/mix-platter.jpg', 'status' => 'Available', 'description' => 'Kombinasi berbagai camilan renyah yang cocok untuk dinikmati bersama teman.']
        ];

        foreach ($menus as $m) {
            Menu::create($m);
        }

        $reviews = [
            ['name' => 'Andi Wijaya', 'review' => 'Tempat paling nyaman untuk kerja atau sekadar ngobrol. Kopinya punya karakter yang kuat dan barista sangat ramah.', 'rating' => 5],
            ['name' => 'Siska Putri', 'review' => 'Interiornya sangat aesthetic! Setiap sudut Instagrammable. Matcha-nya wajib dicoba.', 'rating' => 5],
            ['name' => 'Budi Santoso', 'review' => 'Wifi kencang, banyak colokan, dan kopinya bikin melek. Sukses terus Kurang Kopi!', 'rating' => 5]
        ];

        foreach ($reviews as $r) {
            Review::create($r);
        }

        Setting::create([
            'shop_name' => 'Kurang Kopi',
            'tagline' => 'Setiap Tegukan Punya Cerita',
            'phone' => '+62 812-3456-7890',
            'email' => 'info@kurangkopi.my.id',
            'address' => 'Jl. Kopi Harapan No. 45, Indonesia',
            'open_hours' => 'Senin - Minggu: 08.00 - 23.00 WIB',
            'is_open' => true,
        ]);
    }
}
