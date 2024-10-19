import React, { useState } from 'react'

const Timer = () => {
	const [timePassed, setTimePassed] = useState({ years: 0, months: 0, days: 0})
	const anniversaryDate = new Date(2022, 5, 1)

	useEffect(() => {
		const updateTimer = () => {
			const now = new Date();
			const difference = now.getTime() - anniversaryDate.getTime();

			const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
			const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
			const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

			setTimePassed({ years, months, days });
		};

		updateTimer();
		const timer = setInterval(updateTimer, 1000 * 60 * 60); // Update every hour

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold mb-4">Our Anniversary</h2>
			<div className="text-4xl font-bold mb-4">
				{timePassed.years} years, {timePassed.months} months, {timePassed.days} days
			</div>
			<p className="text-lg">Every moment with you is a gift.</p>
		</div>
	)
}

export default Timer
