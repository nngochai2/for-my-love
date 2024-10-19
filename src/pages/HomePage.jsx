import React from 'react'
import Timer from '../components/Timer'
import Picture from '../assets/image_1.jpg'

const HomePage = () => {
	const anniversaryDate = new Date(2022, 5, 1);

	return (
		<div className="min-h-screen bg-pink-50 pt-16 pb-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
					<div className="md:flex">
						<div className="md:flex-shrink-0 p-4">
							<div className="rounded-2xl overflow-hidden shadow-inner border-4 border-pink-300">
								<img className="h-64 w-full object-cover md:w-64" src={Picture} alt="Anniversary" />
							</div>
						</div>
						<div className="p-8 flex-grow flex items-center justify-center">
							<Timer anniversaryDate={anniversaryDate} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage
