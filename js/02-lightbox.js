import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);





const cartContainer = document.querySelector('.gallery');
// console.log(cartContainer)
cartContainer.addEventListener('click', onCardsContainerClick)
const cardsMarkup = createCardMarkup(galleryItems);
cartContainer.insertAdjacentHTML('beforeend', cardsMarkup)
let gallery = new SimpleLightbox('.gallery a', {captionsData : "alt", captionDelay : 250, showCounter: false, scaleImageToRatio: true});
gallery.on('show.simplelightbox', function () {	});
function createCardMarkup( element){ 
    return element.map(({preview, original, description})=>{
        return  `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    })
    .join(" ");}

    function onCardsContainerClick(el){
        console.log('Працює')
        blockStandartAction(el);
        
    }
    function blockStandartAction(el){
        el.preventDefault()
    }