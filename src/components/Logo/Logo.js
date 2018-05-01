import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import B1 from './b3.png';

const Logo = () => {
	return(
		<div className='ma2 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner pa3 tc"><img src={B1} alt='brain'/></div>
		</Tilt>
		</div>
		)
}

export default Logo;