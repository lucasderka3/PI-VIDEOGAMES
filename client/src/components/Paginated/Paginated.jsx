
const Paginated = ({ allGames, pageGames, currentPage, paginado }) => {
    const totalPages = Math.ceil(allGames / pageGames);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            paginado(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            paginado(currentPage + 1);
        }
    };


    const pagesArray = [...Array(totalPages).keys()].map((i) => i + 1);

    return (
        <nav>
            <ul>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {pagesArray.map((i) => (
                    <button key={i} onClick={() => paginado(i)}>
                        {i}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </ul>
        </nav>
    );
};

export default Paginated;