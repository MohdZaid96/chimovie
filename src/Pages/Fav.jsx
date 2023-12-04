import React, { useState } from 'react'
import "../Styles/home.css";
import {useNavigate} from "react-router-dom";


const Fav = () => {
    const [data,setData]=useState( JSON.parse(localStorage.getItem("fav")) || [])
    const nav=useNavigate();

    const handleFav=(id)=>{
        const arr=data.filter((ele)=> ele.imdbID != id )
        setData(arr);
    }

  return (
    <div id="display">
        {data?.map((elem) => {
          console.log(elem);
          return (
            <div
              id="card"
            >
              <div className="card" style={{ width: "18rem" }}>
                <div onClick={() => {
                  nav(`/movie/${elem.imdbID}`);
                }}>
                <img
                  className="card-img-top"
                  src={elem.Poster}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{elem.Title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{elem.Type}</li>
                  <li className="list-group-item">{elem.Year}</li>
                </ul>
                </div>
                <button onClick={()=>handleFav(elem.imdbID)}>Remove from Wishlist</button>
              </div>
            </div>
          );
        })}
      </div>

    
  )
}

export default Fav