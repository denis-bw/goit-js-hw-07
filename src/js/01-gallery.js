import { galleryItems } from './gallery-items.js'
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryItemMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)
galleryEl.addEventListener('click', onItemGalleryClick)

function createGalleryItemMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a href="${original}" class="gallery__link">
      <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}">
      </a>
    </div>`
    })
    .join('')
}

function onItemGalleryClick(evt) {
  evt.preventDefault()

  if (!evt.target.classList.contains('gallery__image')) {
    return
  }

  const selectedImage = evt.target.getAttribute('data-source')

  const originalImgAtr = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

  originalImgAtr.show()

  galleryEl.addEventListener('keydown', onEscapeKeyDown)

  function onEscapeKeyDown(evt) {
    if (evt.code !== 'Escape') {
      return
    }
    originalImgAtr.close()
  }
}