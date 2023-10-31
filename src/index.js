import axios from "axios";
import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import OnlyScrollbar from 'only-scrollbar';
import { spinnerPlay, spinnerStop } from "./js/spinner";
import { params } from "./js/service";
import { refs } from "./js/refs";
import { createMarkup } from "./js/createMarkup";
import { counterPage, resetPage, getPhotos, showLoadmore, firstRequestNotification} from "./js/service";
let pureSearchQuery = '';
let z =1;

const lightbox = new simpleLightbox('.gallery a',{
     captionDelay: 250, 
     captionsData: "alt",
});
let cardHeight = 0;
function smoothScroll(event){
    console.log(event);

    let {height: cardHeight} = refs.galleryBox.lastElementChild.getBoundingClientRect();
    console.log(cardHeight);
    window.scrollBy({
      top: (cardHeight * 2),
      behavior: "smooth",
    });

}


// refs.galleryBox.addEventListener('mousewheel' , a)





const observerOptions = {
    root : null,
    rootMargin: '250px',
    threshold: 1.0,
}
const  infinityLoad =  function (entries, observer) {

entries.forEach(async (entry)=> {
   if(entry.isIntersecting){
    counterPage();

    try {
        spinnerPlay();
        const {data: {hits}, data:{totalHits}} = await getPhotos(pureSearchQuery);
        const markup = createMarkup(hits);



        if(params.page === totalHits) {
galleryObserver.unobserve(refs.itemObserver)
        }

        refs.galleryBox.insertAdjacentHTML('beforeend',markup);
        lightbox.refresh();
            } catch (error) {
                console.log('!!!ERROR!!!!');
            }
            finally {

                spinnerStop()
            }
   }
})
}
const galleryObserver = new IntersectionObserver(infinityLoad, observerOptions);











refs.inputForm.addEventListener('submit', searchClick);

async function searchClick(event) {

    event.preventDefault();

    const {elements:{searchQuery}} = event.currentTarget;
    pureSearchQuery = searchQuery.value.trim().toLowerCase();

if(!pureSearchQuery) {
    Notiflix.Notify.failure('Введіть слово для пошуку')
    return;
} 
resetPage();



    try {
        spinnerPlay();
const {data: {hits}, data : {totalHits}} = await getPhotos(pureSearchQuery);
firstRequestNotification(totalHits);
showLoadmore(totalHits);


if (totalHits === 0) {

    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
}
Notiflix.Notify.success(`По запиту ${pureSearchQuery}  пошук пройшов успішно`)
const markup = createMarkup(hits)
refs.galleryBox.innerHTML = markup;




lightbox.refresh();

galleryObserver.observe(refs.itemObserver);
window.addEventListener('mousewheel', smoothScroll);


    } catch (error) {
        console.log(error);
    }
    finally {
        spinnerStop()
    }




if (!refs.galleryBox.hasChildNodes()) {
refs.loadMoreButton.hidden = true;
}







}

async function loadMore(e) {
    e.preventDefault();
    counterPage();

    try {
        spinnerPlay();
        const {data: {hits}} = await getPhotos(pureSearchQuery);
        const markup = createMarkup(hits);

        refs.galleryBox.insertAdjacentHTML('beforeend', markup);




        lightbox.refresh();
            } catch (error) {
                console.log('!!!ERROR!!!!');
            }
            finally{
                spinnerStop();
            }
}



refs.loadMoreButton.addEventListener('click', loadMore)







