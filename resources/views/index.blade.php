@extends('layouts.app')

@section('content')
<div class="index">
  <div class="obj">
    <span class="objt">P</span>
    <span class="objt">o</span>
    <span class="objt">r</span>
    <span class="objt">t</span>
    <span class="objt">f</span>
    <span class="objt">o</span>
    <span class="objt">l</span>
    <span class="objt">i</span>
    <span class="objt">o</span>
    <div id="bgc"></div>
  </div>
  <div class="boxes">
    <div class="flex-box">
      <div class="box" id="box1"><h1 id="text">ABOUT</h1></div>
      <div class="box" id="box2"><h1 id="text">SKILL</h1></div>
      <div class="box" id="box3"><h1 id="text">WORKS</h1></div>
      <div class="box" id="box4"><h1 id="text">BLOG</h1></div>
      <div class="box" id="box5"><h1 id="text">CONTACT</h1></div>
    </div>
  </div>
</div>

<div class="about">
  <div class="obj">
    <span class="objt">A</span>
    <span class="objt">b</span>
    <span class="objt">o</span>
    <span class="objt">u</span>
    <span class="objt">t</span>
    <div id="bgc"></div>
  </div>
</div>

<div class="skill">
  <div class="obj">
    <span class="objt">S</span>
    <span class="objt">k</span>
    <span class="objt">i</span>
    <span class="objt">l</span>
    <span class="objt">l</span>
    <div id="bgc"></div>
  </div>
</div>

<div class="works">
  <div class="obj">
    <span class="objt">W</span>
    <span class="objt">o</span>
    <span class="objt">r</span>
    <span class="objt">k</span>
    <span class="objt">s</span>
    <div id="bgc"></div>
  </div>
</div>

<div class="blog">
  <div class="obj">
    <span class="objt">B</span>
    <span class="objt">l</span>
    <span class="objt">o</span>
    <span class="objt">g</span>
    <div id="bgc"></div>
  </div>
</div>

<div class="contact">
  <div class="obj">
    <span class="objt">C</span>
    <span class="objt">o</span>
    <span class="objt">n</span>
    <span class="objt">t</span>
    <span class="objt">a</span>
    <span class="objt">c</span>
    <span class="objt">t</span>
    <div id="bgc"></div>
  </div>
</div>

<script src="{{ asset('js/tweenmax.js') }}"></script>
@endsection