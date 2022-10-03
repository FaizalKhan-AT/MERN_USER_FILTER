import React, { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchKey, setSearchKey] = useState("");
  const handleOnChange = (e) => {
    setSearchKey(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <>
      <div className="row w-100 align-items-center mt-5 justify-content-center">
        <div className="col-md-6 mt-5">
          <input
            value={searchKey}
            onChange={handleOnChange}
            type="search"
            placeholder="Search using firstname"
            className="form-control bg-dark border-success py-2 fs-5 text-success"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
