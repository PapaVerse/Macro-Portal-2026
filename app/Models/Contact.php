<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Add this

class Contact extends Model
{
    use SoftDeletes; // Add this

    protected $fillable = [
        'full_name',
        'email',
        'subject',
        'message',
        'status'
    ];
}