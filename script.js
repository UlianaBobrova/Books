"use strict"

const books = document.querySelectorAll('.books'),
      book = document.querySelectorAll('.book'),
      liBook = document.querySelectorAll('.book > ul > li');

      console.log(books);
      console.log(book);
      console.log(liBook);

//Восстановить порядок книг.
books[0].prepend(book[1]);
book[4].after(book[3]);
book[4].after(book[2]);
book[3].after(book[2]);
book[5].after(book[2]);

//Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv.remove();
console.log(adv);

//Заменить картинку заднего фона на другую из папки image
const styleBody = document.querySelector('body');
console.log(styleBody);
styleBody.style.backgroundImage = 'url(./image/1.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let blankB3 = document.querySelectorAll('h2 > a')[2];
blankB3.textContent = 'Книга 3. this и Прототипы Объектов';
console.log(blankB3);


//Восстановить порядок глав во второй книге

liBook[4].before(liBook[8]);
liBook[8].before(liBook[6]);
liBook[10].before(liBook[2]);

//Восстановить порядок глав в пятой книге
liBook[52].before(liBook[48]);
liBook[49].before(liBook[55]);




//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let li55Book = document.querySelectorAll('.book > ul > li')[55];
const li57Clone = li55Book.cloneNode(true);
li57Clone.textContent = 'Глава 8: За пределами ES6';
// console.log(liBook);
// console.log(li57Clone);
book[2].append(li57Clone);
li55Book.after(li57Clone);




