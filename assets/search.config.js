SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  // searchResultTemplate: '<li><a href="{url}"><p>{title}</p></a></li>',
  searchResultTemplate: '<li><a href="{url}"><p><option>{title}</option></p></a></li>',
  noResultsText: 'No results found' 
})
