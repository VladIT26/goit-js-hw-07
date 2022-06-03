import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const itemsOnList = document.querySelector('ul.gallery')

function makeListMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  }).join("");
}
const items = makeListMarkup(galleryItems);
itemsOnList.insertAdjacentHTML('afterbegin', items);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});