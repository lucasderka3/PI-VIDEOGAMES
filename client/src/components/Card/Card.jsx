/* hooks */
import { Link } from 'react-router-dom';

/* styles */
import styles from './Card.module.css';

const Card = ({id, name, background_image, rating, genres}) => {

    return(
        <Link to={`/detail/${id}`}>
            <div className={styles.container}>
                <img src={background_image} alt="" />
                <h2>{name}</h2>
                {/* <p>{genres.join(' | ')}</p> */}
            </div>
        </Link>
    )
}

export default Card;