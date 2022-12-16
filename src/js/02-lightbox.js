import { galleryItems } from './gallery-items.js'
// Change code below this line

console.log(galleryItems)

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryItemMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryItemMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a href="${original}" class="gallery__item">
      <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}" 
      title="${description}">
      </a>`
    })
    .join('')
}


new SimpleLightbox('.gallery a', {
  captionDelay: 250,
})