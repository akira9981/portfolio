<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <title>{{ config('app.name', 'Portfolio') }}</title>
  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.0/gsap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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
<div class="opb"><p>welcome</p></div>
<div class="bbg"></div>
<div class="squareContent">
  <div class="square">
    <div class="circle"></div>
  </div>
</div>
<header>
  <div class="miniBoxes">
    <div class="flex-box">
      <div class="miniBox" id="about"></div>
      <div class="miniBox" id="skill"></div>
      <div class="miniBox" id="works"></div>
      <div class="miniBox" id="blog"></div>
      <div class="miniBox" id="contact"></div>
    </div>
  </div>
</header>
<main>
  @yield('content')
</main>
</body>
</html>