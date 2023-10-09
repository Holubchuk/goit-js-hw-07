import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

function renderList() {
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
}

renderList();



list.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  let imageUrl;
  if (event.target.nodeName === "IMG") {
    imageUrl = galleryItems.original;
  } else if (event.target.nodeName === "A") {
    imageUrl = galleryItems.original;
  } else if (event.target.nodeName === "LI") {
    imageUrl = galleryItems.original;
  } else {
    return;
  }
  console.log(imageUrl);
}
