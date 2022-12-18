
bestMonth.map((i)=>{
  let bestCont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="image_box"><img src='${i.img}' alt='${i.title}' /></div>
      <div class="txt_box">
        <p class='book_title'>${i.title}</p>
        <p class='author'>${i.author}</p>
      </div>
    </a>
  </li>
  `
  $('.best_slide_wrap.month').append(bestCont);
});
bestWeek.map((i)=>{
  let bestCont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="image_box"><img src='${i.img}' alt='${i.title}' /></div>
      <div class="txt_box">
        <p class='book_title'>${i.title}</p>
        <p class='author'>${i.author}</p>
      </div>
    </a>
  </li>
  `
  $('.best_slide_wrap.week').append(bestCont);
});
bestDay.map((i)=>{
  let bestCont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="image_box"><img src='${i.img}' alt='${i.title}' /></div>
      <div class="txt_box">
        <p class='book_title'>${i.title}</p>
        <p class='author'>${i.author}</p>
      </div>
    </a>
  </li>
  `
  $('.best_slide_wrap.day').append(bestCont);
});


newBook.map((i)=>{
  const newCont = `
    <li class="swiper-slide">
      <a href="book_detail.html">
        <div class="image_box">
          <img src="${i.img}" alt="${i.title}">
        </div>
        <div class="txt_box">
          <p class="book_title">${i.title}</p>
          <p class="author">${i.author}</p>
        </div>
      </a>
    </li>
  `
  $('.new_slide_wrap').append(newCont);
})

choice.map((i)=>{
  const choiceCont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="ch_image_box">
        <img src=${i.img} alt=${i.title}>
      </div>
      <div class="center_txt_box ch_txt_box">
        <p class="cmt">${i.cmt}</p>
        <p class="book_title">${i.title}</p>
        <p class="author">${i.author}</p>
      </div>
    </a>
  </li>
  `

  $('.ch_slide_wrap').append(choiceCont);
})

sel1.map((i)=>{
  const sel1Cont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="sel_image_box">
        <img src=${i.img} alt=${i.title}>
      </div>
      <div class="center_txt_box sel_txt_box">
        <p class="book_title">${i.title}</p>
        <p class="author">${i.author}</p>
      </div>
    </a>
  </li>
  `

  $('.sel1').append(sel1Cont);
})
sel2.map((i)=>{
  const sel2Cont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="sel_image_box">
        <img src=${i.img} alt=${i.title}>
      </div>
      <div class="center_txt_box sel_txt_box">
        <p class="book_title">${i.title}</p>
        <p class="author">${i.author}</p>
      </div>
    </a>
  </li>
  `

  $('.sel2').append(sel2Cont);
})
sel3.map((i)=>{
  const sel3Cont = `
  <li class='swiper-slide'>
    <a href="book_detail.html">
      <div class="sel_image_box">
        <img src=${i.img} alt=${i.title}>
      </div>
      <div class="center_txt_box sel_txt_box">
        <p class="book_title">${i.title}</p>
        <p class="author">${i.author}</p>
      </div>
    </a>
  </li>
  `

  $('.sel3').append(sel3Cont);
})

const bestBtns = document.querySelectorAll('.best_btns button');

$('.best_slider_box.week').show();
$('.best_slider_box.month, .best_slider_box.day').hide();


for(let b = 0; b < bestBtns.length; b++){
  bestBtns[b].addEventListener('click', (e)=>{
    const month = e.target.classList.contains('monthly');
    const week = e.target.classList.contains('weekly');
    const day = e.target.classList.contains('daily');
    console.log(e.target)
    $('.best_btns button').removeClass('active');
    e.target.classList.add('active');
    if(month){
      $('.best_slider_box.month').show();
      $('.best_slider_box.week, .best_slider_box.day').hide();
    }else if(week){
      $('.best_slider_box.week').show();
      $('.best_slider_box.month, .best_slider_box.day').hide();
    }else if(day){
      $('.best_slider_box.day').show();
      $('.best_slider_box.month, .best_slider_box.week').hide();
    }
  })
}


const mainSlide = new Swiper('.slider_box', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
});
const bestSlide = new Swiper('.best_slider_box', {
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },

});
const newSlide = new Swiper('.new_slider_box', {
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 50,
    }
  },
});

const choiceSlide = new Swiper('.ch_slider_box', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
});

const selSlide = new Swiper('.sel_slider_box', {
  loop: true,
  breakpoints:{
    300:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    360:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
    460: {
      slidesPerView: 4,
      spaceBetween: 20,
    }

  },

});

const underlineSlide = new Swiper('.underline_slider_box', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



