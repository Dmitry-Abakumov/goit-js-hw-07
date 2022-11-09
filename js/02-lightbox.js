import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const refs = {
  gallery: document.querySelector('.gallery'),
};

const makeGalleryMarkup = galleryItems =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}"
            </a>
        </li>`,
    )
    .join('');

const render = () => {
  refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
};

render();

const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: '250',
});
