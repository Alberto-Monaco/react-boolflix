import languageToFlag from '../db/languageFlags'
export default function AppMain({ movies }) {
	function getFlag(languageCode) {
		return languageToFlag[languageCode] || 'unknown'
	}

	return (
		<main className='container'>
			<div className='column'>
				{movies.map((movie) => (
					<div key={movie.id} className='col m-3'>
						<div className='card bg-dark text-white'>
							<div className='p-3 card-title'>
								<h3 className='text-danger'>{movie.title || movie.name}</h3>
							</div>
							<div className='card-body'>
								<p>Titolo originale: {movie.original_title || movie.original_name}</p>
								<p>Voto: {movie.vote_average}</p>
								<p>
									Lingua originale:
									{getFlag(movie.original_language) === 'unknown' ? (
										` ${movie.original_language} (non trovata nazionalità)`
									) : (
										<img
											className='mx-2 flag-icon'
											src={`https://flagcdn.com/w20/${getFlag(movie.original_language)}.png`}
											alt={movie.original_language}
										/>
									)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}
