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
    const USD = 'USD';
}

abstract class PackageDuration
{
    const Day = "Day";
    const Month = "Month";
    const Quarter = "Quarter";
}

class Package {
    public function __construct(
        $id,
        $name,
        $description,
        $price,
        $recPrice,
        $currency,
        $duration,
        $duration_int,
        $discount,
        $default,
        $trial
    ) {
      $this->id = $id;
      $this->name = $name;
      $this->description = $description;
      $this->price = $price;
      $this->recPrice = $recPrice;
      $this->currency = $currency;
      $this->duration = $duration;
      $this->duration_int = $duration_int;
      $this->discount = $discount;
      $this->default = $default;
      $this->trial = $trial;
    }
}


// {
//     "id":"12474de1-4021-493d-8570-576385942512",
//     "name":"Day Trial",
//     "description":"Most Popular",
//     "price":1.4,
//     "recPrice":39.2,
//     "currency":"USD",
//     "duration":"Day",
//     "durationRecurring ":"Month",
//     "duration_int":28,
//     "discount":30,
//     "default":true,
//     "trial":true
//   }

Route::get('/init', function () {
    return (object) [
        'user' => new User('example.com'),
        'packages' => [
            new Package(
                1,
                '1 month plan',
                'billed every month',
                39.20,
                39.20,
                PackageCurrency::USD,
                PackageDuration::Month,
                28,
                0,
                FALSE,
                FALSE,
            ),
            new Package(
                2,
                '3 months plan',
                'billed every quarter',
                117.6,
                117.6,
                PackageCurrency::USD,
                PackageDuration::Quarter,
                29,
                50,
                True,
                FALSE,
            ),
            new Package(
                3,
                '1 day trial',
                'renews in 24 hours',
                39.20,
                39.20,
                PackageCurrency::USD,
                PackageDuration::Day,
                30,
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
