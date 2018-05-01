import React from 'react';



const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
			<div>
					<p className='f3 tc'> 
					{'This Magic Brain will detect faces in your pictures.'}
					</p>
				<div className='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
					<button className='w-30 grow f4 ph3 pv2 white bg-gray' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}


export default ImageLinkForm;