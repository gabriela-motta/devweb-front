import axios from 'axios';

export default axios.create({
  baseURL: 'https://kitso-books.herokuapp.com/'
});
