import MovieDbModel from "./MovieDb";

class MyMovieModel{

    id : number;
    title : string;
    movieId: number;
    poster_path : string;
    elo: number;
    nbGames: number;

    public constructor();
    public constructor(movieDb : MovieDbModel);
    public constructor(movieDb? : MovieDbModel){
        this.id = -1;
        this.title = (movieDb && movieDb.title) || "";
        this.movieId = (movieDb && movieDb.id) || -1;
        this.poster_path = (movieDb && movieDb.poster_path) ||"";
        this.elo = 0;
        this.nbGames = 0;
    };

    
}

export default MyMovieModel;