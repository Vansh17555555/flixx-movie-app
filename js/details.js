async function displaymoviedetails(){
    const movieId=window.location.search.split('=')[1];
    console.log(movieId);
    const movie=await fetchAPIdata(`movie/${movieId}`);
    displayBackgroundImage('movie',movie.backdrop_path); 
    const div=document.createElement('div') 
      div.classList.add('card');
      div.innerHTML=`<div class="details-top">
      <div>
      ${movie.poster_path ? `<img src="https://tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="">` : `<img src="../images/no-image.jpg" class="card-img-top" alt="Movie Title">`}
      </div>
      <div>
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${movie.vote_average.toFixed(1)}/10
        </p>
        <p class="text-muted">Release Date: ${movie.release_date}</p>
        <p>
          ${movie.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
        ${convertingintoarray(movie.genres).map((genre)=>`<li>${genre.name}</li>`).join('')}
        </ul>
        </div>
        </div>
        <div class="details-bottom">
        <h2>Movie Info</h2>
        <ul>
        <li><span class="text-secondary">Budget:</span>$${movie.budget}</li>
        <li><span class="text-secondary">Revenue:</span>$${addCommastoNumber(movie.revenue)}</li>
        <li><span class="text-secondary">Runtime:</span>${movie.runtime} minutes</li>
        <li><span class="text-secondary">Status:</span>${movie.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">${convertingintoarray(movie.production_companies).map((company)=>`<span>${company.name}</span`).join('')}</div>
  </div>`
  document.querySelector('#movie-details').appendChild(div);
  document.querySelector('#movie-details').appendChild(div);
} function addCommastoNumber(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}
//
function displayBackgroundImage(type,backgroundPath){
  const overlayDiv=document.createElement('div');
  overlayDiv.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${backgroundPath})`
  overlayDiv.style.backgroundSize = 'cover';
overlayDiv.style.backgroundPosition = 'center';
overlayDiv.style.backgroundRepeat = 'no repeat';
overlayDiv.style.height = '100vh';
overlayDiv.style.width = '100vw';
overlayDiv.style.position = 'absolute';
overlayDiv.style.top = '0';
 overlayDiv.style.zIndex = '-1';
overlayDiv.style.left = '0';
overlayDiv.style.opacity='0.1';
document.querySelector('#movie-details').appendChild(overlayDiv);

}
displaymoviedetails();
async function fetchAPIdata(endpoint){
    const API_KEY='011ab9bface6eb0c8345cf31ac16adeb';//never keep it in here in production
    const APIURL='https://api.themoviedb.org/3/';
 //   showspinner();
    const response=await fetch(`${APIURL}${endpoint}?api_key=${API_KEY}`)
    const data=await response.json();
  //  hidespinner();
  console.log(data);  
  return data;
}
function convertingintoarray(array){
  // Assuming movie.genre is a non-array value
const genreArray = Array.isArray(array) ? array : [array];
return genreArray;
}
/*async function displayShowdetails(){
  const showId=window.location.search;
  console.log(showId);
  const show=await fetchAPIdata(`tv/${showId}`);
  displayBackgroundImage('tv',show.backdrop_path); 
  const div=document.createElement('div') 
    div.classList.add('card');
    div.innerHTML=`<div class="details-top">
    <div>
    ${show.poster_path ? `<img src="https://tmdb.org/t/p/w500${show.poster_path}" class="card-img-top" alt="">` : `<img src="../images/no-image.jpg" class="card-img-top" alt="Movie Title">`}
    </div>
    <div>
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${show.vote_average.toFixed(1)}/10
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>
        ${movie.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
      ${convertingintoarray(movie.genres).map((genre)=>`<li>${genre.name}</li>`).join('')}
      </ul>
      < href="${movie.homepage}" target="_blank" ><style "color:Yellow;">/style>Movie Homepage</a>
      </div>
      </div>
      <div class="details-bottom">
      <h2>Movie Info</h2>
      <ul>
      <li><span class="text-secondary">Budget:</span>$${movie.budget}</li>
      <li><span class="text-secondary">Revenue:</span>$${addCommastoNumber(movie.revenue)}</li>
      <li><span class="text-secondary">Runtime:</span>${movie.runtime} minutes</li>
      <li><span class="text-secondary">Status:</span>${movie.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${convertingintoarray(movie.production_companies).map((company)=>`<span>${company.name}</span`).join('')}</div>
</div>`
document.querySelector('#movie-details').appendChild(div);
} function addCommastoNumber(number){
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}
async function fetchAPIdata(endpoint){
  const API_KEY='011ab9bface6eb0c8345cf31ac16adeb';//never keep it in here in production
  const APIURL='https://api.themoviedb.org/3/';
//   showspinner();
  const response=await fetch(`${APIURL}${endpoint}?api_key=${API_KEY}`)
  const data=await response.json();
//  hidespinner();
console.log(data);  
return data;
}
displayShowdetails();
function convertingintoarray(array){
// Assuming movie.genre is a non-array value
const genreArray = Array.isArray(array) ? array : [array];
return genreArray;
}*/