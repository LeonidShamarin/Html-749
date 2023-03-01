const mainAction = document.getElementById("main-action");
mainAction.addEventListener("click", () => {
  const cars = document.getElementById("cars");
  cars.scrollIntoView({ behavior: "smooth" });
});

const buttons = document.querySelectorAll(".car-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = document.getElementById("price");
    price.scrollIntoView({ behavior: "smooth" });
  });
});

const priceAction = document.getElementById("price-action");
priceAction.addEventListener("click", () => {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const car = document.getElementById("car");
  
  if (name.value === "") {
    alert("Заповніть поле ім'я!");
  } else if (phone.value === "") {
    alert("Заповніть поле телефон!");
  } else if (car.value === "") {
    alert("Заповніть поле автомобіль!");
  } else {
    alert("Дякуємо за заявку, ми зв'яжемся з вами найближчим часом!!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const layer = document.querySelector(".price-image");
  document.addEventListener("mousemove", (event) => {
    const translateX = (event.clientX * 0.4) / 7;
    const translateY = (event.clientY * 0.3) / 8;
    layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px)`;
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
    const bgPositionX = 0.3 * window.pageYOffset;
    elem.style.backgroundPositionX = `0${bgPositionX}px`;
  });
});
