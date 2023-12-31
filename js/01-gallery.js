import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
  list.innerHTML = markup;
  list.addEventListener("click", imageOpen);

let instance;

function imageOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", imageClose);
}

function imageClose(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  window.removeEventListener("keydown", imageClose);
}