import axios from "axios";

const API_KEY = '52368753-eba0a00d68a5190bbbbc4e7af';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 16,
    };
    return axios.get(BASE_URL, { params }).then(res => res.data);
}