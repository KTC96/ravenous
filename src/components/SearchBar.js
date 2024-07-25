import React from 'react';
import '../components_css/SearchBar.css'



const SearchBar = () => {
    const sortingOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    };

    const CreateList = () => {
        return (
            <ul>
                {Object.entries(sortingOptions).map(([key, value]) => (
                    <li key={value}>{key}</li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <div className="search-section">
            <CreateList />
            <hr />
                <div className="search-bar">
                    <input className="search-box" type="search" placeholder="Business Name" />
                    <input className="search-box" type="search" placeholder="Where?" />
                </div>
                <div>
                    <input className="submit" type="submit" value="Search" formaction=""/>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
