(function($) {

    "use strict";

    //  Header sticky
    const headerSticky = function() {
      const header = document.querySelector('#header');
      if (!header) return;      
      const trigHeight = 1;

      window.addEventListener('scroll', function () {
          let tj = window.scrollY;

          if (tj > trigHeight) {
              header.classList.add('sticky');
          } else {
              header.classList.remove('sticky');
          }
      });
    };

    // init jarallax parallax
    var initJarallax = function() {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-img"), {
        keepImg: true,
      });
    }

    // product quantity
    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {
      
      /* Video */
      var $videoSrc;  
        $('.play-btn').click(function() {
          $videoSrc = $(this).data( "src" );
        });

        $('#myModal').on('shown.bs.modal', function (e) {

        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
      })

      $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
      })

      var swiper = new Swiper(".main-swiper", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 6000,
        },
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          el: ".main-slider-pagination",
          clickable: true,
        },
      });
      
      var swiper = new Swiper(".product-swiper", {
        speed: 1000,
        spaceBetween: 20,
        navigation: {
          nextEl: ".product-carousel-next",
          prevEl: ".product-carousel-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
      }); 

      var swiper = new Swiper(".testimonial-swiper", {
        speed: 1000,
        navigation: {
          nextEl: ".testimonial-arrow-next",
          prevEl: ".testimonial-arrow-prev",
        },
      });

      var thumb_slider = new Swiper(".thumb-swiper", {
        slidesPerView: 1,
      });
      var large_slider = new Swiper(".large-swiper", {
        spaceBetween: 10,
        effect: 'fade',
        thumbs: {
          swiper: thumb_slider,
        },
      });

      headerSticky();
      initJarallax();
      initProductQty();
      AOS.init();
      
    }); // End of a document ready

    window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("hide-preloader");      
    });

})(jQuery);

function increaseCount(event, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  calculateTotal();
}

function decreaseCount(event, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    calculateTotal();
  }
}

function calculateTotal() {
  var total = 0;
  var countInputs = document.querySelectorAll('.counter input[type="text"]');
  
  countInputs.forEach(function(input) {
    var value = parseInt(input.value, 10);
    var price = parseInt(input.getAttribute('data-price'), 10);
    total += isNaN(value) ? 0 : value * price;
  });
  
  document.getElementById('total').textContent = '$' + total;
}
function mydate()
{
  //alert("");
document.getElementById("dt").hidden=false;
document.getElementById("ndt").hidden=true;
}
function mydate1()
{
 d=new Date(document.getElementById("dt").value);
dt=d.getDate();
mn=d.getMonth();
mn++;
yy=d.getFullYear();
document.getElementById("ndt").value=dt+"/"+mn+"/"+yy
document.getElementById("ndt").hidden=false;
document.getElementById("dt").hidden=true;
}
function maskInput(e) {
  var event = e || window.event 
  var key_code = event.keyCode;
  var oElement = e ? e.target : window.event.srcElement;
  if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
      if ((key_code > 47 && key_code < 58) ||
          (key_code > 95 && key_code < 106)) {

          if (key_code > 95)
               key_code -= (95-47);
          oElement.value = oElement.value;
      } else if(key_code == 8) {
          oElement.value = oElement.value;
      } else if(key_code != 9) {
          event.returnValue = false;
      }
  }
}
function isThaichar(str,obj){
  var orgi_text="ๅภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ๑๒๓๔ู฿๕๖๗๘๙๐ฎฑธํ๊ณฯญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ";
  var str_length=str.length;
  var str_length_end=str_length-1;
  var isThai=true;
  var Char_At="";
  for(i=0;i<str_length;i++){
      Char_At=str.charAt(i);
      if(orgi_text.indexOf(Char_At)==-1){
          isThai=false;
      }   
  }
  if(str_length>=1){
      if(isThai==false){
          obj.value=str.substr(0,str_length_end);
      }
  }
  return isThai; // ถ้าเป็น true แสดงว่าเป็นภาษาไทยทั้งหมด
}

document.addEventListener("change", checkSelect);
function checkSelect(evt) {
  const origin = evt.target;

  if (origin.dataset.dependentSelector) {
    const selectedOptFrom = origin.querySelector("option:checked")
      .dataset.dependentOpt || "n/a";
    const addRemove = optData => (optData || "") === selectedOptFrom 
      ? "add" : "remove";
    document.querySelectorAll(`${origin.dataset.dependentSelector} option`)
      .forEach( opt => 
        opt.classList[addRemove(opt.dataset.fromDependent)]("display") );
  }
}

function update(){
  sel = document.getElementById("คณะ");
  display = document.getElementById("display");
  
  display.value = sel.value;
}