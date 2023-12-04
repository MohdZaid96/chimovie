import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/home.css";
import { json, useNavigate } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const BASE_URL=process.env.BASE_URL;
  const API_KEY=process.env.API_KEY;
  
  const [year, setYear] = useState("");
  const [flags, setFlags] = useState(false);
  const [flagf, setFlagf] = useState(false);
  const nav = useNavigate();
  // year, rating

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}${API_KEY}&s=${search}&y=${year}`
      );
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFav=(ele)=>{ 
    const arr=JSON.parse(localStorage.getItem("fav")) || [];
    arr.push(ele);
    localStorage.setItem("fav",JSON.stringify(arr));
    
  }
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    }
    setYear("");
    handleSearch();
  }, [search]);

  return (
    <div id="main_home">
      <div id="func">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setFlagf(false);

            setYear("");
            setFlags(true);

          }}
        >
          Sort
        </button>

        {flags &&<div>
          
          <input type="text" value={year} placeholder="Year..." onChange={(e)=>{
            setYear(e.target.value);
            handleSearch();
          }}/>
         \  </div>}

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setFlags(false)
            setYear("");
            setFlagf(true);
          }}
        >
          Filter
        </button>
        {flagf &&<div>
          
          <input type="text" value={year} placeholder="Year..." onChange={(e)=>{
            setYear(e.target.value);
          }}/>
        </div>}

      </div>
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
                <button onClick={()=>handleFav(elem)}>Add to Wishlist</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
