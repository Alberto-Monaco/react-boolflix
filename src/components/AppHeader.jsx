export default function AppHeader() {
	return (
		<header className='bg-dark py-3'>
			<div className='container d-flex align-items-center justify-content-between'>
				<h1 className='mb-0 text-danger'>Boolflix</h1>

				<form className='search-bar w-50 d-flex justify-content-end'>
					<input type='text' className='form-control' placeholder='Cerca un film...' />
					<button className='btn btn-danger mx-4' type='submit'>
						Cerca
					</button>
				</form>
			</div>
		</header>
	)
}
