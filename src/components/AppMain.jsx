import { useGlobalContext } from '../context/GlobalContext'
import MovieCard from './MovieCard'

export default function AppMain() {
	const { lastSearch, movies } = useGlobalContext()
	return (
		<main className='container'>
			{lastSearch && <h2 className='text-white my-4'>Risultati della ricerca per: "{lastSearch}"</h2>}
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 '>
				{movies
					.filter((movie) => movie.media_type !== 'person')
					.map((movie) => (
						<div key={movie.id} className='col my-3'>
							<MovieCard movie={movie} />
						</div>
					))}
			</div>
		</main>
	)
}
