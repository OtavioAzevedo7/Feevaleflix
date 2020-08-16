const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:1234/'
  : 'https://feevaleflix.herokuapp.com/';

export default {
  URL_BACKEND,
};
