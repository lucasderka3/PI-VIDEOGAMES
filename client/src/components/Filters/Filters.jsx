/* hooks */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* actions */
import { getGames, getGenres, orderByName, orderByRating, filterGenres, filterCreated } from "../../redux/actions";


/* component Filter */

const Filters = ({setActualPage, setOrden}) => {
    const dispatch = useDispatch();
    const genres = useSelector(state=>state.allGenres);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    /* A - Z order */
    const handleSort = (event) => {
        event.preventDefault();
        event.target.value === 'all'
                ? dispatch(orderByName) && setOrden(`ABC ${event.target.value}`)
                : dispatch(orderByName(event.target.value));
            setOrden(`ABC ${event.target.value}`);
            setActualPage(1);
    }

    /* RATING order */
    const handleRating = (event) => {
        event.preventDefault();
        event.target.value === 'all'
                ? dispatch(getGames) && setOrden(`Rating ${event.target.value}`)
                : dispatch(orderByRating(event.target.value));
            setOrden(`Rating ${event.target.value}`);
            setActualPage(1);
    }

    /* GENRES order */
    const handleGenres = (event) => {
        event.preventDefault();
        dispatch(filterGenres(event.target.value));
        setOrden(event.target.value);
        setActualPage(1);
    }

    /* Filter Created */
    const handleFilterCreated = (event) =>{
        event.preventDefault();
        dispatch(filterCreated(event.target.value));
        setActualPage(1);
    }

    /* RESET */
    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getGames());
    }



    return(
        <div>
            <button onClick={(e) => handleClick(e)}>
                Reset Filters
            </button>
            <select onChange={(e) => handleSort(e)}>
                <option>Sort by name</option>
                <option value="A-Z">A to Z</option>
                <option value="Z-A">Z to A</option>
            </select>
            <select onChange={(e) => handleRating(e)}>
                <option>Rating</option>
                <option value="L-H">Low</option>
                <option value="H-L">High</option>
            </select>
            <select onChange={(e) => handleGenres(e)}>
                <option>Genres</option>
                {genres.map((g) => {
                    return(
                        <option key={g.id} value={g.name}>
                            {g.name}
                        </option>
                    )
                })}
            </select>
            <select onChange={(e) => handleFilterCreated(e)}>
                <option>Storage</option>
                <option value="lb">Library</option>
                <option value="db">Created in DB</option>
            </select>
        </div>
    )
}

export default Filters;