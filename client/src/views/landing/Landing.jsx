import { Link } from "react-router-dom";

import styles from './Landing.module.css'

const Landing = () => {
    return(
        <div className={styles.container}>
            <h1>VIDEOGAMES</h1>
            <Link to='/home'>
                <button>HOME</button>
            </Link>
        </div>
    )
};

export default Landing;