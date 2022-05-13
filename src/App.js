import React, { useState, useEffect } from 'react'
import  './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true) 
	const[switchCard,setSwitchCard]=useState(false)
	function togglePage(){
		setSwitchCard((el)=>!el)
	}
	useEffect(() => {
		const storedUserLoggedInfo = localStorage.getItem('isLoggedIn') 
		console.log(storedUserLoggedInfo);
		if (storedUserLoggedInfo === '1') {
			
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = async (email, password) => {
		localStorage.setItem('isLoggedIn', '1') 
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {

		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	return (
		<div className={ switchCard ? 'con' : ''}>
		<div className='wrapp'>
			<AuthContext.Provider value={{isLoggedIn: isLoggedIn,
				switchCard:switchCard,
				Toggle: togglePage,
				onLogout: logoutHandler,}}>
				<MainHeader/>
				<main>
					{!isLoggedIn && <Login onLogin={loginHandler} />}

					{isLoggedIn && <Home />}
				</main>
			</AuthContext.Provider>
		</div>
		</div>
	)
	
}

export default App
