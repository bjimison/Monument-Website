$(document).ready(function(){
  $('.question').on('submit', function(e){
    e.preventDefault();
    $('form input, form textarea').each(function(){
    var element = $(this);
    if(!element.val()){
    // element.addClass('error');
    // element.addClass('error-message');
    // element.siblings('.error-message').fadeIn();
    // return;
      alert('button working, empty value entered');
     };

    });
  });
});










