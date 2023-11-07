/* hooks */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* actions */
import { getGames } from '../../redux/actions';

/* Components render */
import Paginated from '../../components/Paginated/Paginated';
import Cards from '../../components/Cards/Cards';
import NavBar from '../../components/NavBar/NavBar';
import Filters from '../../components/Filters/Filters';

/* styles */
import './Home.module.css'


const Home = () => {
    const dispatch = useDispatch();

    const videogames = useSelector(state => state.videogames);
    const allVideogames = useSelector(state => state.allVideogames);

    const [order, setOrder] = useState('');
    const [showFilters, setShowFilters] = useState(true)

    const [actualPage, setActualPage ] = useState(1);
    const [pageGames, setPageGames] = useState(15);

    const indexFirst = (actualPage - 1) * pageGames;
    const indexLast = indexFirst + pageGames;
    const gamesActuales = videogames.slice(indexFirst, indexLast);




    const handlePaginado = (pageNumber) => {
        setActualPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])

    return(
        <section>
            <NavBar/>
            <div>
                <button onClick={() => setShowFilters(!showFilters)}>Filters</button>
                {showFilters && <Filters setActualPage={setActualPage} setOrden={setOrder}/>}
            </div>
            <Cards games={gamesActuales}/>
            <Paginated allGames={videogames.length} pageGames={pageGames} currentPage={actualPage} paginado={handlePaginado}/>
        </section>
    )
};

export default Home;