// let title = $("h1");
// let welcome = $(".welcome");
// let titleById = $("#title");
// let inp = $("[name = 'inp-name']");

// ! style
// title.css("color", "red");
// welcome.css("background-color", "green");

// ! add and remove classes
// welcome.addClass("example1");
// console.log(welcome.hasClass("example3"));
// welcome.removeClass("example1");

// ! append() appendChild() toggle() prependTo()
// titleById.append(" Azim");
// title.prependTo(titleById);

// let container = $(".container");
// $(".center").after('<h3 class="new">New Element</h3>');

// let res = confirm("Are you 18 y,o,?");
// if (res) {
//   $("h1").css("display", "block");
// }

// !remove - удаляет тег
// ! empty - очищает содержимое

// $("body").html("<h1>Hello Makers Bootcamp!</h1>");
// $("body").after("<div class='container'></div>");

// let cloneElem = $("body").clone();
// cloneElem[0].children[0].innerText = "Hello Makers!";
// $(".container").append(cloneElem);

// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter a number");
// let sum = num1 + num2;
// $("body").html(`<h1>${sum}</h1>`);

// ! setTimeout
// setTimeout(() => {
//   console.log("Hello!");
// }, 6000);
// setInterval(() => {
//   console.log("Hello!");
// }, 1000);
// let img = $("img");
// setTimeout(() => {
//   img.css("transition", "all 7s ease");
//   img.css("opacity", "0%");
// }, 7000);
// setTimeout(() => {
//   img.css("transition", "all 7s ease");
//   img.css("opacity", "100%");
// }, 7000);

// !калькулятор
// function sub() {
//   let num1 = +prompt("Enter a number");
//   let num2 = +prompt("Enter a number");
//   let sum = num1 - num2;
//   $("body").html(`<h1>${sum}</h1>`);
// }
// function sum() {
//   let num1 = +prompt("Enter a number");
//   let num2 = +prompt("Enter a number");
//   let sum = num1 + num2;
//   $("body").html(`<h1>${sum}</h1>`);
// }
// function multiply() {
//   let num1 = +prompt("Enter a number");
//   let num2 = +prompt("Enter a number");
//   let sum = num1 * num2;
//   $("body").html(`<h1>${sum}</h1>`);
// }
// function div() {
//   let num1 = +prompt("Enter a number");
//   let num2 = +prompt("Enter a number");
//   let sum = num1 / num2;
//   $("body").html(`<h1>${sum}</h1>`);
// }

// !JQuery Selectors. Классная работа

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.

// ! answer
// let title = $("h3");
// for (i of title) {
//   i.innerText = "!!!";
// }

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

// ! answer
// title.css("color", "green");

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// ! answer
// let list = $("ul");
// for (let i = 1; i <= 30; i++) {
//   if (i < 10) {
//     list.append(`<li>${i} - овечка</li>`);
//   } else if (i >= 10) {
//     list.append(`<li>${i} - овечек</li>`);
//   }
// }
// Задание №4
// 	В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active.

// ! answer
// let spans = $("span");
// spans.addClass("active");

// Задание №5
// Сделайте калькулятор на jQuery
