import MovieView from "../movie_view";

export default function Movie({ params }: any) {
	return <>
		<MovieView params={params} />
	</>
}