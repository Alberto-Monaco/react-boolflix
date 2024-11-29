import { useGlobalContext } from '../context/GlobalContext'
import MovieCard from './MovieCard'

export default function AppMain() {
	const { movies } = useGlobalContext()
	return (
		<main className='container'>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
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
