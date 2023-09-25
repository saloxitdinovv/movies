/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
import { movies } from "./db.js";

let bgImage = document.querySelector('.promo__bg')
let ads = document.querySelector('.promo__adv')
let genre = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let description = document.querySelector('.promo__descr')
let imdbRating = document.querySelector('.promo__ratings span')
let kinopoiskRating = document.querySelector('.kinopoisk')

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

ads.innerHTML = ''

genre.innerHTML = 'Драма'

bgImage.style.backgroundImage = 'url(./img/bg.jpg)'

let ul = document.querySelector('.promo__interactive-list')

let names = []

movies.forEach(movie => {
    names.push(movie.Title)
});

for (let i = 0; i < names.length; i++) {
    let number = document.createElement('p')
    let li = document.createElement('li')
    let deleteButton = document.createElement('div')

    li.classList.add('promo__interactive-item')
    deleteButton.classList.add('delete')

    li.innerHTML = movies[i].Title

    number.innerHTML = i + 1

    ul.append(li)
    li.prepend(number)
    li.append(deleteButton)

    li.style.display = 'flex'
    li.style.gap = '10px'

    bgImage.classList.add('promo__bg');
    
    li.onclick = () => {
        bgImage.style.backgroundImage = `url(${movies[i].Poster})`
        title.innerHTML = movies[i].Title
        description.innerHTML = movies[i].Plot
        imdbRating.innerHTML = `ImDb: ${movies[i].imdbRating}`
        kinopoiskRating.innerHTML = `Кинопоиск: ${movies[i + 1].imdbRating}`
    }
    deleteButton.onclick = () => {
        li.remove()
        movies.splice(i, 1);
        console.log(movies);
    };
}


// if (cart.includes(item.id)) {
//     // delete
//     cart = cart.filter(id => id !== item.id)
//     btn_favorite.classList.remove('fav_act')
//     btn_favorite.innerHTML = "В избранное"
// } else {
//     cart.push(item.id)
//     btn_favorite.classList.add('fav_act')
//     btn_favorite.innerHTML = "Добавлено"
// }
