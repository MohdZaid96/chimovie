import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/singlePage.css";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";


const SinglePage = () => {
  let API_KEY = "693aa735";

  const [data, setData] = useState({});
  const {imdbID}=useParams();
  const nav=useNavigate();


  const handledata = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
        console.log(setData(res.data));
    } catch (error) {
      console.log(error)

        }   
   
  };  
  
  useEffect(() => {  
    if(!localStorage.getItem("token")){
      nav("/login");
    }
    handledata();
  }, []);

  return (
    <div id="main">{data.Title}
        <div id="image">
          <img src={data.Poster} alt="Poster"/>        
        </div>
        <div id="details">
          <h1>Title➪{data.Title}</h1>
          <h3>Type➪{data.Type}</h3>
          <h3>Year➪{data.Year}</h3>
          <h5>imdbRating➪{data.imdbRating}</h5>
          <h5>BoxOffice➪{data.BoxOffice}</h5>
          <h6>Awards➪{data.Awards}</h6>

        </div>
    </div>
  )
}

export default SinglePage