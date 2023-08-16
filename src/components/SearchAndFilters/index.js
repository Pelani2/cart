import React, { useState } from "react";
import "./search-and-filters-styles.scss";

const SearchAndFilters = ({ handleSearch, handleFilter }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleKeywordChange = (event) => {
        setSearchKeyword(event.target.value);
        handleSearch(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSearchKeyword(event.target.value);
        handleFilter("category", event.target.value);
    };

    return (
        <div className="search-and-filters">
            <input 
                type="text"
                placeholder="Search by keyword"
                value={searchKeyword}
                onChange={handleKeywordChange}
                className="search-input"
            />
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="category-select"
            >   
                <option value="">
                    All Categories
                </option>
            </select>
        </div>
    );
};

export default SearchAndFilters;