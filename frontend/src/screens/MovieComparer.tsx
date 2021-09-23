import React, { useState, useEffect } from "react";
import { Movie } from "../components/Movie";
import MyMovieModel from "../model/MyMovie";
import styled from "styled-components";
import apiMovieDb from '../api/apiMovieDB';
import apiMovie from '../api/apiMovie';


const getMyRandomMovie = async () => {
  var randomMovie = await apiMovieDb.getRandomMovie();
  var res : MyMovieModel = new MyMovieModel();
  var myMovie = await apiMovie.getMyMovie(randomMovie.id);
      if (!myMovie) {
        const newMovie = await apiMovie.addMovie(new MyMovieModel(randomMovie));
        res = { ...newMovie, poster_path: randomMovie.poster_path };
      } else {
        res = { ...myMovie, poster_path: randomMovie.poster_path };
      }
  return res;
}



export const MovieComparer = () => {
  
  const [movie1, setmovie1] = useState<MyMovieModel>(new MyMovieModel());
  const [movie2, setmovie2] = useState<MyMovieModel>(new MyMovieModel());

  const updateBothMovies = async () => {
    let firstMovie = await getMyRandomMovie();
    let secondMovie = await getMyRandomMovie();
    setmovie1(firstMovie);      
    setmovie2(secondMovie);
  }

  useEffect(() => {
    const getTwoRandomMovie = async () => {
      updateBothMovies();
    };
    getTwoRandomMovie();
  }, []);

  return (
    <Container>
      {movie1 && <Movie movie={movie1} />}
      <div>vs</div>
      {movie2 && <Movie movie={movie2} />}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 20% 0 20%;
`;
