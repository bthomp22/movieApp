// ThinkDive API and endpoint info
const API_KEY_TASTEDIVE = "324120-Apiproje-NL0U2BT5";
const ENDPOINT_TASTEDIVE = "https://tastedive.com/api/similar";




function getDataTasteDiveAPI(searchTerm,callback) {
  const settings{
     url: ENDPOINT_TASTEDIVE,
     data: {
       k: API_KEY_TASTEDIVE,
       q: searchTerm,
       info: 1,
     },

     dataType: 'json',
    type: 'GET',
    success: callback    

  };
  $ajax(settings);
}
function getResultHtml(result) {
  console.log('displayResult', result);
  return `
    <div>
      <h2></h2>
    </div> 
  `;
}
 const searchResults = data.items.map((item, index) => getResultHtml(item));
 console.log('displayYoutubeSearchResults', searchResults);
 $('.js-search-results').html(searchResults).prop('hidden', false);
  
 

function watchSubmit() {
  $(".js-search-form").on("submit", function (event) {
    event.preventDefault();
    
    let queryTarget = $(this).find(".js-query"); // input field
    let queryTerm = queryTarget.val(); // get the search term
    
    queryTarget.val(""); // empty search field

    getDataTasteDiveAPI(queryTerm); // function call
    displaySearchResults();
  });
}

$(watchSubmit);

