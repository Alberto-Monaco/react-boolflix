export default function AppMain({ movies }) {
	return (
		<main className='container'>
			<div className='column '>
				{movies.map((movie) => (
					<div key={movie.id} className='col m-3'>
						<div className='card bg-dark text-white'>
							<div className='p-3 card-title '>
								<h3 className='text-danger'>{movie.title}</h3>
							</div>
							<div className='card-body'>
								<p>Titolo originale: {movie.original_title}</p>
								<p>Voto: {movie.vote_average}</p>
								<p>Lingua originale: {movie.original_language}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}
