import SearchBar from './searchBar'
export default function AppHeader({ searchText, setSearchText, handleSearch }) {
	return (
		<header className='bg-dark py-3'>
			<div className='container d-flex align-items-center justify-content-between'>
				<a href='/'>
					<h1 className='mb-0 text-danger'>Boolflix</h1>
				</a>

				<SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
			</div>
		</header>
	)
}
