@extends('layouts.app')

@section('content')
<div class="index">
  <div class="obj">
    <span class="objt">A</span>
    <span class="objt">.</span>
    <span class="objt">Y</span>
    <span class="objt">p</span>
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
      <div class="box" id="about"><h1 class="text">ABOUT</h1></div>
      <div class="box" id="skill"><h1 class="text">SKILL</h1></div>
      <div class="box" id="works"><h1 class="text">WORKS</h1></div>
      <div class="box" id="blog"><h1 class="text">BLOG</h1></div>
      <div class="box" id="contact"><h1 class="text">CONTACT</h1></div>
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
  <div class="mainContent">
    <div class="aboutBox">
      <div class="myPhotoBox">
        <div class="myPhoto"></div>
        <p>Akira Yamashita</p>
      </div>
      <div class="aboutMeBox">
        <h2>About Me</h2>
        <p>
          初めまして、Akira Yamashitaと申します。<br>
          <br>
          大学卒業後、証券会社に就職。<br>
          新規開拓営業を中心に営業活動を行っておりました。
          <br>
          その一方で、webアプリ制作に興味を持ち<br>
          2019年10月からプログラミングの学習を開始。<br>
          <br>
          現在、webエンジニアになるため転職活動中です。<br>
          お気軽にDM等でご連絡お待ちしております！<br>
        </p>
      </div>
    </div>
  </div>
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
        <div class="workPhoto"><a href="https://stocksound.herokuapp.com/" target=”_blank”><img class='workImage' src="{{ asset('images/stocksound.jpg') }}"></a></div>
      </div>
      <div class="rotateBox">
        <div class="workText">
          <i class="fas fa-chalkboard"></i>
          <p>ホワイトボード型　ToDoリスト[Laravel]</p>
          <h1>Memolist</h1>
        </div>
        <div class="workPhoto"><a href="http://infinite-garden-71834.herokuapp.com/login" target=”_blank”><img class='workImage' src="{{ asset('images/memolist.jpg') }}"></a></div>
      </div>
      <div class="rotateBox">
        <div class="workText">
            <i class="fas fa-shopping-cart"></i>
            <p>TECH::CAMP チーム開発課題[Rails]</p>
            <h1>Mercari clone</h1>
        </div>
        <div class="workPhoto"><a href="http://52.198.209.142/" target=”_blank”><img class='workImage' src="{{ asset('images/mercari.jpg') }}"></a></div>
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
  <div class="mainContent">
    <div class="blogsContent">
      <div class="blogBox">
        <div class="blogTitle">MacでLaravel開発環境構築</div>
        <div class="blogTagBox">
          <div class="blogTag">composer</div>
          <div class="blogTag">homebrew</div>
          <div class="blogTag">PHP</div>
          <div class="blogTag">Laravel</div>
        </div>
        <a href="https://qiita.com/gongyro/items/a87d1417f5299beb22e4" target="_blank"></a>
      </div>
      <div class="blogBox">
        <div class="blogTitle">homebrewを使ってPHPのバージョンアップグレード</div>
        <div class="blogTagBox">
          <div class="blogTag">homebrew</div>
          <div class="blogTag">PHP</div>
        </div>
        <a href="https://qiita.com/gongyro/items/da734cf4d8fabc8fe7ff" target="_blank"></a>
      </div>
      <div class="blogBox">
        <div class="blogTitle">hPのバージョンアップグレード</div>
        <div class="blogTagBox">
          <div class="blogTag">homebrew</div>
          <div class="blogTag">PHP</div>
        </div>
      </div>
    </div>
  </div>
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
  <div class="mainContent">
    <div class='contactIcons'>
      <div class='contactIcon'>
        <a href="https://twitter.com/gongyro" target=”_blank”><i class="fab fa-twitter"></i></a>
        <p>Twitter</p>
      </div>
      <div class='contactIcon'>
        <a href="https://github.com/akira9981" target=”_blank”><i class="fab fa-github"></i></a>
        <p>GitHub</p>
      </div>
      <div class='contactIcon'>
      <a href="https://qiita.com/gongyro" target="_blank"><i class="fas fa-book"></i></a>
        <p>Qiita</p>
      </div>
      <div class='contactIcon'>
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=gongyro@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
        <p>Gmail</p>
      </div>
    </div>
    <h5>2020 © AKIRA<h5>
  </div>
</div>

<script src="{{ asset('js/tweenmax.js') }}"></script>
@endsection