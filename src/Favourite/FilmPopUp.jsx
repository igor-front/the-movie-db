import React from 'react';
import '../index.css'
const FilmPopUp = (props) => {

	return (
		<>
		<div className="popup__wrapper" >
				<div className='popup' >
					<div className='film'>
						<div className='film__left'>
							<img className='mb-20' alt='imag' src={props.film.Poster}/>
						</div>
						<div className="film__right">
							<h3 className='mb-20'>{props.film.Title}</h3>
							<h3 className='mb-20'>{props.film.Year}</h3>
							<h3 className='mb-20'>{props.film.Released}</h3>
							<h3 className='mb-20'>{props.film.Plot}</h3>
						</div>
						<button onClick={() => props.close()}>close</button>

					</div>
				</div>


		</div>
</>



	)
};

export default FilmPopUp;
