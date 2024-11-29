import languageToFlag from '../db/languageFlags'

export default function MovieCard({ movie }) {
	function getFlag(languageCode) {
		return languageToFlag[languageCode] || 'unknown'
	}
	function getVoteBaseFive(voteAverage) {
		return Math.ceil(voteAverage / 2)
	}
	function Stars(vote_average) {
		const stars = '★'.repeat(vote_average) + '☆'.repeat(5 - vote_average)
		return stars
	}
	return (
		<div
			className='card bg-dark text-white'
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`
			}}>
			<div className='p-3 card-title'>
				<h3 className='text-danger'>{movie.title || movie.name}</h3>
				<p className='text-warning'>
					{movie.media_type === 'tv' ? 'Serie TV' : movie.media_type === 'movie' ? 'Film' : movie.media_type}
				</p>
			</div>
			<div className='card-body'>
				<p>Titolo originale: {movie.original_title || movie.original_name}</p>
				<p>
					Voto: <span style={{ color: 'gold' }}>{Stars(getVoteBaseFive(movie.vote_average))}</span>
				</p>
				<p>
					Lingua originale:
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
			</div>
		</div>
	)
}
