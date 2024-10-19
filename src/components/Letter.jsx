import React from 'react';

const Letter = ({ content }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto my-8 border-2 border-pink-200">
			<div className="font-handwriting text-gray-800 leading-relaxed">
				<p className="mb-4">Gửi người yêu anh,</p>
				{content.split('\n').map((paragraph, index) => (
					<p key={index} className="mb-4">{paragraph}</p>
				))}
				<p className="mt-6 text-right">Yêu em nhiều,</p>
				<p className="text-right">Hải Pro</p>
			</div>
		</div>
	);
};

export default Letter;