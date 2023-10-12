import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector(".gallery");

function renderList() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
  list.innerHTML = markup;
  list.addEventListener("click", imageOpen);
}

renderList();

function imageOpen(event) {
    event.preventDefault();
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
    });
    
};
