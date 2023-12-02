import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/home.css";
import {useNavigate} from "react-router-dom";

const Home = () => {
  let API_KEY = "693aa735";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortFlag, setSortFlag] = useState(false);
  const [filterFlag, setFilterFlag] = useState(false);
  const [filter, setFilter] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const nav=useNavigate();
  // year, rating

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&y=${year}`);
        console.log(setData(res.data.Search));
    } catch (error) {
      console.log(error)

        }   
   
  };   

  

  useEffect(() => {
    if(!localStorage.getItem("token")){
      nav("/login");
    }
    setYear("");
    handleSearch();
  }, [search]);

  return (
    <div id="main">
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
          onClick={()=>{
            setYear("");
          }}
        >
          Sort
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row gy-2 gx-3 align-items-center">
                  <div className="col-auto">
                    <input
                    type="text"
                    value={year}
                    className="form-control"
                    id="autoSizingInput"
                    placeholder="Year..."
                    onChange={(e)=>{
                      setYear(e.target.value)
                    }}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={()=>{
            setYear("");
          }}
        >
          Filter
        </button>

        
      </div>
      <div id="display">
        {data?.map((elem) => {
          console.log(elem);
          return (
            <div id="card" onClick={()=>{
              nav(`/movie/${elem.imdbID}`)
            }}>
              <div className="card" style={{ width: "18rem" }}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
