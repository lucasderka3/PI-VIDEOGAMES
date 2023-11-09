/* hooks */
import { Link } from "react-router-dom";

/* component */
import SearchBar from "../SearchBar/SearchBar";

/* styles */
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav className={styles.container}>
            <SearchBar/>
            <Link to='/create'><button className={styles.bott}>Create a game</button></Link>
        </nav>
    )
};

export default NavBar;