console.log('Is this live!');

const state = {
  currentPage: 1,
  lastPageReached: false
};

const showImages = function (results) {
  // NESTED AKA HELPER FUNCTION returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // _q gives us a thumbnail size. See docs for other sizes.
    ].join('');
  };

  console.log('Results', results);

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

const searchFlickr = function (term) {

  console.log(`Searching Flickr for ${term}`);

  if (state.lastPageReached) return;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  state.requestInProgress = true;

  $.getJSON(flickrURL, {
    // Via Flickr docs:
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: state.currentPage++
  }).done(showImages).done(function (results) {
    if (results.photos.page >= results.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    $('#images').empty();
    state.currentPage = 1;
    lastPageReached = false;
    const query = $('#query').val();
    searchFlickr(query);

  });

  // EXTREMELY TWITCHY.
  const debouncedSearchFlicker = _.debounce(searchFlickr, 6000, {trailing: false});
  $(window).on('scroll', function() {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


    if (scrollBottom <= 500) {
      const query = $('#query').val(); // There are better ways to do this.
      debouncedSearchFlicker(query);
    }
  });
});
