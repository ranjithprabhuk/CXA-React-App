
const env = process.env.NODE_ENV || 'development';

const apiEnvironment = {
  development: {
    api: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=12aaca691f3effb2e4ec52478e110197&format=json&nojsoncallback=1'
  },
  production: {
    api: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=12aaca691f3effb2e4ec52478e110197&format=json&nojsoncallback=1'
  }
};

export default apiEnvironment[env];
