import React from "react";

const FilterSearch = () => {
    return (
        <>
            <div className="search">
                <div className="container">
                    <label htmlFor="">Where?</label>
                    <input type="text" placeholder="Search Your destination" />
                </div>
                <div className="container">
                    <label htmlFor="">Check-in</label>
                    <input type="date" />
                </div>
                <div className="container">
                    <label htmlFor="">Check-out</label>
                    <input type="date" />
                </div>
                <button>Find listing</button>
            </div>
        </>
    );
};

export default FilterSearch;
