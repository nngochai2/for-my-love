import React, { useState, useEffect } from 'react';

const Timer = ({ anniversaryDate }) => {
	const [timePassed, setTimePassed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
	const [error, setError] = useState(null);

	useEffect(() => {
		const updateTimer = () => {
			try {
				if (!(anniversaryDate instanceof Date) || isNaN(anniversaryDate)) {
					throw new Error('Invalid anniversary date');
				}

				const now = new Date();
				const difference = now.getTime() - anniversaryDate.getTime();

				if (difference < 0) {
					throw new Error('Anniversary date is in the future');
				}

				const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
				const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
				const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimePassed({ years, months, days, hours, minutes, seconds });
				setError(null);
			} catch (err) {
				setError(err.message);
			}
		};

		updateTimer();
		const timer = setInterval(updateTimer, 1000);

		return () => clearInterval(timer);
	}, [anniversaryDate]);

	if (error) {
		return <div className="text-red-500 text-center">{error}</div>;
	}

	return (
		<div className="text-center flex flex-col items-center justify-center h-full">
			<h2 className="text-2xl font-bold mb-4">Our Anniversary</h2>
			<div className="text-4xl font-bold mb-4 flex flex-col items-center">
				<div>{timePassed.years} years, {timePassed.months} months, {timePassed.days} days</div>
				<div className="text-2xl mt-2">
					{timePassed.hours.toString().padStart(2, '0')}:
					{timePassed.minutes.toString().padStart(2, '0')}:
					{timePassed.seconds.toString().padStart(2, '0')}
				</div>
			</div>
			<p className="text-lg">Every moment with you is a gift.</p>
		</div>
	);
};

export default Timer;