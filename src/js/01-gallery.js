// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('div.gallery');
const markupGalleruRef = createMarkupGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', markupGalleruRef);

function createMarkupGallery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
</div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery__item a', {
  captionDelay: 1000,
  captionsData: 'alt',
});
