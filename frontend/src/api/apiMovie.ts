import axios from "axios";
import MyMovieModel from "../model/MyMovie";

interface AxiosPostMovieResponse {
    message : string;
    createdObj : MyMovieModel;
}

const getMyMovie = async (id: number) => {
    let response = await axios.get("http://localhost:8080/api/movie/" + id);
    console.log(response.data);
    return response.data;
  };
  
  const addMovie = async (data: MyMovieModel) => {
    let response = await axios.post<AxiosPostMovieResponse>(
      "http://localhost:8080/api/movie",
      data
    );
    console.log(response.data);
    return response.data.createdObj;
  };

  const updateMovie = async () => {
      
  }

  const apiMovie = {getMyMovie, addMovie, updateMovie};

  export default apiMovie;