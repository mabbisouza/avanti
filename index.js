document.addEventListener("DOMContentLoaded", () => {
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }

  function createMenuDepartament() {
    const element = document.createElement("li");
    element.classList.add("menu-departament");
    element.classList.add("item-li");
    element.innerHTML = `Departamento <span class="material-symbols-outlined departament-icon">
             chevron_right
            </span>`;
    return element;
  }

  const menuDepartamentContent = document.getElementById(
    "menu-departament-content"
  );

  for (let i = 0; i < 15; i++) {
    menuDepartamentContent?.appendChild(createMenuDepartament());
  }

  function createMenuCategory() {
    const category = document.createElement("li");
    category.classList.add("menu-categories");
    category.classList.add("item-li");
    category.innerHTML = `Categoria`;
    return category;
  }

  const menuCategoryContentFirst = document.getElementById(
    "menu-categories-content-first"
  );

  const menuCategoryContentSec = document.getElementById(
    "menu-categories-content-second"
  );

  const menuCategoryContentThird = document.getElementById(
    "menu-categories-content-third"
  );

  for (let i = 0; i < 8; i++) {
    menuCategoryContentFirst?.appendChild(createMenuCategory());
    menuCategoryContentSec?.appendChild(createMenuCategory());
    menuCategoryContentThird?.appendChild(createMenuCategory());
  }

  function closeMenuList() {
    const allCategoriesList = document.getElementById("menu-container");

    if (allCategoriesList.classList.contains("active")) {
      allCategoriesList.classList.remove("active");
    }
  } 

  function openMenu(key) {
    const element = document.getElementById("menu-container");
    const categoriesTitle = document.getElementById("categories-title");
    const menuContainer = document.getElementById("departament-container");
    element.classList.add("active");

    if (key !== "item-0") {
      menuContainer.classList.add("disabled");
      categoriesTitle.classList.add("active");
    } else {
      menuContainer.classList.remove("disabled");
      categoriesTitle.classList.remove("active");
    }
  }

  function deletedSearch() {
    const messageTextContent = document.getElementsByClassName(
      "search-text-message"
    )[isMobileDevice() ? 1 : 0];
    const message = document.getElementById("search-message");
    if (message) {
      message.remove();
      messageTextContent.style.display = "none";
    }
  }

  function onSearchInput(evt) {
    const messageTextOld = document.getElementById("search-message");
    const containerMessage = document.getElementsByClassName(
      "search-text-message"
    )
    [isMobileDevice() ? 1 : 0];

    if (messageTextOld) {
      messageTextOld.remove();
      containerMessage.style.display = "none";
    }

    const valueInput =
      document.getElementsByClassName("search-input")[isMobileDevice() ? 1 : 0]
        .value;

    const boxMessage = document.createElement("p");
    boxMessage.id = "search-message";
    boxMessage.classList.add("search-message-input");
    boxMessage.innerHTML = `Você procurou por <strong> ${valueInput} <strong>`;

    if (valueInput?.length > 0 && (evt.type === "click" || evt.key === "Enter")) {
      containerMessage.appendChild(boxMessage);
      containerMessage.style.display = "flex";
    }
  }

  window.closeMenuList = closeMenuList;
  window.openMenu = openMenu;
  window.deletedSearch = deletedSearch;
  window.onSearchInput = onSearchInput;
});
