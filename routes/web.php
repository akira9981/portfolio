<?php

use Illuminate\Support\Facades\Route;

Route::get('/' , 'ReviewController@index')->name('index');