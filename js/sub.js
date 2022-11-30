const moreBtns = document.querySelectorAll('.moreBtn');
console.log(moreBtns);

for (let i = 0; i < moreBtns.length; i++) {
	moreBtns[i].addEventListener('click', (e) => {
		const contains = e.target.parentNode.classList.contains('show');
		if (contains) {
			e.target.parentNode.classList.remove('show');
			e.target.innerHTML = '펼치기 <img src="img/downArrow.png" alt="화살표">';
			e.target.classList.remove('on');
		} else {
			e.target.parentNode.classList.add('show');
			e.target.innerHTML = '접기 <img src="img/downArrow.png" alt="화살표">';
			e.target.classList.add('on');
		}
	});
}

const infoSlide = new Swiper('.info_slide_box', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 35, 
});