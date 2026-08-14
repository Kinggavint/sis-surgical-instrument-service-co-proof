(function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.getElementById('site-nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });}
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var els=[].slice.call(document.querySelectorAll('.sec'));
  els.forEach(function(el,i){if(i>0)el.classList.add('reveal');});
  function show(){
    var vh=window.innerHeight||document.documentElement.clientHeight;
    els.forEach(function(el){
      if(el.getBoundingClientRect().top < vh - 60) el.classList.add('in');
    });
  }
  show();
  window.addEventListener('scroll',show,{passive:true});
  window.addEventListener('resize',show);
  // Failsafe: never leave content hidden if something goes wrong.
  setTimeout(function(){els.forEach(function(el){el.classList.add('in');});},4000);
})();