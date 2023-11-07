import SearchBar from "../SearchBar/SearchBar";

import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav className={styles.container}>
            <SearchBar/>
        </nav>
    )
};

export default NavBar;