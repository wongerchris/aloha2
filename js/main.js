//Smooth Scroll
  $(document).ready(function(){
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });
  });

//Email Alert Message
  $(document).ready(function(){
    $(function() {
      $('#updates').on('submit', 'form', function(event) {
        event.preventDefault();
        var $emailInput = $('#email-input')

        if ( $emailInput.val().length > 5 ) {
          alert($emailInput.val() + " -> Aloha thanks you for subscribing :)");
          $emailInput.val('');
          $( "#message" ).text( "YAAAA thats what I am talking about" ).show().fadeOut( 2200 );
          event.preventDefault();
        } else {
          alert('Please submit a valid email address.');
          $( "#message" ).text( "Not valid email!" ).show().fadeOut( 2200 );
          event.preventDefault();
        }
      });
    });
  });

//Add to cart
$(document).ready(function() {
  var counter = 0; 
    $(".addMe").click(function(){
        counter++;

    $("#counter").text(counter);
  });
});

$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});


