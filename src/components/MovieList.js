import Movie from "./Movie";

const MovieList =({movies}) => {
    const movieNodes = movies.map(movie => {
        return(
            <Movie url={movie.url} key={movie.id}>{movie.name}</Movie>
        );
    });

    return(
        <>
            <ul>{movieNodes}</ul>
        </>
    )
}

export default MovieList;