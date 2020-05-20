TweenMax.to('.opb', 1,
  {
    delay: 0.5,
    ease: 'bounce',
    top: '50%',
    onComplete: function(){
      TweenMax.to('.opb', 0.5, 
      {
        delay: 0.2,
        height: "100%", 
        width:"100%",
        onComplete: function(){
          TweenMax.to('.bbg', {display: "none"});
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

$('.obj01').on({
  'mouseenter': function(){
      TweenMax.to('#bgc01', 0.25, {width: "100%" });
      TweenMax.to('.obj01', 0.25, {border: "1px solid gray",color: "gray"});
      TweenMax.staggerTo('.obj01t', 0.25, {rotationX: 360}, 0.07);
  },
  'mouseleave': function(){
      TweenMax.to('#bgc01', 0.25, {width: "0%" });
      TweenMax.to('.obj01', 0.25, {border: "1px solid white",color: "white"});
      TweenMax.staggerTo('.obj01t', 0.25, {rotationX: -360}, 0.07);
  }
});

TweenMax.staggerTo(['#box1','#box2','#box3','#box4', '#box5'], 1.5, {delay: 3,rotationX: -360}, 0.1);

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