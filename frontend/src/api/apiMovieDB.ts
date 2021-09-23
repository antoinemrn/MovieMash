import axios from "axios";
import MovieDbModel from "../model/MovieDb";
import randomHelper from '../helpers/randomHelper';

const apiKey = "10a683ea241e015c2c679176060d2856";

const getAllTopRatedMovies = async () => {
    var topRatedMovies: MovieDbModel[] = [];
    for (let i = 1; i < 15; i++) {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
          apiKey +
          "&page=" +
          i
      );
      topRatedMovies.push(...response.data.results);
    }
    return topRatedMovies;
};


const getRandomMovie = async () => {
  var allMovies = await getAllTopRatedMovies();
  var idRandom = randomHelper.getRandom(0, allMovies.length); 
  return allMovies[idRandom];
}

const apiMovieDb = {getRandomMovie};

export default apiMovieDb;