export default function Stars({ vote_average }) {
	const voteBaseFive = Math.ceil(vote_average / 2)
	const stars = '★'.repeat(voteBaseFive) + '☆'.repeat(5 - voteBaseFive)
	return stars
}
