const moreBtns = document.querySelectorAll(".moreBtn");
for (let i = 0; i < moreBtns.length; i++) {
  moreBtns[i].addEventListener("click", (e) => {
    const contains = e.target.parentNode.classList.contains("show");
    if (contains) {
      e.target.parentNode.classList.remove("show");
      e.target.innerHTML = '펼치기 <img src="img/downArrow.png" alt="화살표">';
      e.target.classList.remove("on");
    } else {
      e.target.parentNode.classList.add("show");
      e.target.innerHTML = '접기 <img src="img/downArrow.png" alt="화살표">';
      e.target.classList.add("on");
    }
  });
}

const searchForm = document.getElementById("searchForm");
const searchInput = document.querySelector(".searchInput");
const filteredList = document.querySelector(".searchResults");
const search_content = document.querySelector(".search_content");
const results_length = document.querySelector(".results_length");
const searchArr = [
  ...bestMonth,
  ...bestWeek,
  ...bestDay,
  ...newBook,
  ...sel1,
  ...sel2,
  ...sel3,
];
const setSearchArr = [...new Set(searchArr.map(JSON.stringify))].map(
  JSON.parse
);

const searchFunc = (obj) => {
  search = searchInput.value;
  return obj.indexOf(search) !== -1;
};
const showFilteredCont = (cont) => {
  const filteredOne = document.createElement("li");
  filteredOne.innerHTML = `
		<a href="book_detail.html">
			<div class="search-container">
				<img src='${cont.img}' alt='${cont.title}'/>
				<p class="title">${cont.title}</p>
				<p class="author">${cont.author}</p>
			</div>
		</a>
		`;
  filteredList.append(filteredOne);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filteredList.innerHTML = "";

  if (searchInput.value) {
    const filteredCont = setSearchArr.filter((x) => searchFunc(x.title));
    results_length.innerText = filteredCont.length;
    if (filteredCont) {
      filteredCont.forEach((acc) => showFilteredCont(acc));
    }
    if (filteredCont.length == 0) {
      filteredList.innerHTML = `<li class='result_none'>검색 결과가 존재하지 않습니다.</li>`;
    }
  }
});
