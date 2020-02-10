'use strict';

const carousel = document.querySelector('.carousel__list');
const cards = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');

let counter = 0;
const size = 330;
const transitionValue = 'transform 0.4s ease-in-out';

carousel.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= cards.length - 1) {
    return;
  }

  carousel.style.transition = transitionValue;
  counter += 1;
  carousel.style.transform = `translateX(${-size * counter}px)`;

  dots[counter].classList.add('carousel__dot_active');
  dots[counter - 1].classList.remove('carousel__dot_active');
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  }

  carousel.style.transition = transitionValue;
  counter -= 1;
  carousel.style.transform = `translateX(${-size * counter}px)`;

  dots[counter].classList.add('carousel__dot_active');
  dots[counter + 1].classList.remove('carousel__dot_active');
});
