<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
class User {
    public function __construct(
        $email
    ) {
      $this->email = $email;
    }
}

abstract class PackageCurrency
{
    const USD = 0;
}

abstract class PackageDuration
{
    const Day = 0;
    const Month = 1;
    const Quarter = 2;
}

class Package {
    public function __construct(
        $id,
        $name,
        $description,
        $price,
        $currency,
        $duration,
        $discount,
        $default,
        $trial
    ) {
      $this->id = $id;
      $this->name = $name;
      $this->description = $description;
      $this->price = $price;
      $this->currency = $currency;
      $this->duration = $duration;
      $this->discount = $discount;
      $this->default = $default;
      $this->trial = $trial;
    }
}

Route::get('/init', function () {
    return (object) [
        'user' => new User('example.com'),
        'packages' => [
            new Package(
                1,
                '1 month plan',
                'billed every month',
                39.20,
                PackageCurrency::USD,
                PackageDuration::Month,
                0,
                FALSE,
                FALSE,
            ),
            new Package(
                2,
                '3 months plan',
                'billed every quarter',
                117.6,
                PackageCurrency::USD,
                PackageDuration::Quarter,
                50,
                True,
                FALSE,
            ),
            new Package(
                2,
                '1 day trial',
                'renews in 24 hours',
                39.20,
                PackageCurrency::USD,
                PackageDuration::Day,
                30,
                False,
                TRUE,
            ),
        ]
    ];
});

Route::post('/get-form', function (Request $request) {
    // body type
    // id: string,

    return (object) [
        'url' => 'iframe url',
    ];
});

Route::post('/register', function (Request $request) {
    // body type
    // email: string,
    // password: string

    return (object) [
        'user' => new User('example.com'),
    ];
});

Route::post('/login', function (Request $request) {
    // body type
    // email: string,
    // password: string

    return (object) [
        'user' => new User('example.com'),
    ];
});

Route::post('/logout', function () {
    return NULL;
});

Route::post('/send-message', function (Request $request) {
    // body type
    // name: string,
    // email: string,
    // password: string

    return NULL;
});
