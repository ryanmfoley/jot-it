const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://safe-cove-91567.herokuapp.com/projects'

export default apiUrl
