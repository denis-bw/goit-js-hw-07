import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector('.gallery');


console.log(galleryItems);

const galleryImg = galleryItems.map(({preview, original, description}) => { 
    return `<div class="gallery__item">
                 <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
}).join('');


galleryRef.innerHTML = galleryImg;

galleryRef.addEventListener('click', onImaggesClick);

function onImaggesClick(e) { 
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const originalImgAtr = basicLightbox.create(`
		<img width="800" height="600" src="${e.target.dataset.source}">
	`)
   
    originalImgAtr.show();

    galleryRef.addEventListener('keydown', closeImgGallery);
    
    function closeImgGallery(e) {
    if (e.code === 'Escape') {
     originalImgAtr.close()
    }
      return;
  }
};


