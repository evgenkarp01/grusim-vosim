$( document ).ready(function() {

    $('.rev-sldr').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1
    });
    
    $('.sldr-magnific-slick').slick({
    dots: false,
    arrows: true,
    prevArrow: '.nav-prev',
    nextArrow: '.nav-next',
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
  });
    
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
    
    $(function(){
        $('[name="phone"]').mask("+7(999) 999-99-99");
    });

    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
        
    $("#modal-button, #send").on("click", function(event){
        event.preventDefault();
         
         if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
            call(this);
         }
    });
    
    
    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

})


