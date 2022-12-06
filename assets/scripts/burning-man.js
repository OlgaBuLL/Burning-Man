// const btnUp = {
//   el: document.querySelector(".btn-up"),
//   show() {
//     this.el.classList.remove("btn-up_hide"); // удалим у кнопки класс btn-up_hide
//   },
//   hide() {
//     this.el.classList.add("btn-up_hide"); // добавим к кнопке класс btn-up_hide
//   },
//   addEventListener() {
//     // при прокрутке содержимого страницы
//     window.addEventListener("scroll", () => {
//       // определяем величину прокрутки
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
//       scrollY > 400 ? this.show() : this.hide();
//     });
//     // при нажатии на кнопку .btn-up
//     document.querySelector(".btn-up").onclick = () => {
//       // переместим в начало страницы
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     };
//   },
// };

// btnUp.addEventListener();

const btnUp = {
  el: document.querySelector(".btn-up"),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.remove("btn-up_hide");
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains("btn-up_hide") &&
      !this.el.classList.contains("btn-up_hiding")
    ) {
      this.el.classList.add("btn-up_hiding");
      window.setTimeout(() => {
        this.el.classList.add("btn-up_hide");
        this.el.classList.remove("btn-up_hiding");
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        this.show(); // сделаем кнопку .btn-up видимой
      } else {
        this.hide(); // иначе скроем кнопку .btn-up
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".btn-up").onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();

// // ---------МЕНЮ БУРГЕР ДЛЯ МОБИЛЬНОЙ ВЕРСИИ--------

// const hamb = document.querySelector("#hamb");
// const popup = document.querySelector("#popup");
// const body = document.body;

// // Клонируем меню, чтобы задать свои стили для мобильной версии
// const menu = document.querySelector("#menu").cloneNode(1);

// // При клике на иконку hamb вызываем функцию hambHandler
// hamb.addEventListener("click", hambHandler);

// // Выполняем действия при клике ..
// function hambHandler(e) {
//   e.preventDefault();
//   // Переключаем стили элементов при клике
//   popup.classList.toggle("open");
//   hamb.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// }

// // Здесь мы рендерим элементы в наш попап
// function renderPopup() {
//   popup.appendChild(menu);
// }

// // Код для закрытия меню при нажатии на ссылку
// const links = Array.from(menu.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// // Закрытие попапа при клике на меню
// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }

let headerBurger = document.querySelector(".header__burger");
let headerList = document.querySelector(".header__list");

headerBurger.addEventListener("click", function () {
  headerBurger.classList.toggle("active");
  headerList.classList.toggle("active");
  document.querySelector(".body").classList.toggle("lock");
});
