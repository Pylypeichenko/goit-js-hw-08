// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(
    item => `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup);

galleryRef.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    gallery.captionDelay = 250;
  });
});

console.log(galleryItems);
