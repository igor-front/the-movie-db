import React, {useState} from 'react';
import '../index.css'
import FilmPopUp from "./FilmPopUp";
const FilmItem = (props) => {
	const [filmPopUp, setFilmPopUp] = useState(null);

const closePopUp = () => {
	setFilmPopUp(null);
};
	const showPopUp = (init) => {
		fetch(`http://www.omdbapi.com/?t=${init}&apikey=d9cbe012&`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setFilmPopUp(data);
				console.log(data)
			});
	};


	return (
			<>
					<li className='favourite__item'>
            <div className='film '>
            <img className='mb-20' alt='imag' src={props.poster}/>
							<h3 className='mb-20'>{props.title}</h3>
            <button onClick={() => showPopUp(props.title)} className='film-info'>Show info</button>
            </div>
					</li>
				{filmPopUp && <FilmPopUp film={filmPopUp} close={closePopUp} />}
			</>

	);
};

export default FilmItem;
