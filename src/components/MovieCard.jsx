import languageToFlag from '../db/languageFlags'
import Stars from './Stars'

export default function MovieCard({ movie }) {
	function getFlag(languageCode) {
		return languageToFlag[languageCode] || 'unknown'
	}

	return (
		<div
			className='card bg-dark text-white'
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`
			}}>
			<div className='p-3 card-title'>
				<h4 className='text-danger'>{movie.title || movie.name}</h4>
				<p className='text-warning'>
					{movie.media_type === 'tv' ? 'Serie TV' : movie.media_type === 'movie' ? 'Film' : movie.media_type}
				</p>
			</div>
			<div className='card-body'>
				<p>
					<strong>Titolo originale:</strong> {movie.original_title || movie.original_name}
				</p>
				<p>
					Voto:{' '}
					<span style={{ color: 'gold' }}>
						<Stars vote_average={movie.vote_average} />
					</span>
				</p>
				<p>
					<strong>Lingua originale:</strong>
					{getFlag(movie.original_language) === 'unknown' ? (
						` non trovata nazionalità`
					) : (
						<img
							className='mx-2 flag-icon'
							src={`https://flagcdn.com/w20/${getFlag(movie.original_language)}.png`}
							alt={movie.original_language}
						/>
					)}
				</p>
				<p>
					<strong>Overview:</strong> {movie.overview}
				</p>
			</div>
		</div>
	)
}
