import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {
	const [searchText, setSearchText] = useState('')
	const [movies, setMovies] = useState([])

	const handleSearch = () => {
		const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=7ca648ffa788e60656d044fa86345f4b&query=${searchText}`

		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.results)
				setMovies(data.results)
				setSearchText('')
			})
	}

	return (
		<>
			<AppHeader searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
			<AppMain />
		</>
	)
}

export default App
