TweenMax.to('.opb', 1.25,
  {
    delay: 0.5,
    ease: 'elastic',
    top: '50%',
    onComplete: function(){
      TweenMax.to('.opb', 0.5, 
      {
        delay: 0.2,
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

TweenMax.staggerTo('.miniBox', 5, {ease: "expo", repeat: -1, rotationX: -180}, 0.1);

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

$('.box').on({
  'click': function(){
    var pageId = $(this).attr('id');
    var page = '.' + pageId ;
    TweenMax.to('.bbg', 0.5, {display: "block",ease: "bounce",top: "0vh"});
    TweenMax.to('.index',{display: "none"});
    TweenMax.to('body',{delay: 0.8, backgroundImage: "url('/images/ocean.jpg')",
    });
    TweenMax.to((page),
    {
      delay: 0.5,
      display: "block",
      onComplete: function(){
        TweenMax.to('.miniBoxes',{display: "block"});
        TweenMax.to('.bbg',0.5,
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

$('.miniBoxes').on({
  'click': function(){
    TweenMax.to('.bbg', 0.5, {display: "block",ease: "bounce",top: "0vh"});
    TweenMax.to('#content',{delay: 0.5, display: "none"});
    TweenMax.to('.miniBoxes',{delay: 0.5, display: "none"});
    TweenMax.to('body', {delay: 0.5, backgroundImage: "linear-gradient(25deg, rgba(255, 0, 0, 0.418), rgba(82, 243, 255, 0.623)),url('/images/bluesky.jpg')"});
    TweenMax.to('.index',
    {
      delay: 0.5,
      display: "block",
      onComplete: function(){
        TweenMax.to('.bbg',0.5,
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