// op effect
var ope = new TimelineMax
ope.to('.opb', 1, {delay: 1, ease: 'elastic', top: '50%'})
.add( 'ope1' )
.to( '.opb', 0.5, {height: "30vh", width: "100vw", borderRadius: 0, backgroundImage: "linear-gradient(25deg, rgba(255, 0, 0, 0.418), rgba(82, 243, 255, 0.623)),url('/images/bluesky.jpg')"}, 'ope1' )
.add('.ope2')
.to( '.opb p', 1, {ease: "power4", left: 0}, 'ope2' )
.add('ope3')
.to( '.opb p', 0.3, {opacity: 0}, 'ope3' )
.add('ope4')
.to( '.opb', 0.5, {height: "100vh"}, 'ope4' )
.add('ope5')
.to( '.bbg', 0.1, {display: "none", top: "100vh"}, 'ope5' )
.add('ope6')
.to( '.opb', 0.5, {opacity: 0}, 'ope6' )
.add('ope7')
.to( '.opb', 0.1, {display: "none"}, 'ope7' )

// square 
var stl = new TimelineMax({ repeat: -1});
stl.to('.square', 8, {left: "calc(100% - 60px)"})
.add( 'scene1' )
.to( '.square', 8, {top: "calc(100% - 60px)"}, 'scene1' )
.add('scene2')
.to( '.square', 8, {left: "0%"}, 'scene2' )
.add('scene3')
.to( '.square', 8, {top: "0%"}, 'scene3' )

var ctl = new TimelineMax({ repeat: -1,repeatDelay: 3.4});
ctl.to('.circle', 1.5, {height: "800px",width: "800px",opacity: 0,ease: "power4"});

$('.box').on({
  'click': function(){
    stl.timeScale(0.8);
    ctl.timeScale(0.2);
    ctl.repeatDelay(0.1);
  }
});

$('.miniBoxes').on({
  'click': function(){
    stl.timeScale(1);
    ctl.timeScale(1);
    ctl.repeatDelay(3.4);
  }
});

// title
$('.obj').on({
  'mouseenter': function(){
      TweenMax.to('#bgc', 0.25, {width: "100%" });
      TweenMax.to('.obj', 0.25, {border: "1px solid gray",color: "gray"});
      TweenMax.staggerTo('.objt', 0.25, {rotationX: 360}, 0.07);
  },
  'mouseleave': function(){
      TweenMax.to('#bgc', 0.25, {width: "0%" });
      TweenMax.to('.obj', 0.25, {border: "1px solid white",color: "white"});
      TweenMax.staggerTo('.objt', 0.25, {rotationX: -360}, 0.07);
  }
});

// index window
TweenMax.staggerTo('.box', 1.5, {delay: 4,rotationX: -360}, 0.1);
$('.box').on({
  'mouseenter': function(){
      TweenMax.set((this),
      {
        className:"+=active",
        onComplete: function(){
          TweenMax.to('.active .text', 0.1, {display:"inline-block",opacity: 1});
        }
      });
      TweenMax.to('.box', 0.25, {opacity: 0.3});
      TweenMax.to('.active', 0.25, {width: 350, height: 350,y: -10 ,z: 60, zIndex: 1});
  },
  'mouseleave': function(){
      TweenMax.set('.active', {className:"+=box"});
      TweenMax.to('.box', 0.25, {width: 100, height: 300, y: 10, z: 0 ,zIndex: 0,opacity: 1});
      TweenMax.to('.text', 0.1, {display: "none",opacity: 0});
  }
});

// Jump to another page
if(!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/))
{
$('.box').on({
  'click': function(){
    var pageId = $(this).attr('id');
    var page = '.' + pageId ;
    TweenMax.to('.bbg', 0.2, {display: "block",top: "0vh"});
    TweenMax.to('.index',{display: "none"});
    TweenMax.to('body',{delay: 0.2, backgroundImage: "url('/images/ocean.jpg')",});
    TweenMax.to((page),
    {
      delay: 0.2,
      display: "block",
      onComplete: function(){
        TweenMax.to('.miniBoxes',{display: "block"});
        TweenMax.to('.bbg',0.3,
        {
          opacity: 0,
          display: "none",
          onComplete: function(){
            TweenMax.to('.bbg', {top: "100vh", opacity: 1})
          }
        });
      }
    });
  }
});
}

if(navigator.userAgent.match(/(iPhone|iPad|Andoroid)/))
{
  $('.text').on({
    'click': function(){
      var pageId = $('.active').attr('id');
      var page = '.' + pageId ;
      TweenMax.to('.bbg', 0.2, {display: "block",top: "0vh"});
      TweenMax.to('.index',{display: "none"});
      TweenMax.to('body',{delay: 0.2, backgroundImage: "url('/images/ocean.jpg')",});
      TweenMax.to((page),
      {
        delay: 0.2,
        display: "block",
        onComplete: function(){
          TweenMax.to('.miniBoxes',{display: "block"});
          TweenMax.to('.bbg',0.3,
          {
            opacity: 0,
            display: "none",
            onComplete: function(){
              TweenMax.to('.bbg', {top: "100vh", opacity: 1})
            }
          });
        }
      });
    }
  });
}

// back index
TweenMax.staggerTo('.miniBox', 4, {ease: "expo", repeat: -1, rotationX: -180}, 0.1);

$('.miniBoxes').on({
  'click': function(){
    TweenMax.to('.bbg', 0.2, {display: "block",top: "0vh"});
    TweenMax.to('#content',{display: "none"});
    TweenMax.to('.miniBoxes',{delay: 0.2, display: "none"});
    TweenMax.to('body', {delay: 0.2, backgroundImage: "linear-gradient(25deg, rgba(255, 0, 0, 0.418), rgba(82, 243, 255, 0.623)),url('/images/bluesky.jpg')"});
    TweenMax.to('.index',
    {
      delay: 0.2,
      display: "block",
      onComplete: function(){
        TweenMax.to('.bbg',0.3,
        {
          opacity: 0,
          display: "none",
          onComplete: function(){
            TweenMax.to('.bbg', {top: "100vh", opacity: 1})
          }
        });
      }
    });
  }
});

// about page
$('.myPhoto').on({
  'mouseenter': function(){
    TweenMax.to('.myPhoto', 0.5, {borderRadius: 0, backgroundImage: "url('/images/live.jpg')", backgroundSize: "800px"});
  },
  'mouseleave': function(){
    TweenMax.to('.myPhoto', 0.5, {borderRadius: "50%", backgroundImage: "url('/images/kaiyu.jpg')", backgroundSize: "550px"});
  }
});

// skill page
$('.icon i').on({
  'mouseenter': function(){
    $(this).attr('id', "iconA");
    TweenMax.to('#iconA', 0.5, {ease: "elastic",scale: 1.5});
  },
  'mouseleave': function(){
    TweenMax.to('#iconA', 0.5, {scale: 1});
    $(this).removeAttr('id', "iconA");
  }
});

// work page
if(!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/))
{
  $('.rotateBox').on({
    'mouseenter': function(){
      $(this).attr('id', "workA");
      TweenMax.to('#workA .workText', 0.5, {opacity: 0});
      TweenMax.to('#workA .workPhoto', 0.5,{opacity: 1});
    },
    'mouseleave': function(){
      TweenMax.to('#workA .workPhoto', 0.5, {opacity: 0});
      TweenMax.to('#workA .workText', 0.5, {opacity: 1});
      $(this).removeAttr('id', "workA");
    }
  });
}

//blog page
if(!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/))
{
  $('.blogBox').on({
    'mouseenter': function(){
      $(this).attr('id', "blogA");
      TweenMax.to('#blogA .blogTitle', 0.2, {opacity: 0});
      TweenMax.to('#blogA .blogTagBox', 0.2, {opacity: 0});
      TweenMax.to('#blogA', {backgroundImage: "url('/images/qiitalogo.png')", backgroundRepeat:"no-repeat", backgroundSize: "cover",backgroundPosition: "center"});
    },
    'mouseleave': function(){
      TweenMax.to('#blogA .blogTitle', 0.2, {opacity: 1});
      TweenMax.to('#blogA .blogTagBox', 0.2, {opacity: 1});
      TweenMax.to('#blogA', {backgroundImage: "none"});
      $(this).removeAttr('id', "blogA");
    }
  });
}

// contact page
if(!navigator.userAgent.match(/(iPhone|iPad|Andoroid)/))
{
  $('.contactIcons i').on({
    'mouseenter': function(){
      $(this).attr('id', "iconA");
      TweenMax.to('#iconA', 0.2, {color: "rgb(245, 245, 245)"});
    },
    'mouseleave': function(){
      TweenMax.to('#iconA', 0.2, {color: " rgb(146, 146, 146)"});
      $(this).removeAttr('id', "iconA");
    }
  });
}