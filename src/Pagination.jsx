import {useState} from 'react';


const Pagination = (start, end) => {
	const [startIndex, setStartIndex] = useState(start);
	const [endIndex, setEndIndex] = useState(end);

const nextPage = () => {
	setStartIndex(startIndex +2);
	setEndIndex(endIndex + 2);
};

const previousPage = () => {
	setStartIndex(startIndex -2);
	setEndIndex(endIndex - 2);
};


return ( {
	nextPage,
	previousPage,
	startIndex,
	endIndex
})
};

export default Pagination;
