import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';

const Navbar = () => {
	return (
		<div className='navbar'>
			<span className='logo'>Peen Chat</span>
			<div className='user'>
				<img src='' alt='' />
				<span>Peen</span>
				<button onClick={() => signOut(auth)}>logout</button>
			</div>
		</div>
	);
};

export default Navbar;
