<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
  <link href="{{ asset('css/style.css') }}" rel="stylesheet">
  <link href="{{ asset('css/obj.css') }}" rel="stylesheet">  
  <link href="{{ asset('css/index.css') }}" rel="stylesheet">
  <link href="{{ asset('css/opening.css') }}" rel="stylesheet">
  <link href="{{ asset('css/header.css') }}" rel="stylesheet">
  <link href="{{ asset('css/about.css') }}" rel="stylesheet">
  <link href="{{ asset('css/skill.css') }}" rel="stylesheet">
  <link href="{{ asset('css/works.css') }}" rel="stylesheet">
  <link href="{{ asset('css/blog.css') }}" rel="stylesheet">
  <link href="{{ asset('css/contact.css') }}" rel="stylesheet">
</head>
<body>
<div class="opb"></div>
<div class="bbg"></div>
<header>
  <div class="miniBoxes">
    <div class="flex-box">
      <div class="miniBox" id="box1"></div>
      <div class="miniBox" id="box2"></div>
      <div class="miniBox" id="box3"></div>
      <div class="miniBox" id="box4"></div>
      <div class="miniBox" id="box5"></div>
    </div>
  </div>
</header>
<main>
  @yield('content')
</main>
</body>
</html>