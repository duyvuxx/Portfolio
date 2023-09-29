const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function start() {
  highlightTabs();
}

start();

function highlightTabs() {
  const tabs = $$(".nav-header-items");

  console.log(window.scrollTop);
  tabs.forEach((e) => {
    e.addEventListener("click", function () {
      tabs.forEach((val) => val.classList.remove("active"));
      this.classList.add("active");
    });
  });
}
