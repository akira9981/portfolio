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
    <div class="box active" id="red"></div>
    <div class="box" id="blue"></div>
    <div class="box" id="yellow"></div>
    <div class="box" id="green"></div>
    <div class="box" id="pink"></div>
    <div class="box" id="purple"></div>
  </div>
</div>
<script src="{{ asset('js/tweenmax.js') }}"></script>
@endsection