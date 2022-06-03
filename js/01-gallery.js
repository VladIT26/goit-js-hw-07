import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const itemsOnList = document.querySelector('div.gallery')

function makeListMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
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
  }).join("");
}
const items = makeListMarkup(galleryItems);

itemsOnList.insertAdjacentHTML('afterbegin', items);

itemsOnList.addEventListener('click', modalShow);

let modalWindow;


function modalShow(event) {
  if (event.target.nodeName !== "IMG") {
        return;
    }
  event.preventDefault();
  
  modalWindow = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`,
      {
        open: () => window.addEventListener('keydown', modalClose),
        close: () => window.removeEventListener('keydown', modalClose),
    });
  
    modalWindow.show();
    
};

function modalClose(event) {
  if (event.code === 'Escape') {
    modalWindow.close()
  }
}
