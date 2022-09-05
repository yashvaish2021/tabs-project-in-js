const visionBtn = window.document.querySelector('[data-id="vision"]');

const goalsBtn = window.document.querySelector('[data-id="goals"]');

const historyBtn = window.document.querySelector('[data-id="history"]');

const historyDescription = window.document.querySelector("#history");

const visionDescription = window.document.querySelector("#vision");

const goalsDescription = window.document.querySelector("#goals");

visionBtn.addEventListener("click", function () {
  visionBtn.classList.add("active");
  goalsBtn.classList.remove("active");
  historyBtn.classList.remove("active");
  visionDescription.classList.add("active");
  historyDescription.classList.remove("active");
  goalsDescription.classList.remove("active");
});

goalsBtn.addEventListener("click", function () {
  goalsBtn.classList.add("active");
  historyBtn.classList.remove("active");
  visionBtn.classList.remove("active");
  visionDescription.classList.remove("active");
  historyDescription.classList.remove("active");
  goalsDescription.classList.add("active");
});

historyBtn.addEventListener("click", function () {
  goalsBtn.classList.remove("active");
  visionBtn.classList.remove("active");
  visionDescription.classList.remove("active");
  goalsDescription.classList.remove("active");
  historyDescription.classList.add("active");
});
