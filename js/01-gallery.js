import { galleryItems } from './gallery-items.js';

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

const onGalleryClick = e => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
  );

  instance.show();

  const onEscPress = e => {
    if (e.code === 'Escape') {
      instance.close(document.removeEventListener('keydown', onEscPress));
    }
  };

  document.addEventListener('keydown', onEscPress);
};

render();

refs.gallery.addEventListener('click', onGalleryClick);
