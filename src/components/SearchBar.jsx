export default function SearchBar({ searchText, setSearchText, handleSearch }) {
	function handleSubmit(e) {
		e.preventDefault()
		handleSearch()
	}

	return (
		<form htmlFor='search-text' className='search-bar w-50 d-flex justify-content-end ' onSubmit={handleSubmit}>
			<input
				id='search-text'
				name='search-text'
				type='search'
				className='form-control'
				placeholder='🔍Cerca un film o una serie TV...'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button className='btn btn-danger mx-4' type='submit'>
				Cerca
			</button>
		</form>
	)
}
