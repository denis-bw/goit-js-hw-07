import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryImg = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>`;
}).join('');

galleryRef.innerHTML = galleryImg;


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
})