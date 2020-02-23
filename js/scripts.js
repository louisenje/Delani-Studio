//    what we do toggle
   $('.main').click(function(){
        $(this).children('.hide').slideToggle(1200);
       $(this).children('.show').toggle(1500);
    });
     // giving feedback to the customer
     $("button").click(function(omonge) {
        var client = document.getElementById('nm').value;
        alert(' Dear '  + client + ' we have received your message successful. ');
        omonge.preventDefault();
    });
    //    reset my form
      $("button").on('click', function(){
        $('form').each(function(){
          this.reset();
        });
    });
    $(".card").hover(function () {
        $(this).children(".card-1").fadeToggle("fast", "linear");
      });
