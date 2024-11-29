import SearchBar from './SearchBar'
export default function AppHeader() {
	return (
		<header className='bg-dark py-3'>
			<div className='container d-flex align-items-center justify-content-between'>
				<a href='/'>
					<h1 className='mb-0 text-danger'>Boolflix</h1>
				</a>

				<SearchBar />
			</div>
		</header>
	)
}
