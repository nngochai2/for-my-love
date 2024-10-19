import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Events from './pages/Events'
import confetti from 'canvas-confetti'

const App = () => {
	useEffect(() => {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);

			confetti(Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			}));
			confetti(Object.assign({}, defaults, {
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			}));
		}, 250);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/events' element={<Events />} />
			</Routes>
		</div>
  	)
}

export default App
