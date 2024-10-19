import React from 'react'
import Timer from '../components/Timer'
import Picture from '../assets/image_1.jpg'
import Letter from '../components/Letter';

const HomePage = () => {
	const anniversaryDate = new Date(2022, 5, 1);
	
	const letterContent = `As I reflect on our journey together, I'm filled with an overwhelming sense of joy and gratitude. Every moment with you has been a precious gift, a treasure that I hold close to my heart.

From our first meeting to this very day, our love has grown and deepened in ways I never thought possible. You've been my rock, my inspiration, and my best friend through it all.

This website is a small token of my love for you - a digital scrapbook of our memories and a promise of our future together. As you explore these pages, I hope you feel the depth of my love and the excitement I have for all the adventures that await us.`;

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
				<Letter content={letterContent} />
			</div>
		</div>
	);
}

export default HomePage
