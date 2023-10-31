import axios from "axios";
import { refs } from "./refs";
import Notiflix from "notiflix";
axios.defaults.baseURL = 'https://pixabay.com';

const options = {
    params : {

        key: '38550917-b098f041474dc6be7e8c708d7',
        q : '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 20,
    }
}

export const {params} = options;



export async function getPhotos(pureSearchQuery) {
    const URLaxios = '/api';
params.q = pureSearchQuery;




        const data = await axios.get(URLaxios, options)
    return data;
    } 


export async function counterPage() {
params.page += 1;

}

export async function resetPage() {
params.page = 1;
}


export async function showLoadmore (totalHits) {
if(params.page <= totalHits) {
refs.loadMoreButton.hidden = false;
}

}

export async function firstRequestNotification(totalHits){
    if (params.page === 1 && totalHits > 0) {
Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`)
    }
}