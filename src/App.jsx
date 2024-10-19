import React from 'react'
import { Route, Router, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
  	)
}

export default App
