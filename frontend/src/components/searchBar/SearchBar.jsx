import React, { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchKey, setSearchKey] = useState("");
  const [date, setDate] = useState("");
  const handleOnChange = (e) => {
    setSearchKey(e.target.value);
    handleSearch(e.target.value);
  };
  const handleOnDateChange = (e) => {
    setDate(e.target.value);
    handleSearch(new Date(e.target.value).toISOString());
  };
  return (
    <>
      <div className="row w-100 align-items-center mt-5 justify-content-center">
        <div className="col-md-4 mt-5">
          <input
            value={searchKey}
            onChange={handleOnChange}
            type="search"
            placeholder="Search using firstname"
            className="form-control bg-dark border-success py-2 fs-5 text-success"
          />
        </div>
        <div className="col-md-2 mt-5">
          <input
            value={date}
            onChange={handleOnDateChange}
            type="date"
            className="form-control bg-dark border-success py-2 fs-5 text-success"
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
