$(document).ready(() => {



$(".footer_notice").on('click', () => {
    $(".footer_notice").addClass("button-active");
      })
    $('.postText').on('keyup', (event) => {
        $('.postText').focus();
     
         const post = $(event.currentTarget).val();
         const allowed = 0+(post).length;
         $('.characters').html(allowed);
         
         if(allowed >= 100)
         {
           $('.wordcount').addClass('red-color');
         }
         else
         {
         $('.wordcount').removeClass("red-color");
        }

        })
        
        $( ".cloth-details" ).hide();
        $('.more-details-button').on('click', event => {
          $(event.currentTarget).closest('.product-details').next('.cloth-details').toggle();
        $(event.currentTarget).find('img').toggleClass('rotate')
      
        });  
      
        $('.cloth-details li').on('click', event => {
          $(event.currentTarget).addClass('active');
        
        $(event.currentTarget).siblings().removeClass( 'active' );
      $(event.currentTarget).closest('.cloth-details').children().removeClass('disabled');
        });
       

})