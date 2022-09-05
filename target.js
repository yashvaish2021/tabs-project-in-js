const about = window.document.querySelector(".about");

const btns = window.document.querySelectorAll(".tab-btn");

const articles = window.document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = window.document.getElementById(id);
    element.classList.add("active");
  }
});
