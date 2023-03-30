import React from 'react';

const SingleCart = ({ movie,handleWatchTime }) => {
    // console.log(movie)
    return (
        <div>
            <div className="movie-cart card text-center w-100 m-auto col-md-6">
                <div className="movie-poster">
                    <img className='w-75' src={movie.poster} alt="" />
                </div>
                <h3>{movie.movieName}</h3>
                <p>{movie.description}</p>
                <div className="timeAndRating d-flex justify-content-between">
                    <p>watch time: {movie.watchTime}</p>
                    <p>rating: {movie.imdbRating}</p>
                </div>
                <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCart;