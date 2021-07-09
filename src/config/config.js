const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:3000'
		: 'https://jot-it-projects.herokuapp.com'

export default apiUrl
