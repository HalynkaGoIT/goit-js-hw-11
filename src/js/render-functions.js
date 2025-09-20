import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="img-item" src="${webformatURL}" alt="${tags}"/>
        </a>
        <p>Likes <span>${likes}</span></p>
        <p>View <span>${views}</span></p>
        <p>Comments <span>${comments}</span></p>
        <p>Downloads <span>${downloads}</span></p>
        </li>`
    }).join('');
    gallery.innerHTML = markup;
lightbox.refresh(); 
};

export function clearGallery() {
    gallery.innerHTML = "";
}
export function showLoader(element) {
    
    element.style.display = 'block';    
}

export function hideLoader(element) {  
    element.style.display = 'none'; 
}