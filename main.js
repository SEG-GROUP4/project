// take user back up
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


// show active menu when scrolling
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 150)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});