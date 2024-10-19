import React from 'react';

const Navbar = () => {
	return (
		<nav className="bg-pink-400 fixed top-0 left-0 right-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<a href="#home" className="text-white font-bold text-xl">Our Story</a>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<a href="#home" className="text-white hover:bg-pink-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
							<a href="#memories" className="text-white hover:bg-pink-500 px-3 py-2 rounded-md text-sm font-medium">Memories</a>
							<a href="#future" className="text-white hover:bg-pink-500 px-3 py-2 rounded-md text-sm font-medium">Our Future</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;