const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

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

const searchMessage = isMobile ? "search-message-mobile" : "search-message";
const searchMessageInput = isMobile
  ? "search-message-input-mobile"
  : "search-message-input";
const searchMessageResult = isMobile
  ? "search-text-message-mobile"
  : "search-text-message";

function deletedSearch() {
  const messageTextContent = document.getElementById(searchMessageResult);
  const message = document.getElementById(searchMessage);
  if (message) {
    message.remove();
    messageTextContent.style.display = "none";
  }
}

function onSearchInput(evt) {
  const messageTextOld = document.getElementById(searchMessage);
  const messageTextContent = document.getElementById(searchMessageResult);

  if (messageTextOld) {
    messageTextOld.remove();
    messageTextContent.style.display = "none";
  }

  const message = document.getElementById(searchMessageInput)?.value;
  const messageSearch = document.createElement("p");
  messageSearch.id = searchMessage;
  messageSearch.classList.add("search-message-input");
  messageSearch.innerHTML = `Você procurou por <strong> ${message} <strong>`;

  if (message?.length > 0 && (evt.type === "click" || evt.key === "Enter")) {
    messageTextContent.appendChild(messageSearch);
    messageTextContent.style.display = "flex";
  }
}
