function Search({ search, setSearch ,handleSearch}) {
    return (
        <div className="search">
            <input
                type="text"
                className="inpt-search"
                placeholder="Enter your City"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search