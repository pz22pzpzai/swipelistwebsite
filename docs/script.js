document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('header nav');
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('nav a[href^="#"], .foot-nav a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const id=link.getAttribute('href').slice(1);
      const target=document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        nav.classList.remove('open');
      }
    });
  });
  document.querySelectorAll('.accordion button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const expanded=btn.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.accordion button').forEach(b=>b.setAttribute('aria-expanded','false'));
      btn.setAttribute('aria-expanded',(!expanded).toString());
    });
  });
  const form=document.getElementById('signup-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const email=form.email.value.trim();
      if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        console.log('Email submitted:',email);
        form.reset();
      }else{
        alert('Please enter a valid email address');
      }
    });
  }
});
