@extends('layouts.app')

@section('content')
<div class="obj01">
  <span class="obj01t">P</span>
  <span class="obj01t">o</span>
  <span class="obj01t">r</span>
  <span class="obj01t">t</span>
  <span class="obj01t">f</span>
  <span class="obj01t">o</span>
  <span class="obj01t">l</span>
  <span class="obj01t">i</span>
  <span class="obj01t">o</span>
  <div id="bgc01"></div>
</div>
<div class="boxes">
  <div class="flex-box">
    <div class="box active" id="box1"><h1 id="text">ABOUT</h1></div>
    <div class="box" id="box2"><h1 id="text">SKILL</h1></div>
    <div class="box" id="box3"><h1 id="text">WORKS</h1></div>
    <div class="box" id="box4"><h1 id="text">BLOG</h1></div>
    <div class="box" id="box5"><h1 id="text">CONTACT</h1></div>
  </div>
</div>
<script src="{{ asset('js/tweenmax.js') }}"></script>
@endsection