export default function AppHeader({ searchText, setSearchText }) {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(searchText)
		// Qui dopo gestiremo la chiamata API
	}

	return (
		<header className='bg-dark py-3'>
			<div className='container d-flex align-items-center justify-content-between'>
				<h1 className='mb-0 text-danger'>Boolflix</h1>

				<form htmlFor='search-text' className='search-bar w-50 d-flex justify-content-end ' onSubmit={handleSubmit}>
					<input
						id='search-text'
						name='search-text'
						type='text'
						className='form-control'
						placeholder='Cerca un film...'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button className='btn btn-danger mx-4' type='submit'>
						Cerca
					</button>
				</form>
			</div>
		</header>
	)
}
