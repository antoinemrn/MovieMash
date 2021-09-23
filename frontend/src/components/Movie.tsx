import React from "react";
import styled from "styled-components";
import MyMovieModel from "../model/MyMovie";

const imgUrl = "https://image.tmdb.org/t/p/original/";

interface MovieProps {
  movie: MyMovieModel;
}

export const Movie = ({ movie }: MovieProps) => {
  return (
    <Container>
          <Overlay className="overlay" />
          <Image src={imgUrl + movie.poster_path} alt="poster" />
          <Title>
            {movie.title} - {movie.elo}
          </Title>    
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  background: rgba(255, 255, 255);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 40px #5c5353;
    & > .overlay {
      background-color: transparent;
    }
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #00000030;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255);
`;
const LoadingDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #00000030;  
`;
