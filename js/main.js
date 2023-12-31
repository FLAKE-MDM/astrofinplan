// all
$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

// menu
$(".btn-menu").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
    $('.header').removeClass("header_bg");
    $('body').removeClass("overflow-none");
  } else{
    $(this.getAttribute("href")).slideDown(300);
    $('.header').addClass("header_bg");
    $('body').addClass("overflow-none");
  }

  $(this).toggleClass("active");
});

// dropdown
$('.dropdown-toggle').click(function(e) {
  e.preventDefault();
  let dropdownContainer = $(this).parent();

  dropdownContainer.toggleClass('open');
  $(this).toggleClass('active');

  dropdownContainer.find('.dropdown-menu__close').click(function(e) {
    e.preventDefault();
    dropdownContainer.removeClass('open');
    $(dropdownContainer).find('.dropdown-toggle').removeClass('active');
    dropdownContainer.find('.dropdown-menu__close').off('click');
  });

  $(document).mouseup(function(e) {
    if (dropdownContainer.has(e.target).length === 0) {
      dropdownContainer.removeClass('open');
      $(dropdownContainer).find('.dropdown-toggle').removeClass('active');
      dropdownContainer.find('.dropdown-menu__close').off('click');
    }
  });
});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').removeClass('open');
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
  } else{
    $(this.getAttribute("href")).slideDown(300);
  }

  $(this).toggleClass("active");
});

// tabs
$('.tab-link').click(function(e){
    e.preventDefault();
    $(this).parents(".tab-nav").find('.tab-link').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
    $(this.getAttribute("href")).addClass('active');
});

// up-link
let $page = $('html, body');
$('.up-link').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// modal
$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('overflow-none');
  $('body').addClass('overflow-none');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
      $('.login__mobile-link').removeClass('active');
    }
  }
})

// checkResolution
function checkResolution() {
  if (window.innerWidth < 768) {
    new Swiper(".step-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (window.innerWidth > 1399) {
    // table
    let headingList = document.querySelectorAll(".tariff-section-list li");
    let tariffLists = document.querySelectorAll(".tariff-item-list");

    for (let i = 0; i < headingList.length; i++) {
      let heightHeading = parseInt(getComputedStyle(headingList[i]).height, 10);

      for (let j = 0; j < tariffLists.length; j++) {
        let tariffList = tariffLists[j].querySelectorAll("li");
        let heightList = parseInt(getComputedStyle(tariffList[i]).height, 10);

        if (heightHeading > heightList) {
          tariffList[i].style.height = heightHeading + "px";
        }

        if (heightHeading < heightList) {
          headingList[i].style.height = heightList + "px";
        }
      }
    }
  }

}

window.addEventListener('load', checkResolution);
window.addEventListener('resize', checkResolution);



// about
new Swiper(".certificate-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".certificate-next",
    prevEl: ".certificate-prev",
  },
});

