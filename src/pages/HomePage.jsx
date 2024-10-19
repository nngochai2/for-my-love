import React from 'react'
import Timer from '../components/Timer'

const HomePage = () => {
	return (
		<div className="min-h-screen bg-pink-50 pt-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="md:flex">
						<div className="md:flex-shrink-0">
							<img className="h-48 w-full object-cover md:w-48" src="/api/placeholder/400/400" alt="Anniversary" />
						</div>
						<div className="p-8">
							<Timer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage
