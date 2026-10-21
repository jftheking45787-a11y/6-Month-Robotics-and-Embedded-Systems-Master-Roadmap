(function(){
  var root=document.documentElement;
  try{var s=localStorage.getItem('rr-theme');if(s==='light'||s==='dark'){root.setAttribute('data-theme',s);}}catch(e){}
  var btn=document.getElementById('theme');
  if(btn){btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');
    if(!cur){cur=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
    var next=cur==='light'?'dark':'light';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('rr-theme',next);}catch(e){}
  });}
  document.querySelectorAll('.month').forEach(function(m){
    var segs=m.querySelectorAll('.bus i');
    m.querySelectorAll('[data-seg]').forEach(function(el){
      var i=parseInt(el.getAttribute('data-seg'),10);
      var on=function(){if(segs[i]){segs[i].classList.add('on');}};
      var off=function(){if(segs[i]){segs[i].classList.remove('on');}};
      el.addEventListener('mouseenter',on);el.addEventListener('mouseleave',off);
      el.addEventListener('focusin',on);el.addEventListener('focusout',off);
    });
  });
  var links=document.querySelectorAll('.nav nav a');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting){return;}
        links.forEach(function(a){
          if(a.getAttribute('href')==='#'+e.target.id){a.setAttribute('aria-current','true');}
          else{a.removeAttribute('aria-current');}
        });
      });
    },{rootMargin:'-35% 0px -60% 0px'});
    document.querySelectorAll('.month').forEach(function(s){io.observe(s);});
  }
})();
