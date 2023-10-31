

export function createMarkup(photosArray){
    return photosArray.map(({webformatURL,largeImageURL,tags, likes, 
        views ,comments ,downloads }) => {
            return `

            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden"><defs>
<symbol id="icon-download" viewBox="0 0 32 32"><path d="m16 18 8-8h-6V2h-4v8H8zm7.273-3.273-2.242 2.242L29.159 20l-13.158 4.907L2.843 20l8.127-3.031-2.242-2.242L.001 18v8l16 6 16-6v-8z"/></symbol>
<symbol id="icon-bubble2" viewBox="0 0 32 32"><path d="M16 6c-1.717 0-3.375.271-4.928.804-1.46.502-2.76 1.211-3.863 2.108C5.14 10.593 4 12.755 4 15c0 1.259.35 2.481 1.039 3.63.711 1.185 1.781 2.268 3.093 3.133a3.996 3.996 0 0 1 1.755 2.747c.056.375.091.753.105 1.129.233-.194.461-.401.684-.624a4 4 0 0 1 3.333-1.14c.655.083 1.325.126 1.99.126 1.717 0 3.375-.271 4.928-.804 1.46-.502 2.76-1.211 3.863-2.108 2.069-1.681 3.209-3.843 3.209-6.088s-1.14-4.407-3.209-6.088c-1.104-.897-2.404-1.606-3.863-2.108a15.118 15.118 0 0 0-4.928-.804zm0-4c8.837 0 16 5.82 16 13s-7.163 13-16 13a19.66 19.66 0 0 1-2.495-.158C10.068 31.279 5.966 31.895 2 31.986v-.841C4.142 30.096 6 28.184 6 26c0-.305-.024-.604-.068-.897C2.313 22.72 0 19.079 0 15 0 7.82 7.163 2 16 2z"/></symbol>
<symbol id="icon-heart" viewBox="0 0 32 32"><path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594C14.659 4.736 11.764 2 8.4 2 3.763 2 0 5.764 0 10.401c0 9.433 9.516 11.906 16.001 21.232C22.131 22.365 32 19.533 32 10.401 32 5.764 28.237 2 23.6 2z"/></symbol>
<symbol id="icon-youtube" viewBox="0 0 32 32"><path d="M31.681 9.6s-.313-2.206-1.275-3.175C29.187 5.15 27.825 5.144 27.2 5.069c-4.475-.325-11.194-.325-11.194-.325h-.012s-6.719 0-11.194.325c-.625.075-1.987.081-3.206 1.356C.631 7.394.325 9.6.325 9.6s-.319 2.588-.319 5.181v2.425c0 2.587.319 5.181.319 5.181s.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563.244 10.881.319 10.881.319s6.725-.012 11.2-.331c.625-.075 1.988-.081 3.206-1.356.962-.969 1.275-3.175 1.275-3.175s.319-2.587.319-5.181v-2.425c-.006-2.588-.325-5.181-.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"/></symbol></defs></svg>
            
            <a href="${largeImageURL}" class="photo-link"><div class="photo-card">
<img src="${webformatURL}" alt="${tags}" loading="lazy" class="img-item"/>
<img src="">
<div class="info">
  <p class="info-item">
  <svg width="30" height="30">
    <use class="info-svg" href="#icon-heart"></use>
  </svg> 
    <b>${likes}</b>
  </p>
  <p class="info-item">
  <svg width="30" height="30">
    <use class="info-svg"href="#icon-youtube"></use>
  </svg> 
    <b>${views}</b>
  </p>
  <p class="info-item">
  <svg width="30" height="30">
    <use class="info-svg"href="#icon-bubble2"></use>
  </svg>
    <b> ${comments}</b>
  </p>
  <p class="info-item">
  <svg width="30" height="30">
    <use class="info-svg"href="#icon-download"></use>
  </svg>
    <b>${downloads}</b>
  </p>
</div>
</div>
</a>
`

        } ).join('')

}


