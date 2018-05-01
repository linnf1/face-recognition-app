import React from 'react';


const FaceRecogntion = ({ box, imageurl }) => {
	return(
		<div className='center ma'>
		<div className='absolute mt2'>
		<img id='inputimage' src={imageurl} alt='faces' width='800px' height='auto'/>
		<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		</div>
		</div>
		);
}

export default FaceRecogntion;