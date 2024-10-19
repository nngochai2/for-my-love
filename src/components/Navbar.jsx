import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full bg-pink-400 fixed top-0 z-10 shadow-lg text-white font-semibold">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<Link to="/" className="text-xl font-bold">
							Our Story
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-4">
							<Link to="/" className="hover:bg-pink-500 px-3 py-2 rounded-md">Home</Link>
							<Link to="/memories" className="hover:bg-pink-500 px-3 py-2 rounded-md">Memories</Link>
							<Link to="/future" className="hover:bg-pink-500 px-3 py-2 rounded-md">Our Future</Link>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-400 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link to="/" className="hover:bg-pink-500 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
						<Link to="/memories" className="hover:bg-pink-500 block px-3 py-2 rounded-md text-base font-medium">Memories</Link>
						<Link to="/future" className="hover:bg-pink-500 block px-3 py-2 rounded-md text-base font-medium">Our Future</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;