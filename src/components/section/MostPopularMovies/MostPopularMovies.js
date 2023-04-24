import React from "react";
import "./MostPopularMovies.css";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const MostPopularMovies = ({ data }) => {
  //console.log("mostPopularMovies", data);
  const screens = useBreakpoint();
  return (
    <div>
      <div className="popular-movies-grid">
        <h1 className="popular-movies">Most Popular Movies</h1>
        <h1 className="view-all">View All</h1>
        <div className="image-container">
          {data.map((list, i) => (
            <div key={i} className={screens.xs ? "col-6" : "col-md-4"}>
              <div className="box">
                <img src={list.img} alt="" className="picture-style" />
                <h1 className="grid-title">{list.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularMovies;
