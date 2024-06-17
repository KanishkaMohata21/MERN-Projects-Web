import React, { useState } from 'react';
import { useSearch } from './Context/SearchContext';
import { useCategory } from './Context/CategoryContext';

const Navbar = () => {
    const { search, setSearch } = useSearch();
    const { category, setCategory } = useCategory(); // Use useCategory hook to get category state

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory); // Update selected category
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your search functionality here
        console.log("Searching for:", search, " in category:", category);
        // Optionally, you can reset search state after submission
        setSearch(''); // Resetting the search state after form submission
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">KNews</a>

                {/* Navbar toggler button for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar items and form */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {category || "Categories"}
                            </a>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => handleCategoryChange("business")}>Business</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCategoryChange("technology")}>Technology</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCategoryChange("sports")}>Sports</button></li>
                                <li><button className="dropdown-item" onClick={() => handleCategoryChange("entertainment")}>Entertainment</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item" onClick={() => handleCategoryChange("")}>All</button></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Search form */}
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn btn-dark" type="submit">Clear</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
