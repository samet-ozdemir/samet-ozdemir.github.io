/* Job */
let currentIndex = 0;
const intervalTime = 5000; 
let interval;

const slider = document.querySelector('.slider');
const jobs = document.querySelectorAll('.job');
const totalJobs = jobs.length;


function startSlider() {
    interval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalJobs) {
            currentIndex = 0;
        }
        updateSlider();
    }, intervalTime);
}


function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}


document.getElementById('prev').addEventListener('click', () => {
    clearInterval(interval); 
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalJobs - 1;
    }
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    clearInterval(interval); 
    currentIndex++;
    if (currentIndex >= totalJobs) {
        currentIndex = 0;
    }
    updateSlider();
});

window.addEventListener('load', startSlider);



/* Job end*/

/* */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Geliştirici", "Arayüz Tasarımcısı", "Problem Çözücü", "Çözüm Odaklı" , "Yeni Fikirlere Açık", 
    "Yaratıcı"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*  - - - - -- - -  -- - - - - - - -- - - -- - - -*/
$(document).ready(function () {

  
  new WOW().init();

 
  var main = function () {
    $('.fa-bars').click(function () {
      $('.nav-screen').animate({
        right: "0px" },
      200);

      $('body').animate({
        right: "285px" },
      200);
    });

    
    $('.fa-times').click(function () {
      $('.nav-screen').animate({
        right: "-285px" },
      200);

      $('body').animate({
        right: "0px" },
      200);
    });

    $('.nav-links a').click(function () {
      $('.nav-screen').animate({
        right: "-285px" },
      500);

      $('body').animate({
        right: "0px" },
      500);
    });
  };

  $(document).ready(main);

  // initiate full page scroll       

  $('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ['Anasayfa', 'Hakkımda', 'Projeler', 'Eğitim', 'Deneyim', 'Haberler', 'İletişim', 'Sosyal'],
    anchors: ['anasayfa', 'hakkimda' ,'projeler', 'egitim', 'deneyim','haber', 'iletisim', 'sosyal'],
    menu: '#myMenu',
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);


      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $('.fa-chevron-down').each(function () {
          $(this).css('opacity', '1');
        });
        $('.header-links a').each(function () {
          $(this).css('color', 'white');
        });
        $('.header-links').css("background-color", "transparent");
      } else

      if (index != 1) {
        $('.header-links a').each(function () {
          $(this).css('color', 'white');
        });
        $('.header-links').css('background-color', 'transparent');
      }

      //using index
      if (index == 2) {

        /* animate skill bars */
        $('.skillbar').each(function () {
          $(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent') },
          2500);
        });
      }
    } });



  // move section down one
  $(document).on('click', '#moveDown', function () {
    $.fn.fullpage.moveSectionDown();
  });



  // smooth scrolling
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top },
          700);
          return false;
        }
      }
    });
  });



});
