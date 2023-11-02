import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ description, original, preview }) =>
        `<a href="${original}"><img src="${preview}" alt="${description}" /></a>`
    )
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const galleryBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryBox.on('show.simplelightbox');
