import { createContext, useState, useContext } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
	const [searchText, setSearchText] = useState('')
	const [movies, setMovies] = useState([])
	const [lastSearch, setLastSearch] = useState('')
	const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=7ca648ffa788e60656d044fa86345f4b&query=${searchText}`

	function handleSubmit(e) {
		e.preventDefault()
		setLastSearch(searchText)

		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results)
				setSearchText('')
			})
	}

	const value = {
		searchText,
		setSearchText,
		movies,
		setMovies,
		handleSubmit,
		lastSearch
	}

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

function useGlobalContext() {
	return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
