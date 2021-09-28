import React from 'react';
import '../index.css'
const FilmItem = (props) => {

	return (
					<li className='favourite__item'>
            <div className='film '>
            <img className='mb-20' alt='imag' src={props.poster}/>
							<h3 className='mb-20'>{props.title}</h3>
            <button className='film-info'>Show</button>
            </div>
					</li>


	);
};

export default FilmItem;
