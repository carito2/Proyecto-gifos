export const getUrl = (apiKey, searchButton, searchInput) => {
  let url = "";
  if (searchButton && searchInput.length > 0) {
    url = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${searchInput}&limit=15&offset=0&rating=g&lang=en`;
  } else {
    url = `https://api.giphy.com/v1/gifs/trending?${apiKey}&limit=15&rating=g`;
  }
  return url;
};
