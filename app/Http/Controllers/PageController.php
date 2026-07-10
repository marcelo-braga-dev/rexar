<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home');
    }

    public function sobre(): Response
    {
        return Inertia::render('Sobre');
    }

    public function produtos(): Response
    {
        return Inertia::render('Produtos');
    }

    public function produto(string $slug): Response
    {
        return Inertia::render('Produto', ['slug' => $slug]);
    }

    public function contato(): Response
    {
        return Inertia::render('Contato');
    }
}
