import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {
	const [searchText, setSearchText] = useState('')
	const [movies, setMovies] = useState([])

	return (
		<>
			<AppHeader searchText={searchText} setSearchText={setSearchText} />
			<AppMain />
		</>
	)
}

export default App
