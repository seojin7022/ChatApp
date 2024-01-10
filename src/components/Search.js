import styles from "./Search.module.css";

function Search() {
    return (
        <div className="search">
            <div className={styles.searchFrame}>
                <img src="Search.svg" alt="Search" />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Search;