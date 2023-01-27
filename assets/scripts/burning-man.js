// --------------- BUTTON UP ---------------//

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
      if (scrollY > 180) {
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
      });
    };
  },
};

btnUp.addEventListener();

// ---------МЕНЮ БУРГЕР ДЛЯ МОБИЛЬНОЙ ВЕРСИИ--------

let headerBurger = document.querySelector(".header__burger");
let headerList = document.querySelector(".header__list");

headerBurger.addEventListener("click", function () {
  headerBurger.classList.toggle("active");
  headerList.classList.toggle("active");
  document.querySelector(".body").classList.toggle("lock");
});

//--- BOOK tickets ---//
let tickets = document.querySelector(".tickets");

let FirstName = document.querySelector(".book__firstName");
let LastName = document.querySelector(".book__lastName");
let TicketsAmount = document.querySelector(".book__ticketsAmount");
let phone = document.querySelector(".book__phone");

let overlay = document.querySelector(".book__overlay");
let closeBtn = document.querySelector(".book__close");
let bookTicketsBtn = document.querySelector(".book__TicketsBtn");
let bookTicketsBtnMain = document.querySelector(".header__button");

bookTicketsBtnMain.addEventListener("click", () => {
  overlay.style.display = "initial";
});

tickets.addEventListener("click", () => {
  overlay.style.display = "initial";
});

bookTicketsBtn.onclick = () => {
  alert(
    `Hello, ${FirstName.value} ${LastName.value}!
${TicketsAmount.value} tickets was successfully booked.

One day before the event you'll get a reminder
to the phone number ${phone.value}

Have a great time! 😉`
  );
  overlay.style.display = "none";
  FirstName.value = "";
  LastName.value = "";
  TicketsAmount.value = "";
  phone.value = "";
};

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
