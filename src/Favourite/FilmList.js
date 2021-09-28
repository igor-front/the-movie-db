import React from 'react';
import FilmItem from "./FilmItem";
import '../index.css'
const FilmList = (props) => {


	return (
				<ul className="favourite__list">
					{props.FavouriteFilms.map(e => (<FilmItem key={e.Title} title={e.Title} poster={e.Poster} />))}
				</ul>
	);
};

export default FilmList;
