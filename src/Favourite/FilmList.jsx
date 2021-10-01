import React from 'react';
import FilmItem from "./FilmItem";
import Pagination from "../Pagination";
import '../index.css'


const FilmList = (props) => {
	const pagination = Pagination(0,2);

	const PaginatedFilms = props.FavouriteFilms.slice(pagination.startIndex,pagination.endIndex);

	return (
		<>
				<ul className="favourite__list">
					{PaginatedFilms.map(e => (<FilmItem key={e.Title} title={e.Title} poster={e.Poster} />))}
				</ul>
			<div className='btns'>
				<button onClick={() => pagination.startIndex !== 0 ? pagination.previousPage() : false}>Previous</button>
				<button onClick={() => pagination.endIndex !== props.FavouriteFilms.length ? pagination.nextPage() : false}>Next</button>
			</div>
</>
	);
};

export default FilmList;
