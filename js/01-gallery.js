import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

const makeGalleryMarkup = galleryItems =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="${original}" 
              alt="${description}" />
            </a>
        </div>`,
    )
    .join('');

const render = () => {
  refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
};

render();

console.log(makeGalleryMarkup(galleryItems));

console.log(galleryItems);
