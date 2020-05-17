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

TweenMax.staggerTo(['#red','#blue','#yellow','#green', '#pink', '#purple'], 1.5, {rotationX: -180}, 0.2);

$('.box').on({
  'mouseenter': function(){
      TweenMax.set('.box.active', {className:"-=active"});
      TweenMax.set((this), {className:"+=active"});
      TweenMax.to('.active', 0.25, {width: 350, height: 350,y: -10 ,z: 60, zIndex: 1});
      TweenMax.to('.box', 0.25, {opacity: 0.3});
    },
  'mouseleave': function(){
      TweenMax.set('.active', {className:"+=box"});
      TweenMax.to('.box', 0.25, {width: 100, height: 300, y: 10, z: 0 ,zIndex: 0});
      TweenMax.to('.box', 0.25, {opacity: 1});
  }
});