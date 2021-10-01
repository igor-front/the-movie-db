import React, {useEffect, useState} from 'react';
import FilmList from "./Favourite/FilmList";
import  './index.css'
const TvShows = () => {
const [FavouriteFilms, setFavouriteFilms] = useState(null);
const [isLoaded, setLoaded] = useState(false);
	useEffect( ()=> {
		 fetch('http://www.omdbapi.com/?s=friends&apikey=d9cbe012&')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setFavouriteFilms([...data.Search]);
				setLoaded(true);
			});

	}, []);



	return (
		<main className='favourite'>
			<div className="container">
				<h1>TV SHOWS</h1>
				{isLoaded ? <FilmList FavouriteFilms={FavouriteFilms}/> : <h2>Skeleton</h2>}
			</div>
		</main>
	);
};

export default TvShows;
