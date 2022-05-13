import React from 'react'
const AuthContext = React.createContext({
	isLoggedIn: false,
	ontoggle: ()=>{},
	onLogout: () => {},
})
export default AuthContext
