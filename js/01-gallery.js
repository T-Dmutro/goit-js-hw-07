import { galleryItems } from './gallery-items.js';

const div = document.createElement("div");
div.classList.add("gallery");
const element = document.querySelector("p")
element.after(div);


const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryItem(galleryItems);
  
// function addElement(){
//     const newDiv = document.createElement("div");
//     newDiv.innerHTML = "galleryItem"

// }

function createGalleryItem() {
    const galleryItem = galleryItems
      .map(({ preview, original, description }) => {
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
      })
      .join('');
      console.log(galleryItem);
      galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
  }
  createGalleryItem();
  
