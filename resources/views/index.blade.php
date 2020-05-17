@extends('layouts.app')

@section('content')
<div class="obj01">
  <span class="obj01t">T</span>
  <span class="obj01t">w</span>
  <span class="obj01t">e</span>
  <span class="obj01t">e</span>
  <span class="obj01t">n</span>
  <span class="obj01t">M</span>
  <span class="obj01t">a</span>
  <span class="obj01t">x</span>
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