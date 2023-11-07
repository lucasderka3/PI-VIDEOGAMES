/* hooks */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

/* actions */
import { getDetailById } from "../../redux/actions";

/* styles */
import styles from './Detail.module.css'

const Detail = () => {
    const dispatch = useDispatch();
    const detail = useSelector(state=> state.gameDetail);
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getDetailById(id))
    }, [dispatch])

    

    const { name, description, released, platforms, rating, genres, image, background_image } = detail

    return(
        <div className={styles.container}>
           
            <div className={styles.description}>
                <h4>Description:</h4>
                <p>{description}</p>
            </div>
            <div className={styles.boton}>
                <Link to='/home'><button>Home</button></Link>
            </div>
            <div className={styles.info}>
                <div>
                    <img src={image || background_image} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <h4>Genres: </h4> {genres}
                    <h4>Released: {released}</h4>
                    <h4>Rating: {rating}</h4>
                    <h4>Platforms: {platforms}</h4>
                </div>
            </div>
            
            
        </div>
    )
};

export default Detail;