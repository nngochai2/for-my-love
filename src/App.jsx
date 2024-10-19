import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Events from './pages/Events'

const App = () => {
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
