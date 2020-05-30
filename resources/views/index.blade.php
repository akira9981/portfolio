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
      <div class="box" id="about"><h1 id="text">ABOUT</h1></div>
      <div class="box" id="skill"><h1 id="text">SKILL</h1></div>
      <div class="box" id="works"><h1 id="text">WORKS</h1></div>
      <div class="box" id="blog"><h1 id="text">BLOG</h1></div>
      <div class="box" id="contact"><h1 id="text">CONTACT</h1></div>
    </div>
  </div>
</div>

<div class="about" id="content">
  <div class="obj">
    <span class="objt">A</span>
    <span class="objt">b</span>
    <span class="objt">o</span>
    <span class="objt">u</span>
    <span class="objt">t</span>
    <div id="bgc"></div>
  </div>
  <div class="mainContent"></div>
</div>

<div class="skill" id="content">
  <div class="obj">
    <span class="objt">S</span>
    <span class="objt">k</span>
    <span class="objt">i</span>
    <span class="objt">l</span>
    <span class="objt">l</span>
    <div id="bgc"></div>
  </div>
  <div class="mainContent">
    <div class="skillIcons">
      <div class="icon" id="html">
        <i class="fab fa-html5"></i>
        <p>HTML</p>
      </div>
      <div class="icon" id="css">
        <i class="fab fa-css3-alt"></i>
        <p>CSS</p>
      </div>
      <div class="icon" id="sass">
        <i class="fab fa-sass"></i>
        <p>Sass</p>
      </div>
      <div class="icon" id="javascript">
        <i class="fab fa-js"></i>
        <p>JavaScript</p>
      </div>
      <div class="icon" id="php">
        <i class="fab fa-php"></i>
        <p>PHP</p>
      </div>
      <div class="icon" id="laravel">
        <i class="fab fa-laravel"></i>
        <p>Laravel</p>
      </div>
      <div class="icon" id="aws">
        <i class="fab fa-aws"></i>
        <p>AWS</p>
      </div>
      <div class="icon" id="github">
        <i class="fab fa-github"></i>
        <p>GitHub</p>
      </div>
    </div>
  </div>
</div>

<div class="works" id="content">
  <div class="obj">
    <span class="objt">W</span>
    <span class="objt">o</span>
    <span class="objt">r</span>
    <span class="objt">k</span>
    <span class="objt">s</span>
    <div id="bgc"></div>
  </div>
  <div class="mainContent">
    <div class="worksContener">
      <div class="rotateBox">
        <div class="workText">
          <i class="fas fa-headphones"></i>
          <p>楽曲レヴューサイト[Laravel]</p>
          <h1>StockSound</h1>
        </div>
        <div class="workPhoto"><img class='workImage' src="{{ asset('images/.jpg') }}"></div>
      </div>
      <div class="rotateBox">
        <div class="workText">
          <i class="fas fa-chalkboard"></i>
          <p>ホワイトボード型　ToDoリスト[Laravel]</p>
          <h1>Memolist</h1>
        </div>
        <div class="workPhoto"></div>
      </div>
      <div class="rotateBox">
        <div class="workText">
            <i class="fas fa-shopping-cart"></i>
            <p>TECH::CAMP チーム開発課題[Rails]</p>
            <h1>Mercari clone</h1>
        </div>
        <div class="workPhoto"></div>
      </div>
    </div>
  </div>
</div>

<div class="blog" id="content">
  <div class="obj">
    <span class="objt">B</span>
    <span class="objt">l</span>
    <span class="objt">o</span>
    <span class="objt">g</span>
    <div id="bgc"></div>
  </div>
  <div class="mainContent"></div>
</div>

<div class="contact" id="content">
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
  <div class="mainContent"></div>
</div>

<script src="{{ asset('js/tweenmax.js') }}"></script>
@endsection