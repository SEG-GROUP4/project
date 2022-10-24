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


// make button disapear after click
const disappear = () => {
  var slideSource = document.getElementById('button');
  document.getElementById("button").disabled = true; 
  document.getElementById('button')
    slideSource.classList.add('fade');

 var slideSource = document.getElementById('status');
 document.getElementById('status')
   slideSource.classList.add('fade');
 
} 

// slide to confirm sign up
$("#confirm").on('change',function() {
  var slidepos = $(this).val();
  if(slidepos > 99){
   	// User slided the slider
     var slideSource = document.getElementById('confirm');
     document.getElementById('confirm')
       slideSource.classList.add('fade');

      var slideSource = document.getElementById('check');
      document.getElementById('check')
        slideSource.classList.add('fade');

    var slideSource = document.getElementById('.delete-notice');
    document.getElementById('.delete-notice')
      slideSource.classList.add('fade');
    

  } else {
    $(this).val(0);
  }
});

// rep
 const disappear2 = () => {
  var slideSource = document.getElementById('button2');
  document.getElementById("button2").disabled = true; 
  document.getElementById('button2')
    slideSource.classList.add('fade');

 var slideSource = document.getElementById('status2');
 document.getElementById('status2')
   slideSource.classList.add('fade');
 
}

$("#confirm2").on('change',function() {
  var slidepos = $(this).val();
  if(slidepos > 99){
     var slideSource = document.getElementById('confirm2');
     document.getElementById('confirm2')
       slideSource.classList.add('fade');

      var slideSource = document.getElementById('check2');
      document.getElementById('check2')
        slideSource.classList.add('fade');

    var slideSource = document.getElementById('.delete-notice2');
    document.getElementById('.delete-notice2')
      slideSource.classList.add('fade');
    

  } else {
    $(this).val(0);
  }
});

//rep
const disappear3 = () => {
  var slideSource = document.getElementById('button3');
  document.getElementById("button3").disabled = true; 
  document.getElementById('button3')
    slideSource.classList.add('fade');

 var slideSource = document.getElementById('status3');
 document.getElementById('status3')
   slideSource.classList.add('fade');
 
} 

$("#confirm3").on('change',function() {
  var slidepos = $(this).val();
  if(slidepos > 99){
     var slideSource = document.getElementById('confirm3');
     document.getElementById('confirm3')
       slideSource.classList.add('fade');

      var slideSource = document.getElementById('check3');
      document.getElementById('check3')
        slideSource.classList.add('fade');

    var slideSource = document.getElementById('.delete-notice3');
    document.getElementById('.delete-notice3')
      slideSource.classList.add('fade');
    

  } else {
    $(this).val(0);
  }
});
