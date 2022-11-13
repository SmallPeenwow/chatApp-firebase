import Register from './pages/Register';
import './style.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
	const { currentUser } = useContext(AuthContext);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
