let pageHeaderDropDown = document.querySelector(".page-header__drop-down");
let dropDownButton = document.querySelector(".page-header__drop-down-button");
dropDownButton.addEventListener("click", function () {
  pageHeaderDropDown.classList.toggle("page-header__drop-down--hide");
});

let tableMenu = document.querySelector(".dashboard-table__row-menu");
let tableMenuButton = document.querySelector(".dashboard-table__row-button--active");
tableMenuButton.addEventListener("click", function () {
  tableMenu.classList.toggle("table-row-menu--hide");
});
