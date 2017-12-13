// const apiKey = AIzaSyC188XYvuPaGSU_R7qTNRKTa1-x6S-1qlM
// const endPoint = 'https://www.googleapis.com/youtube/v3/search'

// part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)

// App Requirements
// Accept a user search term

// Get JSON from the YouTube API based on the user search term

// Display the thumbnail image of the returned videos
'use strict';
/* global $ */


const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';


// function watchSubmit() {
//   $('.js-search-form').submit(event => {
//     event.preventDefault();
//     const queryTarget = $(event.currentTarget).find('.js-query');
//     const query = queryTarget.val();
//     // clear out the input
//     queryTarget.val("");
//     getDataFromApi(query, displayGitHubSearchData);
//   });
// }


// Accept a user search term
function handleUserSearch(){
  $('form').submit( function(event){
    event.preventDefault();
    console.log('the button was clicked');
    const queryItem = $('.search-item').val();
    console.log(`queryItem: ${queryItem}`);
    $('.search-item').val("");
  });
}

function renderPage(){
  handleUserSearch();
}

$(renderPage());

// function getDataFromApi(searchTerm, callback) {
//   const query = {
//     q: `${searchTerm} in:name`,
//     per_page: 5
//   }
//   $.getJSON(GITHUB_SEARCH_URL, query, callback);
// }

// function renderResult(result) {
//   return `
//     <div>
//       <h2>
//       <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
//       <p>Number of watchers: <span class="js-watchers-count">${result.watchers_count}</span></p>
//       <p>Number of open issues: <span class="js-issues-count">${result.open_issues}</span></p>
//     </div>
//   `;
// }

// function displayGitHubSearchData(data) {
//   const results = data.items.map((item, index) => renderResult(item));
//   $('.js-search-results').html(results);
// }

// function watchSubmit() {
//   $('.js-search-form').submit(event => {
//     event.preventDefault();
//     const queryTarget = $(event.currentTarget).find('.js-query');
//     const query = queryTarget.val();
//     // clear out the input
//     queryTarget.val("");
//     getDataFromApi(query, displayGitHubSearchData);
//   });
// }

// $(watchSubmit);
