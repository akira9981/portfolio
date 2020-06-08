// op effect
TweenMax.to('.opb', 1.25,
  {
    delay: 0.5,
    ease: 'elastic',
    top: '50%',
    onComplete: function(){
      TweenMax.to('.opb i', 0.5, {delay: 0.2,fontSize: "60vw"});
      TweenMax.to('.opb', 0.5, 
      {
        backgroundColor: "rgb(255, 255, 255)",
        delay: 0.3,
        height: "100%", 
        width:"100%",
        onComplete: function(){
          TweenMax.to('.bbg', {top: "100vh", display: "none"});
          TweenMax.to('.opb', 1,
            {
              delay: 0.5,
              opacity: 0,
              ease: 'power1',
              onComplete: function(){
                TweenMax.to('.opb', {display: "none"});
              }
            }
          );
        }
      });
    }
  }
);

// square 
var tl = new TimelineMax({ repeat: -1});
tl.to('.square', 1.5, {left: "calc(100% - 60px)", rotationZ: 360})
.add( 'scene1' )
.to( '.square', 1.5, {top: "calc(100% - 60px)", rotationZ: 720}, 'scene1' )
.add('scene2')
.to( '.square', 1.5, {left: "0%", rotationZ: 1080}, 'scene2' )
.add('scene3')
.to( '.square', 1.5, {top: "0%", rotationZ: 1440}, 'scene3' )

$('.box').on({
  'click': function(){
    tl.timeScale(0.2);}
});

$('.miniBoxes').on({
  'click': function(){
    tl.timeScale(1);}
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
TweenMax.staggerTo('.box', 1.5, {delay: 3,rotationX: -360}, 0.1);
$('.box').on({
  'mouseenter': function(){
      TweenMax.set((this), {className:"+=active"});
      TweenMax.to('.active', 0.25, {width: 350, height: 350,y: -10 ,z: 60, zIndex: 1});
      TweenMax.to('.box', 0.25, {opacity: 0.3});
      TweenMax.to('.active #text', 0.1, {opacity: 1});
    },
  'mouseleave': function(){
      TweenMax.set('.active', {className:"+=box"});
      TweenMax.to('.box', 0.25, {width: 100, height: 300, y: 10, z: 0 ,zIndex: 0,opacity: 1});
      TweenMax.to('#text', 0.1, {opacity: 0});
  }
});

// Jump to another page
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

// back index
TweenMax.staggerTo('.miniBox', 5, {ease: "expo", repeat: -1, rotationX: -180}, 0.1);

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

//blog page
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

// contact page
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