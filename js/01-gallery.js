import { galleryItems } from './gallery-items.js';
function createGalleryItem (galleryItems){
    const markup = galleryItems.map(({preview, original, description}) => {
        return
        <div class="gallery__item">
            <a class="gallery__link" href="original">
             <img
                class="gallery__image"
                src="preview"
                data-source="original"
                alt="description"
             />
            </a>
        </div>
    });
    console.log(markup);
}

console.log(galleryItems);
