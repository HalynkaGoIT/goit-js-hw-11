
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');
const loader = document.querySelector('.loader');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const inputValue = input.value.trim();
    if (inputValue === "") {
        iziToast.warning({
            title: 'Caution',
            message: 'You forgot important data',
        });
        return;
    }

    showLoader(loader);
    clearGallery(); 

    getImagesByQuery(inputValue)
        .then((data) => {
           
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: 'Caution',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                clearGallery();
                return;
            }
            
            createGallery(data.hits);
            // hideLoader(loader); 
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            
            iziToast.error({
                title: 'Error',
                message: 'Error.',
                position: 'topRight',
            });
        })
        .finally(() => {
            hideLoader(loader);
        });
});
