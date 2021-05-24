const Movie = ({url, children}) => {
    return(
        <>
           <li> <a href={url}>{children}</a></li> 
        </>
    )
    
}

export default Movie;