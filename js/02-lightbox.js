import { galleryItems } from './gallery-items.js';
// Change code below this line

// const div = document.createElement("li");
// const element = document.querySelector("ul")
// element.prepend(div);


const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryItem(galleryItems);
  
function createGalleryItem() {
const galleryItem = galleryItems
      .map(
        ({preview, original, description}) =>
        `<li>
            <div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </div>
        </li>`
    )
    .join("");
// console.log(galleryItem);

galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
}
// console.log(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', { captionsData : "alt", captionDelay : 250});
lightbox.on("show.simplelightbox");