function criarCard() {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
          <div class="card">
              <span class="card-new">Novo</span>
              <img src="/assets/carousel-photo.png" alt="card-image" class="card-image" />
              <div class="card-info">
                  <h3 class="card-h3">
                      Lorem Ipsum Dolor Sit Amet Consectetuer Adipiscing Elit
                  </h3>
                  <div class="card-info-prices">
                      <div class="card-info-prices-wrapper">
                          <div class="card-prices">
                              <p class="card-primary-price">R$ 100,00</p>
                              <p class="card-second-price">R$79,90</p>
                          </div>
                          <button type="button" class="card-descount">10% OFF</button>
                      </div>
                      <p class="card-alternative-payment">
                          Ou em até <span class="card-credit-payment">10x de R$ 7,90</span>
                      </p>
                  </div>
                  <button type="button" class="card-button">Comprar</button>
              </div>
          </div>
      `;

  return slide;
}

const swiperWrapper = document.getElementById("wrapperOne");
const swiperWrapperSec = document.getElementById("wrapperTwo");

for (let i = 0; i < 15; i++) {
  swiperWrapper.appendChild(criarCard());
  swiperWrapperSec.appendChild(criarCard());
}

const swiperConfig = {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerGroup: 5,
  slidesPerView: 5,

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 0
    }
  }
};

const swiper = new Swiper(".swiper", swiperConfig);