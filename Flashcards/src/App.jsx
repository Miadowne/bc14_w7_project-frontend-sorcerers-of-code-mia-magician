import './App.css';
// import * as React from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
	const navigate = useNavigate();
	const handleClick = () => navigate('/quizzes');
	const handleCssClick = () => navigate('/CSS');
	const handleJsClick = () => navigate('/JS');
	const handleReactClick = () => navigate('/React');

	return (
		<>
			<img
				src='./src/assets/logo.jpg'
				alt='SoC company logo'
				width={400}
				height={400}
			/>
			<h1>Welcome to CodeCards</h1>
			<button type='button' onClick={handleClick}>
				Quizzes
			</button>
			<button type='button' onClick={handleCssClick}>
				CSS
			</button>
			<button type='button' onClick={handleJsClick}>
				JavaScript
			</button>
			<button type='button' onClick={handleReactClick}>
				React
			</button>
		</>
	);
}

export default App;
