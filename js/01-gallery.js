import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const itemsOnList = document.querySelector('.gallery')
const makeListMarkupOfImages = ({original, preview, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}

const makeImages = galleryItems.map(makeListMarkupOfImages).join('');
itemsOnList.insertAdjacentHTML('afterbegin', makeImages)

itemsOnList.addEventListener('click', modalShow);

let modalWindow;

function modalShow(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    modalWindow = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
        { onShow: () => window.addEventListener('keydown', closeModalOnKey),
        onClose: () => window.removeEventListener('keydown', closeModalOnKey)}),
    modalWindow.show();
};




function closeModalOnKey(event) {
  if (event.code === 'Escape') {
    modalWindow.close();
  }
}

